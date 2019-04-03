import React, { Component } from 'react'
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image
} from 'react-native'

const styles = StyleSheet.create({

})

class ModalScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Image
          source={{ uri: 'https://wiki.gamedetectives.net/images/thumb/e/ed/CP2077.png/500px-CP2077.png' }}
          style={{ width: 200, height: 50 }}
        />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}


export { ModalScreen }