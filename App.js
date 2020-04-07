import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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
        backgroundColor: "#45CE30", // header bg color
      },
      headerTitleStyle: {
        color: "white", // header font color
        fontSize: 22, // header font Size
      },
    },
  }
);
export default createAppContainer(MainNavigator);