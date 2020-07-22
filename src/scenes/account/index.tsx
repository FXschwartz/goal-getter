import React from 'react';
import { SafeAreaView, Text, TouchableHighlight, View } from 'react-native';
import { Avatar, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const AccountScreen = ({ navigation }: any) => (
  // <SafeAreaView>
  <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Avatar
        size="xlarge"
        rounded
        source={{
          // uri: '../../images/icons/default-profile-image.png',
        }}
        title="PS"
        // showAccessory
        onPress={() => console.log("Works!")}
        // activeOpacity={0.7}
        containerStyle={{ marginTop: 90, marginBottom: 25 }}
      />
    </View>

    <Input
      value='Preston Schwartz'
      label='Full Name'
      leftIcon={
        <Icon
          name='user'
          size={24}
          color='black'
        />
      }
    />
    <Input
      value='test@test.com'
      label='Email Address'
      leftIcon={
        <Icon
          name='envelope'
          size={24}
          color='black'
        />
      }
    />
    <Input
      value='555-555-5555'
      label='Phone Number'
      leftIcon={
        <Icon
          name='phone'
          size={24}
          color='black'
        />
      }
    />
  </View>
  // </SafeAreaView>
);

export default AccountScreen;