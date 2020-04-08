import React, {useState, useContext} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, FlatList  } from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';

const HomeScreen = ({navigation}) =>
{

    const {state, addBlogPosts} = useContext(BlogContext);

    return (
        <View style={styles.containerView}>
            <Text style={styles.text}>HomeScreen</Text>
            <Button
                title='addBlog'
                onPress={addBlogPosts}
            />
            <FlatList
                data={state}
                keyExtractor={key => key.title}
                renderItem={({item}) => 
                {
                    return (
                        <Text>{item.title}</Text>
                    )
                }}
            />
        </View>
        );
};


const styles = StyleSheet.create({
    containerView:
    {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: 
    {
        fontSize: 30,
    },
});

export default HomeScreen;