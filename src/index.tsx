import App from './components/App';
import {AppRegistry, Platform} from 'react-native';
import {APP_NAME} from './constants';

AppRegistry.registerComponent(APP_NAME, () => App);

if (Platform.OS === 'web') {
  AppRegistry.runApplication(APP_NAME, {
    rootTag: document.getElementById('example-web-app'),
  });
}
