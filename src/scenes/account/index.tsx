import React from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';

const AccountScreen = ({navigation}:any) => (
  <SafeAreaView>
    <Text>Screen: Account</Text>

    <TouchableHighlight onPress={() => navigation.navigate('Login')}>
      <Text>Go to Login</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default AccountScreen;