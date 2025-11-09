// TabsNavigation.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface TabsNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TabsNavigation({ activeTab, setActiveTab }: TabsNavigationProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
        paddingHorizontal: 16,
      }}>
      <TouchableOpacity
        onPress={() => setActiveTab('access')}
        style={{
          flex: 1,
          paddingVertical: 16,
          borderBottomWidth: activeTab === 'access' ? 2 : 0,
          borderBottomColor: '#9333ea',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '600',
            color: activeTab === 'access' ? '#9333ea' : '#9ca3af',
          }}>
          Accès au service
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setActiveTab('archive')}
        style={{
          flex: 1,
          paddingVertical: 16,
          borderBottomWidth: activeTab === 'archive' ? 2 : 0,
          borderBottomColor: '#9333ea',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '600',
            color: activeTab === 'archive' ? '#9333ea' : '#9ca3af',
          }}>
          Archivage
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setActiveTab('expired')}
        style={{
          flex: 1,
          paddingVertical: 16,
          borderBottomWidth: activeTab === 'expired' ? 2 : 0,
          borderBottomColor: '#9333ea',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '600',
            color: activeTab === 'expired' ? '#9333ea' : '#9ca3af',
          }}>
          Expirée
        </Text>
      </TouchableOpacity>
    </View>
  );
}