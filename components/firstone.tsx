import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FirstOne = () => {
  return (
      <View style={styles.container}>
        {/* Container to align logo and text */}
        <View style={styles.innerContainer}>
          {/* Paper icon (acts like a logo background) */}
          <Image
            style={styles.paperImage}
            source={require('../assets/imgs/paper.png')}
          />

          {/* ARCHAIN text and subtitle */}
          <View style={styles.textContainer}>
            {/* Main title */}
            <Text style={styles.mainTitle}>
              ARCHAIN
            </Text>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
              VOS ARCHIVES SUR BLOCKCHAIN
            </Text>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 82,
    height: 85,
    width: '100%',
    alignItems: 'center',
  },
  innerContainer: {
    position: 'relative',
    height: '100%',
    width: 244,
  },
  paperImage: {
    position: 'absolute',
    left: 2.63,
    top: 9.59,
    zIndex: 10,
    height: 65.81,
    width: 39.85,
  },
  textContainer: {
    left: 51.91,
    top: 15.05,
    width: 200.46,
  },
  mainTitle: {
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 44,
    fontWeight: 'bold',
    lineHeight: 30,
    color: 'white',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 8,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FirstOne;