import * as React from 'react';
import Tabs from './Tabs';

import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './Login';

const Stacks = (props: any) => {
  const user = useSelector((state) => state.user)
  return (

    <NavigationContainer>
      {user ?
        <Tabs /> : <LoginStack />}
    </NavigationContainer>
  );
};

export default Stacks;
