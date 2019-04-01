import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, ImageCard } from './src/components'
import { Layout } from './src/layouts'
import config from './src/config/config'

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
      <View>
        <Header title={AppName} />
        <Layout>
          {data.map((item) => {
            return <ImageCard key={item.id} data={item} />
          })
          }
        </Layout>
      </View>
    )
  }
}
