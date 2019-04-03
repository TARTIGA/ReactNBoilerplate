import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header, ImageCard } from './src/components'
import { Layout } from './src/layouts'
import { HomeScreen, DetailsScreen } from './src/screens'
import config from './src/config/config'
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
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
const AppStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: "Home"
  }
)
const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  }
)

const AppContainer = createAppContainer(DrawerNavigator)