// DocumentTypeDropdown.tsx
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function DocumentTypeDropdown() {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#f3f4f6',
        borderRadius: 16,
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text style={{ color: '#9333ea', fontSize: 16, fontWeight: '500' }}>
        Choisir le type de document
      </Text>
      <Text style={{ color: '#9333ea', fontSize: 20 }}>▼</Text>
    </TouchableOpacity>
  );
}