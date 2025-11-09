// Verify.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { useCameraPermissions } from 'expo-camera';

import Header from '../components/Header';
import TabsNavigation from '../components/TabsNavigation';
import DocumentTypeDropdown from '../components/DocumentTypeDropdown';
import ScannerButton from '../components/ScannerButton';
import CameraScanner from '../components/CameraScanner';
import DocumentPreview from '../components/DocumentPreview';

export default function Verify() {
  const [activeTab, setActiveTab] = useState('access');
  const [scanning, setScanning] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState('');

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    setScanning(false);
    setScannedData(data);
    Alert.alert('QR Code Scanné!', `Type: ${type}\nData: ${data}`);
  };

  const startScanning = async () => {
    if (!permission?.granted) {
      const { granted } = await requestPermission();
      if (!granted) {
        Alert.alert('Permission refusée', 'La caméra est nécessaire pour scanner');
        return;
      }
    }
    setScanning(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header />

      <View style={{ flex: 1, paddingTop: 140 }}>
        <Text>{' '}</Text>

        <TabsNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingTop: 24 }}>
          <DocumentTypeDropdown />

          <ScannerButton onPress={startScanning} />

          {scanning ? (
            <CameraScanner
              onBarcodeScanned={handleBarCodeScanned}
              onClose={() => setScanning(false)}
            />
          ) : (
            <DocumentPreview scannedData={scannedData} />
          )}
        </ScrollView>
      </View>
    </View>
  );
}