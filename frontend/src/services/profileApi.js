// service/api.js

import axios from 'axios';

// Base configuration for Axios
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // Replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Save profile data to the server.
 *
 * @param {Object} profileData - The profile data to be saved.
 * @returns {Promise} - A promise that resolves with the server response.
 */
export const saveProfile = async (profileData) => {
  try {
    console.log(profileData)
    
    const response = await apiClient.post('/profile', profileData);
    
    return response.data;
  } catch (error) {
    console.error('Error saving profile:', error);
    throw error;
  }
};


/**
 * Fetches a pet profile by profileId
 * @param {number} profileId - The ID of the profile to fetch
 * @returns {Promise<Object>} The pet profile data from the server
 */
export const getProfileById = async (profileId) => {
    try {
      const response = await axios.get(`/api/profile/${profileId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  };


// Update profile
export const updateProfile = async (id, profileData) => {
    try {
      const response = await axios.put(`/api/profiles/${id}`, profileData);
      return response.data;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  };
  