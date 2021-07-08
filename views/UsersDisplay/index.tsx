import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SectionList } from 'react-native';

import { filterUserData, wait } from '../../functions';
import { URL } from '../../config'
import { Button } from '../../components/Buttons';
import axios from 'axios';
import Table from '../../components/Table'


const UsersDisplay = (props: any) => {
    const [users, setUsers] = useState<any>([])
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getUsers();
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        axios.get(`${URL}/api/company/users`)
            .then((res: any) => {
                setUsers(filterUserData(res.data))
            })
            .catch(err => console.log(err))
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.buttonContainer}>
                <Button
                    text="Add User"
                    onPress={() => props.navigation.navigate('RegisterUser')}
                    disabled={false}
                    loading={false}
                    buttonStyles={styles.button}
                />
            </View>
            <View style={{ alignItems: 'center', paddingTop: 20, flex: 1 }}>
                <Table refreshing={refreshing} onRefresh={onRefresh} data={users} />
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