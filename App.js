// import React from 'react';
// import {View} from 'react-native';
import Route from './src/route';
// import SplashScreen from './src/screens/splashScreen';
// export default function App() {
//   return (
//     <View style={{flex: 1}}>
//       <Route />
//     </View>
//   );
// }
import React from 'react';
import {persistor, store} from './src/redux/store/index';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Route />
        </PersistGate>
      </Provider>
    );
  }
}
