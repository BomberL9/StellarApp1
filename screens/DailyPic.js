import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DailyPic extends Component {
  render() {
    return (
      <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
        <Text>Tela das imagens diárias!</Text>
      </View>
    );
  }
}
