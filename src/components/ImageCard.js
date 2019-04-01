import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { DEVICE_WIDTH } from '../helpers/dimensions'

const ImageCard = ({ data }) => {
  const { cardLabel, imageCover, imageWrapper, container } = styles
  const { image, name } = data
  return (
    <View style={container}>
      <View style={imageWrapper} >
        <Image style={imageCover}
          source={{ uri: image }}
        />
      </View>
      <Text style={cardLabel}>{name.toUpperCase()}</Text>
    </View>
  )
}
const cardWIdthPrn = 2.4
const textWidthPrn = 2.4
const imageCoverHeightPrn = 0.63
const styles = StyleSheet.create({
  container: {
    width: DEVICE_WIDTH / cardWIdthPrn,
    paddingVertical: 10
  },
  imageWrapper: {
    // IOS
    // shadowColor:'#000',
    // shadowRadius: 8,
    // shadowOffset:  { width: 0,height: 5 },
    // shadowOpacity: 0.5
    // Android
    borderColor: '#000',
    borderWidth: 0,
    borderRadius: 12,
    elevation: 7
  },
  cardLabel: {
    paddingTop: 10,
    fontFamily: 'Roboto',
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    width: DEVICE_WIDTH / textWidthPrn
  },
  imageCover: {
    width: DEVICE_WIDTH / textWidthPrn,
    height: DEVICE_WIDTH * imageCoverHeightPrn,
    borderRadius: 10
  }
})
export { ImageCard }
