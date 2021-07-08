import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PropertiesDisplay from '../../../views/PropertiesDisplay';
import RegisterCompany from '../../../views/RegisterCompany';
import AddProperty from '../../../views/AddProperty';

const Stack = createStackNavigator();

const PropertyDisplayStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Properties" component={PropertiesDisplay} />
      <Stack.Screen name="AddCompany" component={RegisterCompany} />
      <Stack.Screen name="AddProperty" component={AddProperty} />
    </Stack.Navigator>
  );
};

export default PropertyDisplayStack;
