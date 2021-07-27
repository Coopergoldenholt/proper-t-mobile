import React from 'react'
import { View, StyleSheet } from 'react-native'
import { withDecay } from 'react-native-reanimated'
import { BrightText } from '../../styles'

interface IProps {
    route: any;
}

const UserView = (props: IProps) => {
    const { user } = props.route.params

    return <View style={styles.container}>
        {user.first_name ?
            <BrightText style={styles.headerText}>{user.first_name} {user.last_name}</BrightText>
            :
            <BrightText style={styles.headerText}>User is not registered.</BrightText>}
        <BrightText style={styles.text}>{user.type_of_user}</BrightText>

        <BrightText style={styles.text}>{user.email}</BrightText>
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 20,
    },
    text: {
        paddingTop: 5,
        fontSize: 20,
    }

})

export default UserView;