import { AppRegistry } from 'react-native';

if (process.env.EXPO_PUBLIC_STORYBOOK === 'true') {
  const { view } = require('./.storybook');
  AppRegistry.registerComponent('main', () => view);
} else {
  require('expo-router/entry');
}
