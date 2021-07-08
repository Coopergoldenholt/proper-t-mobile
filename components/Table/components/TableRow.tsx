import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { BrightText } from '../../../styles';

interface IProps {
  lastItem: boolean;
  text: string;
}

const TableRow = (props: IProps) => {
  return (
    <TouchableOpacity
      style={props.lastItem ? styles.lastContainer : styles.container}>
      <BrightText>{props.text}</BrightText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    minHeight: 50,
    borderColor: 'black',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    justifyContent: 'center',
    paddingLeft: 20
  },
  lastContainer: {
    // flex: 1,
    minHeight: 50,
    borderColor: 'black',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginBottom: 10,
    justifyContent: 'center',
    paddingLeft: 20
  },

});

export default TableRow;
