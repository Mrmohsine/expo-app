import { StyleSheet, View, DimensionValue } from 'react-native'
import React from 'react'

const Line = ({ w }: { w: DimensionValue }) => {
  return (
    <View style={[styles.line, { width: w }]} />
  )
}

const styles = StyleSheet.create({
  line: {
    height: 4,
    backgroundColor: '#D1D5DB', 
    borderRadius: 9999,
    alignSelf: 'center',
  },
})

export default Line;