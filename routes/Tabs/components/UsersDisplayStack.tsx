import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UsersDisplay from '../../../views/UsersDisplay'
import RegisterUser from '../../../views/RegisterUser';

const Stack = createStackNavigator();

const PropertyDisplayStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Users" component={UsersDisplay} />
            <Stack.Screen name="RegisterUser" component={RegisterUser} />
        </Stack.Navigator>
    );
};

export default PropertyDisplayStack;