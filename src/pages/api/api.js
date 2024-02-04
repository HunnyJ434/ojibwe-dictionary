// api.js
import axios from 'axios';
export const postData = async (postData) => {
    try {
    const response = await axios.post('https://folkloric-pier-410902.ue.r.appspot.com/api/process_data', { input_string: postData });
    const resultWords = response.data.result_string.split(' '); // Split the string into an array of words
    const resultValue = response.data.value
    const Word = resultWords.length > 0 ? resultWords[0] : ''; // Get the first word
    const data = [Word,resultValue]
    return data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };
  