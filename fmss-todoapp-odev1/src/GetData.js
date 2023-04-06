import axios from 'axios';

async function getData(userId) {
  try {
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    
    const userData = userResponse.data;
    const userPosts = postResponse.data;
    
    return { ...userData, posts: userPosts };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default getData;
