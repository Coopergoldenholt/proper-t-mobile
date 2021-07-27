import React, { useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from '../../components/Buttons';
import { SelectedInput } from '../../components/Inputs';
import { saveSession } from '../../ducks/reducers/userReducer';

import { registerUser } from '../../api';
import { User } from '../../types';

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  const handleRegister = async () => {
    setLoggingIn(true);
    try {
      //@ts-ignore
      let user: User = await registerUser(email, password, firstName, lastName);
      dispatch(saveSession(user));
    } catch {
      Alert.alert('Somthing went wrong');
    }
  };

  const buttonDisabled = () => {
    if (email && lastName && firstName && password) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <View style={styles.container}>
      <SelectedInput
        containerStyles={styles.inputContainers}
        onChangeText={text => setEmail(text)}
        placeholder="Email"
        value={email}
      />
      <SelectedInput
        containerStyles={styles.inputContainers}
        onChangeText={text => setFirstname(text)}
        placeholder="First Name"
        value={firstName}
      />
      <SelectedInput
        containerStyles={styles.inputContainers}
        onChangeText={text => setLastName(text)}
        placeholder="Last Name"
        value={lastName}
      />
      <SelectedInput
        containerStyles={styles.inputContainers}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        value={password}
      />
      <Button
        buttonStyles={styles.buttonContainer}
        loading={loggingIn}
        disabled={!buttonDisabled()}
        onPress={() => handleRegister()}
        text="Register"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 100,
  },
  inputContainers: {
    marginBottom: 15,
  },
  buttonContainer: {
    height: 40,
  },
});

export default Register;
