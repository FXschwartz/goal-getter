import React from 'react';
import { Navigation } from 'react-native-navigation';
import { View, Text } from 'react-native';

class SideMenuCenterScreen extends React.Component {
  static options() {
    return {
      topBar: {
        leftButtons: {
          id: 'sideMenu',
          icon: require('./menuIcon.png')
        }
      }
    };
  }

  constructor(props: any) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  render() {
    return (
      <View>
        <Text>Click the hamburger icon to open the side menu</Text>
      </View>
    );
  }

  navigationButtonPressed({ buttonId }: any) {
    if (buttonId === 'sideMenu') {
      Navigation.mergeOptions(this, {
        sideMenu: {
          left: {
            visible: true
          }
        }
      });
    }
  }
}