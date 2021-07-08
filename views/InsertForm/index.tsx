import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Colors, BrightText } from '../../styles';
import { launchImageLibrary } from 'react-native-image-picker';

import { CleanProperty } from '../../types';
import { postForm, fetchProperties } from '../../api';
import { cleanPropertyData } from '../../functions';
import Carousel from '../../components/Carousel';
import { SelectedInput, Search, SearchSelect } from '../../components/Inputs';
import { IconButton } from '../../components/Buttons';
import Button from '../../components/Buttons/components/Button';

interface IProps {
  navigation: any;
}

const InsertForm = (props: IProps) => {
  const [title, setTitle] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const [beforeImages, setBeforeImages] = useState<any>([]);
  const [afterImages, setAfterImages] = useState<any>([]);
  const [properties, setProperties] = useState<CleanProperty[] | []>([]);
  const [selectedProperty, setSelectedProperty] = useState<CleanProperty | null>(null)
  const [propertySearchText, setPropertySearchText] = useState<string>('')


  useEffect(() => {
    getProperties()
  }, []);

  const getProperties = async () => {
    let unCleanProperties = await fetchProperties(1)


    console.log(unCleanProperties)
    setProperties(cleanPropertyData(unCleanProperties))
    console.log(properties)
  }

  const addImages = (type: 'before' | 'after') => {
    if (type === 'before') {
      launchImageLibrary(
        {
          includeBase64: true,
          selectionLimit: 4 - beforeImages.length,
          mediaType: 'photo',
        },
        res => {
          setBeforeImages([...beforeImages, ...res.assets]);
        },
      );
    } else {
      launchImageLibrary(
        {
          includeBase64: true,
          selectionLimit: 4 - afterImages.length,
          mediaType: 'photo',
        },
        res => {
          setAfterImages([...afterImages, ...res.assets]);
        },
      );
    }
  };
  const deleteImage = () => { };

  const setSearchedProperties = () => {
    const filteredProperties = [];
    if (!properties) {
      return []
    }
    for (let property of properties) {
      if (filteredProperties.length === 5) break;
      if (property.name.includes(propertySearchText)) filteredProperties.push(property);
    }
    return filteredProperties;
  };

  const onSearchSelection = (property: any) => {
    setPropertySearchText(property.name);
    setSelectedProperty(property);
  };

  const handleSearchTextInput = (text: string) => {
    setPropertySearchText(text);
    setSelectedProperty(null);
  };

  const submitForm = () => {
    postForm(title, summary, selectedProperty, beforeImages, afterImages)
  }

  let display = () => {

    return (
      <View style={{ paddingLeft: 30, paddingTop: 80, paddingRight: 30, paddingBottom: 30 }}>
        <SelectedInput
          containerStyles={{ marginBottom: 20 }}
          onChangeText={text => setTitle(text)}
          placeholder="Title"
          value={title}
        />
        <SelectedInput
          onChangeText={text => setSummary(text)}
          placeholder="Summary"
          value={summary}
          multiline={true}
          containerStyles={{ height: 100, marginBottom: 20 }}
          inputStyles={{ paddingTop: 12 }}
        />

        <SearchSelect
          value={propertySearchText}
          data={setSearchedProperties()}
          onChangeText={text => handleSearchTextInput(text)}
          onSelection={onSearchSelection}
          selected={selectedProperty ? true : false}
        />

        <View style={styles.imageContainer}>
          <BrightText style={styles.textStyle}>Before:</BrightText>
          <Carousel data={beforeImages} />
          {beforeImages.length >= 4 ? null : (
            <IconButton
              onPress={() => addImages('before')}
              containerStyles={styles.iconContainer}
              iconType="add-photo"
              size={50}
              color={Colors.brightColor}
            />
          )}
        </View>
        <View style={styles.imageContainer}>
          <BrightText style={styles.textStyle}>After:</BrightText>
          <Carousel data={afterImages} />
          {afterImages.length >= 4 ? null : (
            <IconButton
              onPress={() => addImages('after')}
              containerStyles={styles.iconContainer}
              iconType="add-photo"
              size={50}
              color={Colors.brightColor}
            />
          )}
        </View>

        <Button
          loading={false}
          onPress={() => submitForm()}
          text="Submit"
          disabled={false}
          buttonStyles={{ height: 50, marginTop: 50 }}
        />
      </View>
    );
  }
  return <FlatList data={[1]} renderItem={() => display()} />
};

const styles = StyleSheet.create({
  iconContainer: {
    alignSelf: 'center',
    padding: 10,
  },
  imageContainer: {
    paddingTop: 15,
  },
  textStyle: {
    fontSize: 20,
    paddingBottom: 15,
  },
});

export default InsertForm;
