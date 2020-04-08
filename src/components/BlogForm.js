import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";

const BlogForm = ({ navigation, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  return (
    <View style={styles.containerView}>
      <Text style={styles.text}>Enter Title</Text>
      <TextInput
        style={styles.titleText}
        value={title}
        onChangeText={(text) => {setTitle(text)}}
      />

      <Text style={styles.text}>Enter Content</Text>
      <TextInput
        style={styles.titleContent}
        value={content}
        onChangeText={(text) => {setContent(text)}}
      />

      <Button
        title="Save"
        onPress={() => {onSubmit(title, content);}}
      />
    </View>
  );
};


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

export default BlogForm;
