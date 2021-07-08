import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList } from 'react-native';
import { BrightText, Colors, DullText } from '../../../styles';
import Icon from '../../Icons';
import SearchItem from './SearchItem';

interface IProps {
  onChangeText: (test: string) => any;
  containerStyles?: any;
  textStyles?: any;
  inputStyles?: any;
  value: string;
  multiline?: boolean;
  data?: any;
  onSelection: any;
  selected: boolean;
}

const SelectedInput = (props: IProps) => {
  const [isSelected, setSelected] = useState<boolean>(false);

  const handleSelect = (item: any) => {
    props.onSelection(item);
  };

  return (
    <View
      style={
        !isSelected
          ? { ...styles.containerStyles, ...props.containerStyles }
          : {
            ...styles.containerStyles,
            ...styles.selectedContainerStyles,
            ...props.containerStyles,
          }
      }>
      {isSelected ? (
        <BrightText style={{ ...styles.textStyles, ...props.textStyles }}>
          Search
        </BrightText>
      ) : null}
      <View style={styles.inputContainer}>
        <Icon iconType="search" size={30} color={Colors.dullColor} />
        <TextInput
          multiline={props.multiline}
          onFocus={() => setSelected(true)}
          onBlur={() => setSelected(false)}
          value={props.value}
          placeholder="Search..."
          onChangeText={props.onChangeText}
          style={{ ...styles.inputStyles, ...props.inputStyles }}
        />
      </View>
      {!props.selected && props.data && isSelected ? (
        <FlatList
          data={props.data}
          renderItem={({ item }) => (
            <SearchItem item={item} onPress={handleSelect} />
          )}
          keyExtractor={item => item.id}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    borderColor: Colors.borderColor,
    borderWidth: 1,
    minHeight: 50,
    width: '100%',
    backgroundColor: Colors.backgroundColor,
    borderRadius: 6,
  },
  selectedContainerStyles: {
    borderColor: Colors.primaryColor,
    borderWidth: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  textStyles: {
    position: 'absolute',
    top: -10,
    left: 8,
    zIndex: 2,
    backgroundColor: Colors.backgroundColor,
    padding: 2,
    paddingTop: 0,
    color: Colors.primaryColor,
    fontSize: 17,
  },
  inputStyles: {
    width: '100%',
    // height: '90%',
    paddingLeft: 8,
  },
});

export default SelectedInput;
