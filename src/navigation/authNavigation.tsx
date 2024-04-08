import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useColorScheme} from 'react-native';
import {isReadyRef, navigationRef} from 'react-navigation-helpers';
import Login from '../screens/login';
import {screens} from '../utilitis';
import Signup from '../screens/signUp';
const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={screens.LOGIN} component={Login} />
        <Stack.Screen name={screens.SIGNUP} component={Signup} />
      </Stack.Navigator>
  );
};

export default AuthNavigation;
