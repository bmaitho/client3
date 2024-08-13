// src/components/authFetch.js

export const authFetch = async (url, options = {}) => {
    const token = localStorage.getItem('token');
    
    const headers = {
      'Authorization': `Bearer ${token}`,
      ...options.headers // Include any additional headers passed
    };
  
    const response = await fetch(url, {
      ...options,
      headers: headers,
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.error || 'Request failed');
    }
  
    return data;
  };
  