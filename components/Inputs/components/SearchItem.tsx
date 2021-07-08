import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { BrightText } from '../../../styles';

interface IProps {
  item: any;
  onPress: any;
}

const SearchItem = (props: IProps) => {
  console.log(props.item)
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.onPress(props.item)}>
      <BrightText>{props.item.name}</BrightText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 50,
    paddingBottom: 10,
  },
});

export default SearchItem;
