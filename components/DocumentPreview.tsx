// DocumentPreview.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DocumentPreviewProps {
  scannedData: string;
}

export default function DocumentPreview({ scannedData }: DocumentPreviewProps) {
  return (
    <View
      style={{
        height: 384,
        backgroundColor: '#f9fafb',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
      {/* Top Left Corner */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 78,
          height: 78,
          borderTopWidth: 6,
          borderLeftWidth: 6,
          borderColor: '#8547F5',
        }}
      />

      {/* Top Right Corner */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 78,
          height: 78,
          borderTopWidth: 6,
          borderRightWidth: 6,
          borderColor: '#8547F5',
        }}
      />

      {/* Bottom Left Corner */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 78,
          height: 78,
          borderBottomWidth: 6,
          borderLeftWidth: 6,
          borderColor: '#8547F5',
        }}
      />

      {/* Bottom Right Corner */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 78,
          height: 78,
          borderBottomWidth: 6,
          borderRightWidth: 6,
          borderColor: '#8547F5',
        }}
      />

      {scannedData ? (
        <View style={{ padding: 20 }}>
          <Text
            style={{ color: '#9333ea', fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            Document scanné:
          </Text>
          <Text style={{ color: '#6b7280', fontSize: 14 }}>{scannedData}</Text>
        </View>
      ) : (
        <Text style={{ color: '#9ca3af', fontSize: 14 }}></Text>
      )}
    </View>
  );
}