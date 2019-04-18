import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import HomeComponent from '../../components/tab/HomeComponent';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeComponent/>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: () => (
    <Image source={require('../../assets/images/homepage.png')} />
  ),
  gesturesEnabled: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2124',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

export default HomeScreen;
