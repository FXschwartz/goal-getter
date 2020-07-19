import React from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';

const GratitudeScreen = ({navigation}:any) => (
  <SafeAreaView>
    <Text>Screen: Gratitude</Text>

    <TouchableHighlight onPress={() => navigation.navigate('Login')}>
      <Text>Go to Login</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default GratitudeScreen;