import axios from "axios";

export const makeRequest = async (URL, options = {}) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/${URL}`, {
      ...options,
    });
    console.log(URL, response);
    return response.data;
  } catch (err) {
    throw err;
  }
};
