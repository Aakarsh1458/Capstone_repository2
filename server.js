import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';
dotenv.config();

console.log("🔍 MONGO_URL =", process.env.MONGO_URL);

const app = express();
const PORT = 5000;
const JWT_SECRET = 'your-secret-key-change-in-production';

const uri = process.env.MONGO_URL;

if (!uri) {
  console.error("❌ MONGO_URL not found. Check .env file");
  process.exit(1);
}

const client = new MongoClient(uri, { useUnifiedTopology: true });
let subscribersCollection;

async function connectDB() {
  try {
    await client.connect();
    const db = client.db(); // Uses the default DB from the URI
    subscribersCollection = db.collection('subscribers');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage (replace with database in production)
// let users = [];
// let posts = [];
// let follows = [];

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Routes

// Register
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password, age, gender, bio } = req.body;
    const db = client.db();
    const usersCollection = db.collection('users');
    // Check if user already exists
    const existingUser = await usersCollection.findOne({ $or: [ { email }, { username } ] });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create new user
    const newUser = {
      username,
      email,
      password: hashedPassword,
      role: 'member',
      age: age || null,
      gender: gender || null,
      bio: bio || '',
      created_at: new Date().toISOString()
    };
    const result = await usersCollection.insertOne(newUser);
    // Create token
    const token = jwt.sign(
      { id: result.insertedId, username: newUser.username, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    // Return user data without password
    const { password: _, ...userWithoutPassword } = newUser;
    res.status(201).json({
      user: userWithoutPassword,
      token
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const db = client.db();
    const usersCollection = db.collection('users');
    // Find user
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    // Create token
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    // Return user data without password
    const { password: _, ...userWithoutPassword } = user;
    res.json({
      user: userWithoutPassword,
      token
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get current user
app.get('/api/me', authenticateToken, async (req, res) => {
  const db = client.db();
  const usersCollection = db.collection('users');
  const user = await usersCollection.findOne({ _id: new MongoClient.ObjectId(req.user.id) });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  const { password: _, ...userWithoutPassword } = user;
  res.json(userWithoutPassword);
});

// Get all users (for community page)
app.get('/api/users', async (req, res) => {
  const db = client.db();
  const usersCollection = db.collection('users');
  const users = await usersCollection.find({}).toArray();
  const usersWithoutPasswords = users.map(user => {
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });
  res.json(usersWithoutPasswords);
});

// Community posts endpoints
app.get('/api/posts', async (req, res) => {
  try {
    const db = client.db();
    const postsCollection = db.collection('posts');
    const posts = await postsCollection.find({}).sort({ createdAt: -1 }).toArray();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/posts', async (req, res) => {
  const { title, content, author, category } = req.body;
  if (!title || !content || !author) {
    return res.status(400).json({ error: 'Title, content, and author are required' });
  }
  try {
    const db = client.db();
    const postsCollection = db.collection('posts');
    const newPost = {
      title,
      content,
      author,
      category: category || 'General',
      createdAt: new Date()
    };
    const result = await postsCollection.insertOne(newPost);
    res.status(201).json({ ...newPost, _id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get follows
app.get('/api/follows', (req, res) => {
  res.json(follows);
});

// Follow user
app.post('/api/follows', authenticateToken, (req, res) => {
  const { followed_user_id } = req.body;
  const existingFollow = follows.find(
    f => f.following_user_id === req.user.id && f.followed_user_id === followed_user_id
  );
  if (existingFollow) {
    return res.status(400).json({ error: 'Already following this user' });
  }
  const newFollow = {
    following_user_id: req.user.id,
    followed_user_id,
    created_at: new Date().toISOString()
  };
  follows.push(newFollow);
  res.status(201).json(newFollow);
});

// Unfollow user
app.delete('/api/follows/:followed_user_id', authenticateToken, (req, res) => {
  const { followed_user_id } = req.params;
  const initialLength = follows.length;
  follows = follows.filter(
    f => !(f.following_user_id === req.user.id && f.followed_user_id === parseInt(followed_user_id))
  );
  if (follows.length === initialLength) {
    return res.status(404).json({ error: 'Follow relationship not found' });
  }
  res.json({ message: 'Unfollowed successfully' });
});

// Newsletter subscribe endpoint
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  try {
    // Check if already subscribed
    const existing = await subscribersCollection.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }
    // Save to DB
    await subscribersCollection.insertOne({ email, subscribedAt: new Date() });

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your_gmail@gmail.com', // Replace with your Gmail
        pass: 'your_gmail_app_password' // Use App Password, not your main password
      }
    });
    await transporter.sendMail({
      from: 'MindEase <your_gmail@gmail.com>',
      to: email,
      subject: 'Welcome to MindEase!',
      text: `Thank you for subscribing to MindEase. We're excited to have you on board!`,
      html: `<h2>Welcome to MindEase!</h2><p>Thank you for subscribing to MindEase. We're excited to have you on board!</p>`
    });
    res.json({ message: 'Subscribed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {
    const db = client.db();
    const contactsCollection = db.collection('contacts');
    await contactsCollection.insertOne({ name, email, subject, message, submittedAt: new Date() });
    res.json({ message: 'Contact form submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 