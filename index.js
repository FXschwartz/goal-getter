/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import App from './src';

Navigation.registerComponent('com.goalGetter.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.goalGetter.WelcomeScreen'
            }
          }
        ]
      }
    }
  });
});