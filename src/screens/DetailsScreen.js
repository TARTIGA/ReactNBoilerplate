import React from 'react'
import {
  Text,
  View,
  ScrollView,
  Button
} from 'react-native'


const DetailsScreen = ({ children, navigation }) => {
  return (
    <ScrollView>
      <View >
        <Text>{'DetailsScreen'}</Text>
        <Button title="Go to Home" onPress={() => { navigation.navigate('Home') }}></Button>
      </View>
    </ScrollView>

  )
}

export { DetailsScreen }
