import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { communityAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';

function Community() {
  const [activeTab, setActiveTab] = useState('discussions');
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoadingPosts(true);
    try {
      const data = await communityAPI.getPosts();
      setPosts(data);
    } catch (err) {
      // handle error
    } finally {
      setLoadingPosts(false);
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content) return;
    try {
      await communityAPI.createPost({
        title: newPost.title,
        content: newPost.content,
        author: user ? user.username : 'Anonymous',
        category: 'General',
      });
      setNewPost({ title: '', content: '' });
      setShowCreatePost(false);
      fetchPosts();
    } catch (err) {
      // handle error
    }
  };

  const tabs = [
    { id: 'discussions', name: 'Discussions', icon: '💬' },
    { id: 'support', name: 'Support Groups', icon: '🤝' },
    { id: 'events', name: 'Events', icon: '📅' },
    { id: 'resources', name: 'Resources', icon: '📚' }
  ];

  const discussions = [
    {
      id: 1,
      title: "How do you manage daily stress?",
      author: "Sarah M.",
      content: "Looking for practical tips on managing work stress. What works for you?",
      replies: 12,
      likes: 24,
      time: "2 hours ago",
      category: "Stress Management"
    },
    {
      id: 2,
      title: "Meditation techniques for beginners",
      author: "Mike R.",
      content: "Just started my meditation journey. Any recommendations for a complete beginner?",
      replies: 8,
      likes: 15,
      time: "5 hours ago",
      category: "Mindfulness"
    },
    {
      id: 3,
      title: "Building healthy sleep habits",
      author: "Emma L.",
      content: "Struggling with sleep lately. What routines have helped you get better rest?",
      replies: 20,
      likes: 31,
      time: "1 day ago",
      category: "Sleep"
    }
  ];

  const supportGroups = [
    {
      id: 1,
      name: "Anxiety Support Circle",
      members: 156,
      description: "A safe space to share experiences and coping strategies for anxiety.",
      meetingTime: "Every Tuesday 7PM EST",
      status: "Active"
    },
    {
      id: 2,
      name: "Mindfulness Practitioners",
      members: 89,
      description: "Group for those practicing or interested in mindfulness and meditation.",
      meetingTime: "Every Thursday 6PM EST",
      status: "Active"
    },
    {
      id: 3,
      name: "Stress Management Workshop",
      members: 203,
      description: "Weekly workshops focused on practical stress management techniques.",
      meetingTime: "Every Saturday 10AM EST",
      status: "Active"
    }
  ];

  const events = [
    {
      id: 1,
      title: "MindEase Workshop",
      date: "Dec 15, 2024",
      time: "2:00 PM EST",
      type: "Virtual Workshop",
      attendees: 45,
      description: "Learn practical techniques for maintaining MindEase in daily life."
    },
    {
      id: 2,
      title: "Community Meet & Greet",
      date: "Dec 20, 2024",
      time: "7:00 PM EST",
      type: "Virtual Social",
      attendees: 32,
      description: "Connect with fellow community members in a relaxed, social setting."
    },
    {
      id: 3,
      title: "Expert Q&A Session",
      date: "Dec 25, 2024",
      time: "6:00 PM EST",
      type: "Expert Session",
      attendees: 67,
      description: "Ask questions to our mental health experts and get personalized advice."
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Community Guidelines",
      type: "Document",
      description: "Learn about our community standards and how to participate respectfully."
    },
    {
      id: 2,
      title: "Mental Health Resources",
      type: "Directory",
      description: "Curated list of professional mental health resources and crisis support."
    },
    {
      id: 3,
      title: "Wellness Tips Archive",
      type: "Collection",
      description: "Archive of community-shared wellness tips and strategies."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'discussions':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Community Discussions</h2>
              <button
                onClick={() => setShowCreatePost(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Discussion
              </button>
            </div>
            
            {loadingPosts ? (
              <div className="text-white/60">Loading posts...</div>
            ) : posts.length === 0 ? (
              <div className="text-white/60">No discussions yet. Be the first to post!</div>
            ) : (
              posts.map((post) => (
                <div key={post._id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
                      <p className="text-white/70 text-sm">{post.content}</p>
                    </div>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <div className="flex items-center space-x-4">
                      <span>By {post.author}</span>
                      <span>{post.createdAt ? new Date(post.createdAt).toLocaleString() : ''}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        );
      
      case 'support':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Support Groups</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportGroups.map((group) => (
                <div key={group.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{group.name}</h3>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                      {group.status}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm mb-4">{group.description}</p>
                  <div className="text-sm text-white/60 mb-4">
                    <div>👥 {group.members} members</div>
                    <div>🕐 {group.meetingTime}</div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Join Group
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'events':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div key={event.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm mb-4">{event.description}</p>
                  <div className="text-sm text-white/60 mb-4">
                    <div>📅 {event.date}</div>
                    <div>🕐 {event.time}</div>
                    <div>👥 {event.attendees} attending</div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Join Event
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'resources':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Community Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <div key={resource.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm mb-4">{resource.description}</p>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Access Resource
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              MindEase <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Community</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Connect with others on similar wellness journeys. Share experiences, find support, and grow together.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">1,247</div>
              <div className="text-white/60 text-sm">Active Members</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">156</div>
              <div className="text-white/60 text-sm">Discussions</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">12</div>
              <div className="text-white/60 text-sm">Support Groups</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">8</div>
              <div className="text-white/60 text-sm">Upcoming Events</div>
            </div>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap gap-4">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10'
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span>{tab.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants}>
            {renderContent()}
          </motion.div>

          {/* Create Post Modal */}
          {showCreatePost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-2xl w-full mx-4"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Start a Discussion</h3>
                <form className="space-y-6" onSubmit={handleCreatePost}>
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">Title</label>
                    <input
                      type="text"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter discussion title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">Content</label>
                    <textarea
                      value={newPost.content}
                      onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                      rows="6"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Share your thoughts..."
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setShowCreatePost(false)}
                      className="px-6 py-3 border border-white/20 text-white/60 hover:text-white hover:border-white/40 rounded-xl transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Post Discussion
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Community;
