/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * This is helping us to get the notifications for the Background.
 */
messaging().setBackgroundMessageHandler(
  async remoteMessage => await handleMessagesofPushNotifictions(remoteMessage),
);

// const getFcmToken = async() =>{

//   const fcmToken = await messaging().getToken()
//   console.log('FCM Token:', fcmToken)

// } 
// getFcmToken()
export const handleMessagesofPushNotifictions = async remoteMessage => {
  console.log('remote::', remoteMessage);
  // return
  // Extract the body
  let message_body = remoteMessage.notification?.body;
  // Extract the title
  let message_title = remoteMessage.notification?.title;
  // The whole body
  const body = {
    body: message_body,
    title: message_title,
    createdAt: new Date(),
  };
  // get notifications from async storage
  let notification = await AsyncStorage.getItem('notification');
  // check if notification exists
  if (notification) {
    // parse the Notification Array
    let parsedNotification = JSON.parse(notification ? notification : '');
    // this is the parsed body
    const stringBody = [...parsedNotification, body];
    // setting the data
    await AsyncStorage.setItem('notification', JSON.stringify(stringBody));
    await AsyncStorage.setItem('isNotificationRead', 'false');
  } else {
    // set data if notification dont exists
    await AsyncStorage.setItem('notification', JSON.stringify([body]));
    await AsyncStorage.setItem('isNotificationRead', 'false');
  }
};

AppRegistry.registerComponent(appName, () => App);
