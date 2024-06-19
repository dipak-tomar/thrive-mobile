import {NavigationContainer} from '@react-navigation/native';
import {Platform, StatusBar} from 'react-native';
import {navigationRef} from './utils';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Box} from 'native-base';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import SplashScreen from 'react-native-splash-screen';
import Preference from '../screens/Preferences';
import SelectPreferences from '../screens/Preferences/SelectPreferences';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import ContinueScrren from '../screens/Login/ContinueScrren';

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {
  const routeNameRef = React.useRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        SplashScreen.hide();
        // @ts-ignore
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;

        // @ts-ignore
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
        }
        // @ts-ignore
        routeNameRef.current = currentRouteName;
        console.log('current screen', currentRouteName);
      }}>
      <StatusBar
        barStyle={'dark-content'}
        networkActivityIndicatorVisible={true}
        backgroundColor={'white'}
      />

      <Stack.Navigator
        initialRouteName={'ContinueScreen'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Preference" component={Preference} />
        <Stack.Screen name="SelectPreferences" component={SelectPreferences} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ContinueScreen" component={ContinueScrren} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
