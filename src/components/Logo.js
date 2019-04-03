import React, { Component } from 'react'
import {
  StyleSheet,
  Image
} from 'react-native'

const styles = StyleSheet.create({

})

class Logo extends Component {
  render() {
    return (
      <Image
        source={{ uri: 'https://damiandeluca.com.ar/wp-content/uploads/2018/04/reactjs.png' }}
        style={{ width: 55, height: 50 }}
      />
    );
  }
}


export { Logo }