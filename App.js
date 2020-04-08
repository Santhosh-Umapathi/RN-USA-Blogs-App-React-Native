import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//Context
import {Provider as BlogProvider} from './src/context/BlogContext'
//Screens
import HomeScreen from './src/screens/HomeScreen';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Blogs",
      headerTintColor: "white", //Header button colors
      headerStyle: {
        backgroundColor: "#F4C724", // header bg color
      },
      headerTitleStyle: {
        color: "white", // header font color
        fontSize: 20, // header font Size
      },
    },
  }
);
const App = createAppContainer(MainNavigator);

export default () =>
{
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
