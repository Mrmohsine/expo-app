import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Second = () => {
  return (
    <View style={styles.container}>
      {/* Paper logo on the left */}
      <Image
        style={styles.paperImage}
        source={require('../assets/imgs/paper.png')}
      />

      {/* Middle text info */}
      <View>
        <Text style={styles.title}>Archain</Text>
        <Text style={styles.email}>clientadmin@archain.ma</Text>
      </View>

      {/* Share icon on the right */}
      <Image
        style={styles.shareIcon}
        source={require('../assets/imgs/sahreicon.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    top: 176,
    marginHorizontal: 'auto',
    height: 103,
    width: 349,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 22,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  paperImage: {
    height: 65.81,
    width: 39.85,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  email: {
    color: '#9CA3AF', // gray-400
  },
  shareIcon: {
    height: 30.59,
    width: 30.59,
  },
})

export default Second;