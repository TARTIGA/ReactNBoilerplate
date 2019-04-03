import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  Button,
  Icon
} from 'react-native'
import { Logo } from '../components'

class HomeScreen extends Component {

  static navigationOptions = {
    headerTitle: <Logo />,
    drawerLabel: 'Home',
  };

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { navigation } = this.props
    return (
      <ScrollView>
        <View >
          <Text>{'HomeScreen'}</Text>
          <Button title="Go to Details" onPress={() => { navigation.navigate('Details') }}></Button>
          <Text>{''}</Text>
          <Button
            onPress={() => navigation.navigate('MyModal')}
            title="Modal Open"
          />
        </View>
      </ScrollView>
    )
  }

  /* later in the render function we display the count */
}

export { HomeScreen }