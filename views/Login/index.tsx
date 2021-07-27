import React, { useState } from 'react';
import { View, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from '../../components/Buttons';
import { SelectedInput } from '../../components/Inputs';
import { saveSession } from '../../ducks/reducers/userReducer';

import { loginUser } from '../../api';
import { User } from '../../types';
import { BrightText, Colors } from '../../styles';
import axios from 'axios'

const Login = (props: any) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  const handleUserLogin = async () => {
    setLoggingIn(true);
    //@ts-ignore

    setLoggingIn(false);
    try {
      let user: User = await loginUser(email, password);
      setLoggingIn(false);
      dispatch(saveSession(user));
    }
    catch {
      setLoggingIn(false);
      Alert.alert('Username or Password incorrect');
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
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        value={password}
      />
      <BrightText style={{ fontSize: 18, paddingBottom: 10 }}>
        Need to register an account?
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Register')}
          style={{ justifyContent: 'center', alignItems: 'center' }}>
          <BrightText style={{ color: Colors.primaryColor }}>
            {' '}
            Press Here
          </BrightText>
        </TouchableOpacity>
      </BrightText>
      <Button
        buttonStyles={styles.buttonContainer}
        loading={loggingIn}
        disabled={false}
        onPress={() => handleUserLogin()}
        text="Login"
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

export default Login;
