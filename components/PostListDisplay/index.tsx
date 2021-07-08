import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    RefreshControl,
    ActivityIndicator,
} from 'react-native';
import FormDisplay from './components/IndividualPost';

import { BrightText, Colors } from '../../styles';

import { fetchPosts } from '../../api';
import { Post } from '../../types';

interface IProps {
    posts: Post[];
    onRefresh: any;
    refreshing: boolean;

}

const PostListDisplay = (props: IProps) => {
    return <View style={styles.safeContainer}>
        {props.posts ? (
            <FlatList
                refreshControl={
                    <RefreshControl refreshing={props.refreshing} onRefresh={props.onRefresh} />
                }
                style={styles.container}
                data={props.posts}
                renderItem={({ item }) => <FormDisplay item={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        ) : (
            <View style={styles.noPostsContainer}>
                <BrightText style={styles.noPosts}>No Posts to display</BrightText>
            </View>
        )}
    </View>

};

export default PostListDisplay;

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
    },
    container: {
        // marginTop: 10,
    },
    containerLoading: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    item: {
        marginBottom: 10,
        backgroundColor: Colors.backgroundColor,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
    },
    itemImage: {
        width: 180,
        height: 200,
        // resizeMode: "cover",
        margin: 2,
        marginLeft: 10,
    },
    itemText: {
        paddingTop: 3,
        paddingLeft: 10,
        fontSize: 18,
    },
    beforeAfterText: {
        paddingTop: 3,
        paddingLeft: 10,
        fontSize: 18,
        marginBottom: 10,
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 10,
    },
    imageText: {
        fontSize: 16,
        padding: 5,
    },
    noPosts: {
        justifyContent: 'center',
        fontSize: 25,
    },
    noPostsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
});