import React from 'react'
import { View, Text, Image, ImageSourcePropType, StyleSheet } from 'react-native'

type SmallCardProps = {
  img: ImageSourcePropType
  text: string
  imgSize?: { width: number; height: number }
}

const SmallCard: React.FC<SmallCardProps> = ({ 
  img, 
  text, 
  imgSize = { width: 40, height: 40 } 
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={[styles.image, imgSize]}
        resizeMode="contain"
      />
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 100,
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  image: {
    marginBottom: 8,
  },
  text: {
    color: '#00AEEF',
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 13,
    textAlign: 'center',
  },
})

export default SmallCard;