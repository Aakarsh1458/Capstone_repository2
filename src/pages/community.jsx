import React, { useEffect, useState } from 'react';

// Simulated table names for localStorage
const USERS_KEY = 'community_users';
const POSTS_KEY = 'community_posts';
const FOLLOWS_KEY = 'community_follows';

// Helper: get current user (simulate login)
function getCurrentUser() {
  // For demo, use the first user as the logged-in user
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  return users[0] || null;
}

// Helper: initialize demo data if not present
function initializeDemoData() {
  if (!localStorage.getItem(USERS_KEY)) {
    const users = [
      { id: 1, username: 'alice', role: 'member', created_at: new Date().toISOString() },
      { id: 2, username: 'bob', role: 'member', created_at: new Date().toISOString() },
      { id: 3, username: 'carol', role: 'admin', created_at: new Date().toISOString() },
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
  if (!localStorage.getItem(POSTS_KEY)) {
    const posts = [
      { id: 1, title: 'Welcome!', body: 'Say hello to the community!', user_id: 1, status: 'active', created_at: new Date().toISOString() },
      { id: 2, title: 'Tips for Wellness', body: 'Share your best wellness tips here.', user_id: 2, status: 'active', created_at: new Date().toISOString() },
    ];
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
  }
  if (!localStorage.getItem(FOLLOWS_KEY)) {
    const follows = [
      { following_user_id: 1, followed_user_id: 2, created_at: new Date().toISOString() },
      { following_user_id: 2, followed_user_id: 1, created_at: new Date().toISOString() },
    ];
    localStorage.setItem(FOLLOWS_KEY, JSON.stringify(follows));
  }
}

function Community() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [follows, setFollows] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [refresh, setRefresh] = useState(false); // trigger reload

  // Initialize demo data on first load
  useEffect(() => {
    initializeDemoData();
    setUsers(JSON.parse(localStorage.getItem(USERS_KEY)));
    setPosts(JSON.parse(localStorage.getItem(POSTS_KEY)));
    setFollows(JSON.parse(localStorage.getItem(FOLLOWS_KEY)));
    setCurrentUser(getCurrentUser());
  }, []);

  // Refresh data when needed
  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem(USERS_KEY)));
    setPosts(JSON.parse(localStorage.getItem(POSTS_KEY)));
    setFollows(JSON.parse(localStorage.getItem(FOLLOWS_KEY)));
    setCurrentUser(getCurrentUser());
  }, [refresh]);

  if (!currentUser) return <div>No users found. Please register a user first.</div>;

  // --- Post creation ---
  const handlePostChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.body.trim()) return;
    const allPosts = JSON.parse(localStorage.getItem(POSTS_KEY));
    const newId = allPosts.length ? Math.max(...allPosts.map(p => p.id)) + 1 : 1;
    const post = {
      id: newId,
      title: newPost.title,
      body: newPost.body,
      user_id: currentUser.id,
      status: 'active',
      created_at: new Date().toISOString(),
    };
    allPosts.push(post);
    localStorage.setItem(POSTS_KEY, JSON.stringify(allPosts));
    setNewPost({ title: '', body: '' });
    setRefresh(r => !r);
  };

  // --- Follow/unfollow logic ---
  const isFollowing = (userId) => follows.some(f => f.following_user_id === currentUser.id && f.followed_user_id === userId);
  const handleFollow = (userId) => {
    if (userId === currentUser.id) return;
    const allFollows = JSON.parse(localStorage.getItem(FOLLOWS_KEY));
    if (!isFollowing(userId)) {
      allFollows.push({ following_user_id: currentUser.id, followed_user_id: userId, created_at: new Date().toISOString() });
      localStorage.setItem(FOLLOWS_KEY, JSON.stringify(allFollows));
      setRefresh(r => !r);
    }
  };
  const handleUnfollow = (userId) => {
    let allFollows = JSON.parse(localStorage.getItem(FOLLOWS_KEY));
    allFollows = allFollows.filter(f => !(f.following_user_id === currentUser.id && f.followed_user_id === userId));
    localStorage.setItem(FOLLOWS_KEY, JSON.stringify(allFollows));
    setRefresh(r => !r);
  };

  // --- Followers/Following ---
  const followers = follows.filter(f => f.followed_user_id === currentUser.id).map(f => f.following_user_id);
  const following = follows.filter(f => f.following_user_id === currentUser.id).map(f => f.followed_user_id);

  // --- Render ---
  return (
    <div style={{ maxWidth: 900, margin: '2rem auto', padding: '2rem', background: '#f9f7f3', borderRadius: 12, boxShadow: '0 2px 12px #b7c7a322' }}>
      <h1 style={{ color: '#6b8a4c' }}>Community Page</h1>
      <div style={{ marginBottom: 24 }}>
        <h2>Welcome, {currentUser.username}!</h2>
        <div style={{ fontSize: 15, color: '#888' }}>
          <span>Role: {currentUser.role}</span> | <span>Joined: {new Date(currentUser.created_at).toLocaleDateString()}</span>
        </div>
        <div style={{ marginTop: 8 }}>
          <strong>Followers:</strong> {followers.length} | <strong>Following:</strong> {following.length}
        </div>
      </div>

      {/* --- Create Post --- */}
      <div style={{ marginBottom: 32, padding: 16, background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px #b7c7a111' }}>
        <h3>Create a Post</h3>
        <form onSubmit={handlePostSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <input name="title" value={newPost.title} onChange={handlePostChange} placeholder="Title" style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
          <textarea name="body" value={newPost.body} onChange={handlePostChange} placeholder="What's on your mind?" rows={3} style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
          <button type="submit" style={{ background: '#6b8a4c', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 16px', marginTop: 4, cursor: 'pointer' }}>Post</button>
        </form>
      </div>

      {/* --- Posts Feed --- */}
      <div style={{ marginBottom: 32 }}>
        <h3>Community Posts</h3>
        {posts.length === 0 && <div>No posts yet.</div>}
        {posts.slice().reverse().map(post => {
          const author = users.find(u => u.id === post.user_id);
          return (
            <div key={post.id} style={{ background: '#fff', borderRadius: 8, marginBottom: 16, padding: 16, boxShadow: '0 1px 4px #b7c7a111' }}>
              <div style={{ fontWeight: 600, color: '#6b8a4c' }}>{post.title}</div>
              <div style={{ color: '#444', margin: '8px 0' }}>{post.body}</div>
              <div style={{ fontSize: 13, color: '#888' }}>
                By {author ? author.username : 'Unknown'} | {new Date(post.created_at).toLocaleString()} | Status: {post.status}
              </div>
            </div>
          );
        })}
      </div>

      {/* --- Users List --- */}
      <div style={{ marginBottom: 32 }}>
        <h3>Community Members</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map(user => (
            <li key={user.id} style={{ marginBottom: 12, background: '#fff', borderRadius: 8, padding: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 4px #b7c7a111' }}>
              <span>
                <strong>{user.username}</strong> <span style={{ color: '#888', fontSize: 13 }}>({user.role})</span>
                {user.id === currentUser.id && <span style={{ color: '#6b8a4c', marginLeft: 8 }}>(You)</span>}
              </span>
              {user.id !== currentUser.id && (
                isFollowing(user.id) ? (
                  <button onClick={() => handleUnfollow(user.id)} style={{ background: '#eee', color: '#6b8a4c', border: 'none', borderRadius: 4, padding: '6px 14px', cursor: 'pointer' }}>Unfollow</button>
                ) : (
                  <button onClick={() => handleFollow(user.id)} style={{ background: '#6b8a4c', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 14px', cursor: 'pointer' }}>Follow</button>
                )
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Community;
