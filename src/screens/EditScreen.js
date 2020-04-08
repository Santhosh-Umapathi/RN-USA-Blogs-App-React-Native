import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
//Context
import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) =>
{
    const item = navigation.getParam("item"); //Getting Blog id from Home

    //Context
    const { state, editBlogPosts } = useContext(BlogContext);
    //Filtering all blogpost with id passed from home
    const blogPosts = state.find((blogpost) => blogpost.id === item.id);
    
    //State management
    const [title, setTitle] = useState(blogPosts.title);
    const [content, setContent] = useState(blogPosts.content);

  return (
    <View style={styles.containerView}>
      <Text style={styles.text}>Edit Title</Text>
      <TextInput
        style={styles.titleText}
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
      />

      <Text style={styles.text}>Edit Content</Text>
      <TextInput
        style={styles.titleContent}
        value={content}
        onChangeText={(text) => {
          setContent(text);
        }}
      />

      <Button
        title="Update"
        onPress={() => {
          editBlogPosts(item.id, item.title, item.content, () =>
            navigation.popToTop()
          );
        }}
      />
    </View>
  );
};

EditScreen.navigationOptions = () =>
{
    return {
        headerTitle:'Edit Blog'
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

export default EditScreen;
