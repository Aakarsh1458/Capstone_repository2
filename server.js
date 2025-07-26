import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 5000;
const JWT_SECRET = 'your-secret-key-change-in-production';

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage (replace with database in production)
let users = [
  {
    id: 1,
    username: 'alice',
    email: 'alice@example.com',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
    role: 'member',
    age: 25,
    gender: 'Female',
    bio: 'Mental wellness advocate',
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    username: 'bob',
    email: 'bob@example.com',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
    role: 'member',
    age: 30,
    gender: 'Male',
    bio: 'Wellness enthusiast',
    created_at: new Date().toISOString()
  },
  {
    id: 3,
    username: 'carol',
    email: 'carol@example.com',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
    role: 'admin',
    age: 35,
    gender: 'Female',
    bio: 'Community moderator',
    created_at: new Date().toISOString()
  }
];

let posts = [
  {
    id: 1,
    title: 'Welcome!',
    body: 'Say hello to the community!',
    user_id: 1,
    status: 'active',
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Tips for Wellness',
    body: 'Share your best wellness tips here.',
    user_id: 2,
    status: 'active',
    created_at: new Date().toISOString()
  }
];

let follows = [
  { following_user_id: 1, followed_user_id: 2, created_at: new Date().toISOString() },
  { following_user_id: 2, followed_user_id: 1, created_at: new Date().toISOString() }
];

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

    // Check if user already exists
    const existingUser = users.find(u => u.email === email || u.username === username);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = {
      id: users.length + 1,
      username,
      email,
      password: hashedPassword,
      role: 'member',
      age: age || null,
      gender: gender || null,
      bio: bio || '',
      created_at: new Date().toISOString()
    };

    users.push(newUser);

    // Create token
    const token = jwt.sign(
      { id: newUser.id, username: newUser.username, email: newUser.email },
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

    // Find user
    const user = users.find(u => u.email === email);
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
      { id: user.id, username: user.username, email: user.email },
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
app.get('/api/me', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  const { password: _, ...userWithoutPassword } = user;
  res.json(userWithoutPassword);
});

// Get all users (for community page)
app.get('/api/users', (req, res) => {
  const usersWithoutPasswords = users.map(user => {
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });
  res.json(usersWithoutPasswords);
});

// Get all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Create post
app.post('/api/posts', authenticateToken, (req, res) => {
  const { title, body } = req.body;
  const newPost = {
    id: posts.length + 1,
    title,
    body,
    user_id: req.user.id,
    status: 'active',
    created_at: new Date().toISOString()
  };
  posts.push(newPost);
  res.status(201).json(newPost);
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 