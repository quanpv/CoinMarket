import React from 'react';
import { FlatList, ActivityIndicator, View, Text, Button, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true}

  }

  FlatListItemSeparator = () => {
    return (
      <View style={{ height: 1, width: "100%", backgroundColor: "#607D8B" }} />
    );
  };

  StyleTextPercent = (value) => {
      if(value >=0) {
          return (
          {color: '#00cc00', textAlign: 'justify', fontSize: 17, marginLeft: 10}
          );
      } else {
          return (
          {color: 'red', textAlign: 'justify', fontSize: 17, marginLeft: 10}
          );
      }
  };

componentDidMount() {
  return fetch('https://api.coinmarketcap.com/v1/ticker/')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('kakakakakka-done');
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
}

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20, paddingLeft:10}}>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item}) => (
            <View style={styles.item}>
            <Text style={styles.textWhite}>{item.rank}</Text>
            <Image style={styles.image} source={{uri: "https://facebook.github.io/react-native/img/favicon.png"}}/>
            <Text style={{color:'white',fontSize: 17}}>{item.name}</Text>
            <Text style={this.StyleTextPercent(item.percent_change_24h)}>{item.percent_change_24h}{'%'}</Text>
            <Text style={this.StyleTextPercent(item.percent_change_24h)}>{'$'}{item.price_usd}</Text>
            </View>

          )}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );

    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.text}>
    //       {this.props.text}
    //     </Text>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
  },

  text: {
    color: '#00cc00',
    textAlign: 'justify',
    fontSize: 17,
    marginLeft: 10,
  },

  textRed: {
    color: 'red',
    textAlign: 'justify',
    fontSize: 17,
    marginLeft: 10,
  },

  textWhite: {
    color: 'white',
    textAlign: 'justify',
    fontSize: 17,
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },

  image: {
    margin: 15,
    width: 30,
    height: 30,
  },
});

export default withNavigation(HomeComponent);
