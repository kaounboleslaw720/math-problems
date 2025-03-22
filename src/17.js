// Node.js package for fetching API responses and processing JSON data
const axios = require('axios');

async function fetchJsonData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from URL:", error);
    throw new Error("Failed to fetch data from the given URL.");
  }
}

// Example usage:
const url = 'https://jsonplaceholder.typicode.com/posts/1';
fetchJsonData(url).then(data => {
  console.log(' fetched data:', data);
});
