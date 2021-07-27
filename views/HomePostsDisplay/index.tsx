import React, { useState, useEffect } from 'react'

import { fetchPosts } from '../../api';
import PostListDisplay from "../../components/PostListDisplay";

const wait = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};


const HomePostDisplay = () => {
  const [posts, setPosts] = useState([])
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getPosts();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    setPosts(await fetchPosts(1))
  };

  return <PostListDisplay posts={posts} onRefresh={onRefresh} refreshing={refreshing} />
}

export default HomePostDisplay;
