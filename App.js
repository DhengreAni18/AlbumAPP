import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View>
      <Header headerText = {'Albums!! '}/>
      <AlbumList />
  </View>
    
);

export default App;
