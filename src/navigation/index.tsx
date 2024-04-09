import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {isReadyRef, navigationRef} from 'react-navigation-helpers';
import {useAppDispatch} from '../redux/Store';
import HomeScreen from '../screens/home/Home';
import {screens} from '../utilitis';
import LandingPage from '../screens/landingPage/LandingPage';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const scheme = useColorScheme();

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const dispatch = useAppDispatch();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={screens.LandingPage}>
        <Stack.Screen name={screens.HOME} component={HomeScreen} />
        <Stack.Screen name={screens.LandingPage} component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
