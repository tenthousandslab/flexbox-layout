import React from 'react';
import { View, Text } from 'react-native';

const FlexDemo = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        margin: 30,
        justifyContent: 'center',
        alignItems: 'baseline',
      }}
    >
      <View style={{ width: 50, height: 50, backgroundColor: '#e93e43' }}>
        <Text style={{ fontSize: 40 }}>A</Text>
      </View>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#f5a941',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 20 }}>p</Text>
      </View>
      <View style={{ width: 50, height: 100, backgroundColor: '#4ebd7a' }}>
        <Text style={{ fontSize: 40 }}>E</Text>
      </View>
    </View>
  );
};

export default FlexDemo;
