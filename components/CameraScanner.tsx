// CameraScanner.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CameraView } from 'expo-camera';

interface CameraScannerProps {
  onBarcodeScanned: ({ type, data }: { type: string; data: string }) => void;
  onClose: () => void;
}

export default function CameraScanner({ onBarcodeScanned, onClose }: CameraScannerProps) {
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: '#60a5fa',
        borderRadius: 24,
        height: 384,
        overflow: 'hidden',
      }}>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={onBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}
      />
      <TouchableOpacity
        onPress={onClose}
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: 12,
          borderRadius: 8,
        }}>
        <Text style={{ color: 'white', fontWeight: '600' }}>Fermer</Text>
      </TouchableOpacity>
    </View>
  );
}