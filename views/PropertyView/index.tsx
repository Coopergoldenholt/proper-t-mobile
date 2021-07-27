import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {BrightText} from '../../styles';

import {fetchPostsByProperty} from '../../api';
import PostListDisplay from '../../components/PostListDisplay';

interface IProps {
  route: any;
}

const wait = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

const PropertyView = (props: IProps) => {
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const {property} = props.route.params;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getPosts();
    wait(2000).then(() => setRefreshing(false));
  }, []);
  useEffect(() => {
    getPosts();
  }, [property]);

  const getPosts = async () => {
    setPosts(await fetchPostsByProperty(property.property_id));
  };

  return (
    <PostListDisplay
      posts={posts}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
};

export default PropertyView;
