/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {OrderList} from './components/orders';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView>
        <OrderList />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

App.options = {
  topBar: {
    title: {
      text: 'My Orders',
    },
  },
};

export default App;
