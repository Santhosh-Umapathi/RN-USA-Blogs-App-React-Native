import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//Context
import { Context as BlogContext } from '../context/BlogContext';

const ShowScreen = ({navigation}) =>
{

    const itemID = navigation.getParam('item') //Getting Blog id from Home
    const { state } = useContext(BlogContext); //Retreiving all Blogs

    //Filtering all blogpost with id passed from home
    const blogPosts = state.find(blogpost => blogpost.id === itemID);


    return (
      <View style={styles.containerView}>
        <Text style={styles.text}>
          {blogPosts.title} - {blogPosts.id}
        </Text>
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

export default ShowScreen;