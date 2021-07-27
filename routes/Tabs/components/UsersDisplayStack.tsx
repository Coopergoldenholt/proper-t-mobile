import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UsersDisplay from '../../../views/UsersDisplay'
import RegisterUser from '../../../views/RegisterUser';
import UserView from '../../../views/UserView';


const Stack = createStackNavigator();

const PropertyDisplayStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Users" component={UsersDisplay} />
            <Stack.Screen name="RegisterUser" component={RegisterUser} />
            <Stack.Screen
                name="UserView"
                options={{ title: 'User' }}
                component={UserView}
            />
        </Stack.Navigator>
    );
};

export default PropertyDisplayStack;