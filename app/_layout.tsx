// app/_layout.tsx
import { Tabs } from 'expo-router';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#001E52',
            height: 70,
            paddingTop: 10,
          },
        }}>
        
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="logout"
          options={{
            tabBarButton: (props) => (
              <View style={{ flex: 1, alignItems: 'center', top: -30 }}>
                <TouchableOpacity
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    backgroundColor: '#001E52',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  activeOpacity={0.7}
                  onPress={() => {
                    // Handle logout logic here
                    console.log('Logout pressed');
                  }}>
                  <Image
                    source={require('../assets/imgs/lock.png')}
                    style={{ width: 24, height: 24, resizeMode: 'contain' }}
                  />
                  <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 2 }}>
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />

        {/* Hide verify from tabs */}
        <Tabs.Screen
          name="verify"
          options={{
            href: null, // This hides the verify screen from bottom tabs
          }}
        />
      </Tabs>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}