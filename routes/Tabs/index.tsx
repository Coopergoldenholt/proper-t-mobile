import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FormsDisplayStack from './components/FormsDisplayStack';
import InsertForm from '../../views/InsertForm';
import PropertyDisplayStack from './components/PropertyDisplayStack';
import UsersDisplayStack from './components/UsersDisplayStack'

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={FormsDisplayStack} />
      <Tab.Screen name="Form" component={InsertForm} />
      <Tab.Screen name="Properties" component={PropertyDisplayStack} />
      <Tab.Screen name="Users" component={UsersDisplayStack} />
    </Tab.Navigator>
  );
};
export default Tabs;
