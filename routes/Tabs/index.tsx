import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FormsDisplayStack from './components/FormsDisplayStack';
import InsertForm from '../../views/InsertForm';
import PropertyDisplayStack from './components/PropertyDisplayStack';
import UsersDisplayStack from './components/UsersDisplayStack';

import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  //@ts-ignore
  const user = useSelector(state => state.user);
  console.log(user);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={FormsDisplayStack} />
      {user.userType !== 'customer' ? (
        <Tab.Screen name="Form" component={InsertForm} />
      ) : null}
      <Tab.Screen name="Properties" component={PropertyDisplayStack} />
      {user.userType !== 'customer' ? (
        <Tab.Screen name="Users" component={UsersDisplayStack} />
      ) : null}
    </Tab.Navigator>
  );
};
export default Tabs;
