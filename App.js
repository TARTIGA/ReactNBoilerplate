import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header, ImageCard } from './src/components'
import { Layout } from './src/layouts'
import { HomeScreen, DetailsScreen, ModalScreen } from './src/screens'
import config from './src/config/config'
import { createStackNavigator, createAppContainer } from 'react-navigation';
const URL = config.rootApi

export default class App extends Component {
  state = {
    AppName: 'AppName',
    data: []
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      this.setState({ data })
    } catch (error) {
      throw error
    }
  }


  render() {
    const { AppName, data } = this.state
    return (
      <AppContainer />
    )
  }
}
const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: "Home"
  }
)

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
const AppContainer = createAppContainer(RootStack)