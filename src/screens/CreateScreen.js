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
          style={styles.titleText}
          value={title}
          onChangeText={(text) => {setTitle(text);}}
        />

        <Text style={styles.text}>Enter Content</Text>
        <TextInput
          style={styles.titleContent}
          value={content}
          onChangeText={(text) => {setContent(text);}}
        />
            
        <Button
                title='Save'
                onPress={() => {addBlogPosts(title, content, () => {navigation.navigate('Home')}
                )}} 
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
    margin: 10,
  },
  titleText: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#F4C724",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  titleContent: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#F4C724",
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 80,
    marginHorizontal: 10,
  },
});

export default CreateScreen;