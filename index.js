import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Method `jumpToIndex` is deprecated' ]);
import HomePage from './pages/HomePage/index';
AppRegistry.registerComponent('reactApp', () => HomePage);
