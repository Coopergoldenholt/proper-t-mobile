import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { Colors } from '../../../styles';
import { IconButton } from '../../Buttons';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

interface IProps {
  item: any;
  imageType?: 'before' | 'after';
  onClose?: any;
  readOnly?: boolean;
  typeOfImage?: 'before' | 'after';
}

const CarouselImage = (props: IProps) => {
  return (
    <View>
      {props.readOnly ? null :
        <IconButton
          onPress={() => props.onClose(props.typeOfImage, props.item)}
          containerStyles={{ position: 'absolute', zIndex: 2, right: 5 }}
          iconType="close"
          size={35}
          color={'white'}
        />}
      <Image
        style={{ height: ITEM_HEIGHT, width: ITEM_WIDTH }}
        source={{
          uri: props.item.base64 ? `data:image/jpeg;base64,${props.item.base64}` : props.item.imageURL,
        }}
      />
    </View>
  );
};

export default CarouselImage;
