import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TabComponent from '../../components/tab/TabComponent';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TabComponent text={'This is Home screen!'} />
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
    backgroundColor: 'rgba(0, 255, 0, 0.4)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

export default HomeScreen;
