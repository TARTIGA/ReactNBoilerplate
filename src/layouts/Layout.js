import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native'

const styles = StyleSheet.create({
  listItemContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    marginBottom: 150

  }
})

const Layout = ({ children }) => {
  const { listItemContainer } = styles
  return (
    <ScrollView>
      <View style={listItemContainer}>
        {children}
      </View>
    </ScrollView>

  )
}

export { Layout }
