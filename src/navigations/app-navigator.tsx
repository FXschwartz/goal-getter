import React from 'react';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';

import { Gratitude } from '_scenes/gratitude';
import GoalsScreen from '_scenes/goals';
import AccountScreen from '_scenes/account';

const TabNavigatorConfig = {
  initialRouteName: 'Gratitude',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Gratitude: {
    screen: Gratitude,
    navigationOptions: {
      tabBarLabel: 'Gratitude',
      tabBarIcon: ({ tintColor }: any) => (
        <Icon name="insert-emoticon" size={20} />
      )
    }
  },
  Goals: {
    screen: GoalsScreen,
    navigationOptions: {
      tabBarLabel: 'Goals',
      tabBarIcon: ({ tintColor }: any) => (
        <Icon name="playlist-add-check" size={20} />
      )
    }
  },
  Account: {
    screen: AccountScreen,
    navigationOptions: {
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }: any) => (
        <Icon name="settings" size={20} />
      )
    }
  }
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;