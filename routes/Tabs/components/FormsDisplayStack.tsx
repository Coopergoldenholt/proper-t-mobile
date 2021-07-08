import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FormsDisplay from '../../../views/HomePostsDisplay';

const Stack = createStackNavigator();

const FormsDisplayStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={FormsDisplay} />
    </Stack.Navigator>
  );
};

export default FormsDisplayStack;
