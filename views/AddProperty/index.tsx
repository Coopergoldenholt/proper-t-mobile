import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import { SearchSelect, SelectedInput } from '../../components/Inputs';

import { fetchManagedCompanies } from '../../functions';
import { URL } from '../../config';
import { Colors } from '../../styles';
import { Button } from '../../components/Buttons';
import { IManagedCompanySearch } from '../../types';

const PropertyRegistration = (props: any) => {
  const [propertyName, setPropertyName] = useState<string>('');
  const [selectedCompanyId, setCompanyId] = useState<string | null>(null);
  const [managedCompanies, setManagedCompanies] = useState<any>();
  const [searchText, setSearchText] = useState<string>('');
  const [isCompanySelected, setIsCompanySelected] = useState(false);

  useEffect(() => {
    getManagedCompanies()
  }, []);

  const getManagedCompanies = async () => {
    setManagedCompanies(await fetchManagedCompanies())
  }

  console.log(managedCompanies)

  const onSearchSelection = (company: IManagedCompanySearch) => {
    setSearchText(company.name);
    setCompanyId(company.id);
  };

  const handleSearchTextInput = (text: string) => {
    setSearchText(text);
    setCompanyId(null);
  };

  const handleRegister = () => {
    selectedCompanyId
      ? axios

        .post(`${URL}/api/company/properties`, {
          name: propertyName,
          managedCompany: selectedCompanyId,
          // companyId: props.user.user.companyId,
        })
        .then(res =>
          Alert.alert(
            //title
            'Property Added',
            //body
            '',
            [
              {
                text: 'Sounds Good',
                onPress: () => props.navigation.popToTop(),
              },
            ],
            { cancelable: false },
            //clicking out side of alert will not cancel
          ),
        )
        .catch(err => Alert.alert('Property Could Not be Added'))
      : Alert.alert('Please Select A Company');
  };
  // const getManagedCompanies = () => {
  //   axios.get(`${URL}/api/companies/1`).then(res => {
  //     setManagedCompanies(res.data);
  //   });
  // };

  const setSearchedProperties = () => {
    const filteredCompanies = [];

    for (let property of managedCompanies) {
      if (filteredCompanies.length === 5) break;

      if (property.name.includes(searchText)) filteredCompanies.push(property);
    }
    return filteredCompanies;
  };

  return (
    <View style={styles.background}>
      <SelectedInput
        placeholder="Property Name"
        value={propertyName}
        onChangeText={name => setPropertyName(name)}
        containerStyles={styles.input}
      />

      {managedCompanies ? (
        <SearchSelect
          value={searchText}
          data={setSearchedProperties()}
          onChangeText={text => handleSearchTextInput(text)}
          onSelection={onSearchSelection}
          selected={selectedCompanyId ? true : false}
        />
      ) : null}

      <Button
        text="Add Property"
        onPress={() => handleRegister()}
        disabled={selectedCompanyId && propertyName ? false : true}
        loading={false}
        buttonStyles={styles.button}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => state;

export default connect(mapStateToProps)(PropertyRegistration);

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.backgroundColor,
    paddingTop: 20,
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
  },
  button: {
    width: '50%',
    marginTop: 30,
    height: 35,
  },
  input: {
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
});
