import React from 'react';
import {LogBox, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import MainNavigation from './src/navigation';
import {store} from './src/redux/Store';
import {PaperProvider} from 'react-native-paper';
import 'react-native-reanimated';
import 'react-native-gesture-handler';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <PaperProvider>
          <MainNavigation />
        </PaperProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
