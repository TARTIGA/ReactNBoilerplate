import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  Button
} from 'react-native'
import { Logo } from '../components'

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Logo />,
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color="#000"
        />
      ),
    };
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
            title="Modal"
          />
        </View>
      </ScrollView>
    )
  }

  /* later in the render function we display the count */
}

export { HomeScreen }