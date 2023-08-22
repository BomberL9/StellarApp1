import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class StarMap extends Component {
  render() {
    return (
      <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
        <Text>Tela do mapa estelar!</Text>
      </View>
    );
  }
}
