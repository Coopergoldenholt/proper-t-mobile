import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';

import { SelectedInput } from '../../components/Inputs';

import axios from 'axios';

import { URL } from '../../config';
import { Button } from '../../components/Buttons';

const CompanyRegistration = (props: any) => {
  const [companyName, setCompanyName] = useState('');

  const handleRegister = () => {
    axios
      .post(`${URL}/api/company/managing-company`, {
        companyName: companyName,
      })
      .then(res =>
        Alert.alert(
          //title
          'Company Added',
          //body
          '',
          [
            {
              text: 'Okay',
              onPress: () => props.navigation.goBack(),
            },
          ],
          { cancelable: false },
          //clicking out side of alert will not cancel
        ),
      )
      .catch(err => Alert.alert('Company Could Not be Added'));
  };

  return (
    <View style={styles.background}>
      <SelectedInput value={companyName} onChangeText={name => setCompanyName(name)} placeholder="Company Name" />

      <Button
        onPress={() => handleRegister()}
        loading={false}
        disabled={companyName ? false : true}
        text='Create Company'
        buttonStyles={styles.button}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => state;

export default connect(mapStateToProps)(CompanyRegistration);

const styles = StyleSheet.create({
  background: {
    width: '100%',
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30
  },
  button: {
    width: '50%',
    marginTop: 20,
    height: 35

  },
  buttonText: {
    color: 'white',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'black',
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
});
