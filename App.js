import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Form from './Form'
import Store from './app/store/Index';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={{flex: 1}}>
          <Form/>
        </View>
      </Provider>
    );
  }
}
