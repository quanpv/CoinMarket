import {createAppContainer, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/tab/HomeScreen';
import NewsScreen from '../screens/tab/NewsScreen';

const Tab = createBottomTabNavigator(
  {
    Tab1: {
      screen: HomeScreen,
    },
    Tab2: {
      screen: NewsScreen,
    },
  },
  {
    initialRouteName: 'Tab1',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      inactiveTintColor: '#888',
      activeBackgroundColor: '#FFF', // iOS
      inactiveBackgroundColor: '#DDD', // iOS
      pressColor: '#e91e63', // Android
      indicatorStyle: { // Android
        backgroundColor: '#242134',
      },
      style: {
        backgroundColor: '#EEE', // Android
      },
    },
  },
);

const AppContainer = createAppContainer(Tab);

export default AppContainer;
