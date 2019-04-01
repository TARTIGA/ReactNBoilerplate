import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native'
import { DEVICE_HEIGHT } from '../helpers/dimensions'

const headerHeightPrn = 0.1
const styles = StyleSheet.create({
  headerSafe: {
    backgroundColor: '#1BB8FA'
  },
  header: {
    height: DEVICE_HEIGHT * headerHeightPrn,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1BB8FA'
  },
  mainLabel: {
    color: '#fff',
    fontSize: 24
  }
})

const Header = ({ title }) => {
  const { headerSafe, header, mainLabel } = styles
  return (
    <SafeAreaView style={headerSafe}>
      <View style={header}>
        <Text style={mainLabel}>{title}</Text>
      </View>
    </SafeAreaView>

  )
}

export { Header }
