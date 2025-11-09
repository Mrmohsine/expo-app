import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

type CardProps = { img: any; nav?: boolean };

const Card: React.FC<CardProps> = ({ img, nav = false }) => {

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image} resizeMode="contain" />
      {nav && (
        <TouchableOpacity 
          style={styles.overlay} 
          onPress={() => router.push('/verify') } 
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 102,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    backgroundColor: 'white',
  },
  image: {
    height: 80,
    width: 120,
    borderRadius: 15,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Card;