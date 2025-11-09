import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

const LastOne = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.card}>
        <Text style={styles.text}>
          Une solution d archivage et  de documents par la technologie BLOCKCHAIN
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    marginBottom: 32,
    marginTop: 16,
    width: 366,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
  text: {
    width: 250,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    color: '#001E52',
  },
});

export default LastOne;