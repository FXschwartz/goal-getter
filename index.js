/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

import React, { Component } from 'react';
import App from './src';

import GoalsList from './src/scenes/goals/goals-list';
import GoalsDetail from './src/scenes/goals/goals-detail';

import { Gratitude } from './src/scenes/gratitude';

import AccountScreen from './src/scenes/account';

Navigation.registerComponent('Goals', () => GoalsList);
Navigation.registerComponent('Goals Detail', () => GoalsDetail);

Navigation.registerComponent('Gratitude', () => Gratitude);

Navigation.registerComponent('Account', () => AccountScreen);


Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a'
  },
  topBar: {
    title: {
      color: 'white'
    },
    backButton: {
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
    selectedIconColor: '#4d089a',
    selectedTextColor: '#4d089a'
  }
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                { component: { name: 'Gratitude' } }
              ],
              options: {
                bottomTab: {
                  icon: require('./src/images/icons/insert-emoticon.png')
                }
              }
            }
          },
          {
            stack: {
              children: [
                { component: { name: 'Goals' } }
              ],
              options: {
                bottomTab: {
                  icon: require('./src/images/icons/playlist-add.png')
                }
              }
            }
          },
          {
            stack: {
              children: [
                { component: { name: 'Account' } }
              ],
              options: {
                bottomTab: {
                  icon: require('./src/images/icons/general-profile.png')
                }
              }
            }
          }
        ]
      }
    }
  });
});

GoalsList.options = {
  topBar: {
    title: {
      text: 'YOU\'RE A GOALGETTER',
      color: 'white',
      alignment: 'center'
    },
    background: {
      color: '#4d089a'
    }
  },
  bottomTab: {
    text: 'Graitude'
  }
};

Gratitude.options = {
  topBar: {
    title: {
      text: 'YOU\'RE A GOALGETTER',
      color: 'white',
      alignment: 'center'
    },
    background: {
      color: '#4d089a'
    }
  },
  bottomTab: {
    text: 'Goals'
  }
};

AccountScreen.options = {
  topBar: {
    title: {
      text: 'YOU\'RE A GOALGETTER',
      color: 'white',
      alignment: 'center'
    },
    background: {
      color: '#4d089a'
    }
  },
  bottomTab: {
    text: 'Account'
  }
};

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});