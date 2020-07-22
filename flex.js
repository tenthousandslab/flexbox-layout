import React from 'react';
import { View } from 'react-native';

const FlexDemo = () => {
  return (
    <View style={{ marginTop: 30, height: '100%' }}>
      <View style={{ flex: 1, backgroundColor: '#e93e43' }} />
      <View style={{ flex: 2, backgroundColor: '#f5a941' }} />
      <View style={{ flex: 3, backgroundColor: '#4ebd7a' }} />
    </View>
  );
};

export default FlexDemo;
