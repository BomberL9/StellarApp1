import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SpaceCraft extends Component {
  render() {
    return (
      <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
        <Text>Tela da nave espacial!</Text>
      </View>
    );
  }
}
