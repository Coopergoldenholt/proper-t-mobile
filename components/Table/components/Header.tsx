import React from 'react';
import { View, StyleSheet } from 'react-native';

import { BrightText, Colors } from '../../../styles';

interface IProps {
  header: string;
}

const Header = (props: IProps) => {
  console.log(props.header)
  return (
    <View style={styles.container}>
      <BrightText style={styles.text}>{props.header}</BrightText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 350,
    borderWidth: 1,
    height: 30,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: Colors.white
  }
});

export default Header;
