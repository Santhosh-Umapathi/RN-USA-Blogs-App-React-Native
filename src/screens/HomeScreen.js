import React, {useState, useContext} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, FlatList  } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

//Icons
import { Feather } from "@expo/vector-icons";

const HomeScreen = ({navigation}) =>
{

    const {state, addBlogPosts, deleteBlogPosts} = useContext(BlogContext);

    return (
        <View style={styles.containerView}>
            <Button
                title='addBlog'
                onPress={addBlogPosts}
            />
            <FlatList
                data={state}
                keyExtractor={key => key.id}
                renderItem={({item}) => 
                {
                    return (
                      <View style={styles.rowStyle}>
                        <Text style={styles.text}>{item.title}</Text>
                        <TouchableOpacity onPress={()=>deleteBlogPosts(item.id)}>
                          <Feather
                            name="trash"
                            size={30}
                            style={styles.iconStyle}
                          />
                        </TouchableOpacity>
                      </View>
                    );
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
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    text: 
    {
        fontSize: 30,
        marginLeft: 10
    },
    iconStyle:
    {
        marginRight: 5     
    },   
    rowStyle:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: 'lightgray',
        borderTopColor:'white',
        borderWidth: 0.5,
        marginBottom: 5,
        padding: 10
    }
});

export default HomeScreen;