import * as React from 'react';
import Tabs from './Tabs';

import {NavigationContainer} from '@react-navigation/native';

const Stacks = (props: any) => {
  // const StackDisplay = () => {
  // 	switch (props.user.user.user) {
  // 		case "Admin":

  // 		case "employee":
  // 			return (
  // 				<NavigationContainer>
  // 					<Tab.Navigator>
  // 						<Tab.Screen name="Home" component={EmployeeHomeStack} />
  // 						<Tab.Screen name="Forms" component={EmployeeFormsStack} />
  // 						<Tab.Screen
  // 							name="Properties"
  // 							component={EmployeePropertiesStack}
  // 						/>
  // 					</Tab.Navigator>
  // 				</NavigationContainer>
  // 			);

  // 		default:
  // 			return <UserStack />;
  // 	}
  // };

  //   return props.user.user ? null : (
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
  //   );
};

export default Stacks;
