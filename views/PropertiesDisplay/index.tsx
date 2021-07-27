import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SectionList} from 'react-native';

import {filterPropertyData, wait} from '../../functions';
import {URL} from '../../config';
import {Button} from '../../components/Buttons';
import axios from 'axios';
import Table from '../../components/Table';
import {useSelector} from 'react-redux';

const UsersDisplay = (props: any) => {
  const user = useSelector(state => state.user);
  const [properties, setProperties] = useState<any>([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getProperties();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getProperties();
  }, []);

  const getProperties = () => {
    axios
      .get(`${URL}/api/company/properties`)
      .then((res: any) => {
        setProperties(filterPropertyData(res.data));
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={{flex: 1}}>
      {user.userType === 'admin' ? (
        <View style={styles.buttonContainer}>
          <Button
            text="Add Property"
            onPress={() => props.navigation.navigate('AddProperty')}
            disabled={false}
            loading={false}
            buttonStyles={styles.button}
          />
          <Button
            text="Add Company"
            onPress={() => props.navigation.navigate('AddCompany')}
            disabled={false}
            loading={false}
            buttonStyles={styles.button}
          />
        </View>
      ) : null}
      <View style={{alignItems: 'center', paddingTop: 20, flex: 1}}>
        <Table
          onPress={(property: any) =>
            props.navigation.navigate('Property', {property})
          }
          refreshing={refreshing}
          onRefresh={onRefresh}
          data={properties}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  button: {
    width: 130,
    height: 30,
  },
});

export default UsersDisplay;
