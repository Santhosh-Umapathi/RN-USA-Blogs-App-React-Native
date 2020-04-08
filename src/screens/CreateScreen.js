import React, {useState, useContext} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button  } from 'react-native';
//Context
import { Context as BlogContext } from '../context/BlogContext';

const CreateScreen = ({navigation}) =>
{

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    //Context
    const { addBlogPosts } = useContext(BlogContext);

    return (
      <View style={styles.containerView}>
        <Text style={styles.text}>Enter Title</Text>
        <TextInput
          style={styles.titleInputStyle}
          value={title}
          onChangeText={(text) => {setTitle(text);}}
        />

        <Text style={styles.text}>Enter Content</Text>
        <TextInput
          style={styles.contentInputStyle}
          value={content}
          onChangeText={(text) => {setContent(text);}}
        />
            
        <Button
                title='Save'
                onPress={() => { addBlogPosts(title, content) }} 
        />
      </View>
    );
};

CreateScreen.navigationOptions = ({navigation}) =>
{
    return {
        headerTitle:'Create Blog'
    };
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
    margin: 5,
  },
  titleInputStyle: {
    borderWidth: 0.5,
    borderColor: "#F4C724",
    marginHorizontal: 5,
    marginBottom: 10,
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 20,
    paddingTop: 5,
  },
  contentInputStyle: {
    borderWidth: 0.5,
    borderColor: "#F4C724",
    marginHorizontal: 5,
    marginBottom: 10,
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 80,
    fontSize: 20,
  },
});

export default CreateScreen;