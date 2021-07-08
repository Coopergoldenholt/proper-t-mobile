import React, { version } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import Carousel from '../../Carousel';
import { BrightText } from '../../../styles';
import { Images, Post } from '../../../types';

interface IProps {
  item: Post
}

const PostDisplay = (props: IProps) => {
  const item = props.item;

  let date = moment(item.date).format('MMMM Do YYYY, h:mm a');
  return (
    <View style={styles.item}>
      <BrightText style={styles.title}>{item.property_name}</BrightText>
      <BrightText style={styles.title}>{item.first_name} {item.last_name}</BrightText>
      <BrightText style={styles.itemText}>{item.title}</BrightText>
      <BrightText style={styles.itemText}>{date}</BrightText>
      <BrightText style={styles.itemText}>{item.summary}</BrightText>


      <View style={styles.imageContainer}>
        <BrightText style={styles.beforeAfterText}>Before:</BrightText>
        <Carousel readOnly={true} data={item.images.filter((ele: Images) => ele.typeOfImage === 'before')} />
      </View>

      <View style={styles.imageContainer}>
        <BrightText style={styles.beforeAfterText}>After:</BrightText>
        <Carousel readOnly={true} data={item.images.filter((ele: Images) => ele.typeOfImage === 'after')} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
  itemText: {
    paddingTop: 8,
    paddingLeft: 10,
    fontSize: 18,
  },
  beforeAfterText: {
    paddingTop: 3,
    paddingLeft: 10,
    fontSize: 18,
    marginBottom: 10,
  },
  summary: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 10,
  },
  title: {
    paddingTop: 5,
    paddingLeft: 12,
    fontSize: 25,
    fontWeight: 'bold',
  },
  imageContainer: {
    paddingTop: 15,
    paddingBottom: 25
  }
});

export default PostDisplay;
