import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  Button,
  Icon
} from 'react-native'
import { Logo } from '../components'

class SettingsScreen extends Component {

  static navigationOptions = {
  };



  render() {
    const { navigation } = this.props
    return (
      <ScrollView>
        <View >
          <Text>{'SettingsScreen'}</Text>
          <Button title="pop To Top" onPress={() => { navigation.popToTop }}></Button>
          <Text>{''}</Text>
        </View>
      </ScrollView>
    )
  }

}

export { SettingsScreen }