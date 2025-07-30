const API_BASE_URL = 'http://localhost:5000/api';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Something went wrong');
  }
  return response.json();
};

// Authentication APIs
export const authAPI = {
  register: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  },

  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return handleResponse(response);
  },

  getCurrentUser: async (token) => {
    const response = await fetch(`${API_BASE_URL}/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  },
};

// Community APIs
export const communityAPI = {
  getUsers: async () => {
    const response = await fetch(`${API_BASE_URL}/users`);
    return handleResponse(response);
  },

  getPosts: async () => {
    const response = await fetch(`${API_BASE_URL}/posts`);
    return handleResponse(response);
  },

  createPost: async (postData) => {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    return handleResponse(response);
  },

  getFollows: async () => {
    const response = await fetch(`${API_BASE_URL}/follows`);
    return handleResponse(response);
  },

  followUser: async (userId, token) => {
    const response = await fetch(`${API_BASE_URL}/follows`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ followed_user_id: userId }),
    });
    return handleResponse(response);
  },

  unfollowUser: async (userId, token) => {
    const response = await fetch(`${API_BASE_URL}/follows/${userId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  },
};

// Newsletter API
export const newsletterAPI = {
  subscribe: async (email) => {
    const response = await fetch(`${API_BASE_URL}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    return handleResponse(response);
  },
};

// Contact API
export const contactAPI = {
  submit: async (formData) => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return handleResponse(response);
  },
}; 