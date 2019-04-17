import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TabComponent from '../../components/tab/TabComponent';

class NewsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TabComponent text={'This is News screen!'} />
      </View>
    );
  }
}

NewsScreen.navigationOptions = {
  tabBarLabel: 'News',
  tabBarIcon: () => (
    <Image source={require('../../assets/images/newspaper.png')} />
  ),
  gesturesEnabled: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#667155',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

export default NewsScreen;
