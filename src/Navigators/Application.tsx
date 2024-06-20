import {NavigationContainer} from '@react-navigation/native';
import {Platform, StatusBar} from 'react-native';
import {navigationRef} from './utils';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Box} from 'native-base';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import SplashScreen from 'react-native-splash-screen';
import Preference from '../screens/Preferences';
import SelectPreferences from '../screens/Preferences/SelectPreferences';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import ContinueScrren from '../screens/Login/ContinueScrren';
import auth from '@react-native-firebase/auth';
import Main from './Main';
import Home from '../screens/Home';

import messaging from '@react-native-firebase/messaging';
import ProgressScreen from '../screens/Progress/ProgressScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {handleMessagesofPushNotifictions} from '../..';
import {requestUserPermission} from '../config/notificationService';

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {
  const routeNameRef = React.useRef();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    console.log('FCM Token:', fcmToken);
    await AsyncStorage.setItem('fcmToken', fcmToken);
  };
  useEffect(() => {
    requestUserPermission();
    getFcmToken();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(
      async remoteMessage =>
        await handleMessagesofPushNotifictions(remoteMessage),
    );
    return unsubscribe;
  }, []);

  if (initializing) return null;

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
        initialRouteName={'Preference'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            gestureEnabled: false, // Disable gestures on this screen
          }}
        />

        <Stack.Screen name="Preference" component={Preference} />
        <Stack.Screen name="SelectPreferences" component={SelectPreferences} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ContinueScreen" component={ContinueScrren} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProgressScreen" component={ProgressScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
