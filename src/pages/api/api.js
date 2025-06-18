// api.js
import axios from 'axios';

const BASE_URL = 'http://34.60.139.39:5000'; // or your deployed Flask endpoint

export const translateWord = async (text, direction = 'ojibwe-to-english') => {
  try {
    const response = await axios.post(`${BASE_URL}/predict`, {
      input: text,
      direction: direction // optional; currently unused but future-ready
    });

    const output = response.data.output || '';
    const words = output.split(' ');
    const firstWord = words.length > 0 ? words[0] : '';

    return {
      original: text,
      translated: output,
      direction,
      preview: firstWord
    };
  } catch (error) {
    console.error('Error translating word:', error);
    throw error;
  }
};
