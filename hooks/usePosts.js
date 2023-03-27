import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/comments'
  );
  return data;
};

const fetchPost = async (postId) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return data;
};

const usePosts = () => useQuery('posts', fetchPosts);

const usePost = (postId) => useQuery(['post', postId], () => fetchPost(postId));

export { usePosts, usePost };
