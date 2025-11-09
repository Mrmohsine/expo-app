// ScannerButton.tsx
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface ScannerButtonProps {
  onPress: () => void;
}

export default function ScannerButton({ onPress }: ScannerButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#9333ea',
        borderRadius: 16,
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: 24,
      }}>
      <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: '600' }}>
        Scanner Document
      </Text>
    </TouchableOpacity>
  );
}