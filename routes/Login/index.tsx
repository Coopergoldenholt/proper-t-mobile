import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../views/Login';
import Register from '../../views/Register';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default LoginStack;
