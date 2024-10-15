import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://development.ziba-property.com/api', // Base URL for all requests
  timeout: 10000, // Set timeout (optional)
  headers: {
    'Content-Type': 'application/json', // Example default header
    // Add other headers if needed
  },
});

export default axiosInstance;
