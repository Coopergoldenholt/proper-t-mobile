import React from 'react';
import { Dimensions } from 'react-native';
import CarouselImport from 'react-native-snap-carousel';

import CarouselImage from './components/CarouselImage';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

interface IProps {
  data: any;
  readOnly?: boolean;
  deleteImage?: any;
  typeOfImage?: 'before' | 'after'
}

const Carousel = (props: IProps) => {
  return (
    <CarouselImport
      data={props.data}
      renderItem={({ item }) => <CarouselImage
        onClose={props.deleteImage}
        readOnly={props.readOnly}
        item={item}
        typeOfImage={props.typeOfImage}
      />}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
    />
  );
};

export default Carousel;
