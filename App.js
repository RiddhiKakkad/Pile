import React from 'react'
import { View,Text } from 'react-native'
import AppContainer from './src/navigators/AppContainer';
import { Provider } from "react-redux";
import store from './src/redux/store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  )
}

export default App