import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PropertiesDisplay from '../../../views/PropertiesDisplay';
import RegisterCompany from '../../../views/RegisterCompany';
import AddProperty from '../../../views/AddProperty';
import PropertyView from '../../../views/PropertyView';

const Stack = createStackNavigator();

const PropertyDisplayStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Properties" component={PropertiesDisplay} />
      <Stack.Screen name="AddCompany" component={RegisterCompany} />
      <Stack.Screen name="AddProperty" component={AddProperty} />
      <Stack.Screen name="Property" component={PropertyView} />
    </Stack.Navigator>
  );
};

export default PropertyDisplayStack;
