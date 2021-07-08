import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Alert,
} from 'react-native';

import { SelectedInput, SearchSelect } from '../../components/Inputs';
import { fetchManagedCompanies, filterManagedCompanies } from '../../functions';
import { IManagedCompanySearch } from '../../types';

import { userRegister } from '../../api';
import { Button, OptionButton } from '../../components/Buttons';

const RegisterUser = (props: any) => {
    const [email, setEmail] = useState<string>('')
    const [typeOfUser, setTypeOfUser] = useState<'admin' | 'employee' | 'customer'>('employee');
    const [managedCompanyId, setManagedCompanyId] = useState<null | string>(null)
    const [managedCompanies, setManagedCompanies] = useState<any>([]);
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        getManagedCompanies()
    }, []);

    const getManagedCompanies = async () => {
        setManagedCompanies(await fetchManagedCompanies())
    }

    const handleSearchTextInput = (text: string) => {
        setSearchText(text);
        setManagedCompanyId(null);
    };

    const onSearchSelection = (company: IManagedCompanySearch) => {
        setSearchText(company.name);
        setManagedCompanyId(company.id);
    };

    const handleRegister = async () => {
        let check = registrationCheck()
        if (check === 'good') {
            let response: string = await userRegister(typeOfUser, email, managedCompanyId)
            console.log(response)
            if (response === 'User Added') {
                Alert.alert('User Added')
                props.navigation.goBack()
            } else {
                Alert.alert('Email is in use')
            }
        }

    };

    const registrationCheck = () => {
        if (!email) {
            return Alert.alert('Please Insert an Email')
        }
        if (typeOfUser === 'customer' && email && !managedCompanyId) {
            return Alert.alert('For Customers, you Must Select a Company.')
        }
        return 'good'
    }

    return (
        <View style={styles.background}>
            <View style={styles.optionButtonContainer}>
                <OptionButton
                    id='admin'
                    text='Admin'
                    pressed={typeOfUser === 'admin'}
                    onPress={(userType: 'admin') => {
                        setTypeOfUser(userType)
                        setManagedCompanyId(null)
                        setSearchText('')
                    }}
                />
                <OptionButton
                    id='employee'
                    text='Employee'
                    pressed={typeOfUser === 'employee'}
                    onPress={(userType: 'employee') => {
                        setTypeOfUser(userType)
                        setManagedCompanyId(null)
                        setSearchText('')
                    }}
                />
                <OptionButton
                    id='customer'
                    text='Customer'
                    pressed={typeOfUser === 'customer'}
                    onPress={(userType: 'customer') => setTypeOfUser(userType)}
                />
            </View>
            <SelectedInput
                containerStyles={{ marginBottom: 15 }}
                value={email}
                onChangeText={email => setEmail(email)}
                placeholder="Email"
            />



            {typeOfUser === 'customer' ?
                <SearchSelect
                    value={searchText}
                    data={filterManagedCompanies(managedCompanies, searchText)}
                    onChangeText={(text: string) => handleSearchTextInput(text)}
                    onSelection={onSearchSelection}
                    selected={managedCompanyId ? true : false}
                /> : null}

            <Button
                onPress={() => handleRegister()}
                loading={false}
                disabled={false}
                text='Register User'
                buttonStyles={styles.button}
            />
        </View>
    );
};



export default RegisterUser;

const styles = StyleSheet.create({
    background: {
        width: '100%',
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30
    },
    button: {
        width: '50%',
        marginTop: 20,
        height: 35

    },
    optionButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 15
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        color: 'black',
    },
    text: {
        color: 'white',
        fontSize: 40,
    },
});