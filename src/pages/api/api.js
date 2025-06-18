// api.js
import axios from 'axios';

// Replace with your actual Flask server URL
const BASE_URL = 'http://34.60.139.39:5000';

export const postData = async (inputText) => {
  try {
    const response = await axios.post(`${BASE_URL}/predict`, {
      input: inputText,
    });
 
    const { output } = response.data;
    console.log(response.data)
    return [output || ''];
  } catch (error) {
    
    console.error('❌ API error:', error);
    return ['', ''];
  }
};
