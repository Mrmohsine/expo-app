// Header.tsx
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Header() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../assets/image.png')}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 140,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        overflow: 'hidden',
        zIndex: 10,
      }}
      resizeMode="cover">
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ padding: 16, paddingTop: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{ width: 40, height: 40, justifyContent: 'center' }}
              onPress={() => router.back()}>
              <Image source={require('../assets/fleche.png')} />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  backgroundColor: '#9333ea',
                  padding: 12,
                  borderRadius: 12,
                  marginRight: 12,
                }}>
                <Text style={{ fontSize: 28 }}>📄</Text>
              </View>
              <View>
                <Text
                  style={{ color: 'white', fontSize: 24, fontWeight: 'bold', letterSpacing: 2 }}>
                  ARCHAIN
                </Text>
                <Text style={{ color: '#a78bfa', fontSize: 12, letterSpacing: 4 }}>VERIFY</Text>
              </View>
            </View>

            <TouchableOpacity
              style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/points.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}