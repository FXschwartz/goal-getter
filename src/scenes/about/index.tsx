import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

const AboutScreen = ({navigation}:any) => (
  <SafeAreaView>
    <Text>Screen: About</Text>

    <TouchableHighlight onPress={() => navigation.navigate('Home')}>
      <Text>Go to Home</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default AboutScreen;