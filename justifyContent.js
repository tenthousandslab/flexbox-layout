import React from 'react';
import { View, Text } from 'react-native';

const FlexDemo = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        margin: 30,
        justifyContent: 'space-evenly',
      }}
    >
      <View style={{ width: 50, height: 50, backgroundColor: '#e93e43' }}>
        <Text>1</Text>
      </View>
      <View style={{ width: 50, height: 50, backgroundColor: '#f5a941' }}>
        <Text>2</Text>
      </View>
      <View style={{ width: 50, height: 50, backgroundColor: '#4ebd7a' }}>
        <Text>3</Text>
      </View>
    </View>
  );
};

export default FlexDemo;
