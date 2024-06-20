import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

import {PermissionsAndroid, Platform} from 'react-native';
import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';

/**
 * Check if user has enabled the Notification Service
 *
 */

export async function requestUserPermission() {
  if (Platform.OS === 'android') {
    // await PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.POST_NOTIFICATION,
    // );
    const status = await check(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
    switch (status) {
      case RESULTS.UNAVAILABLE:
        console.log(
          'This feature is not available (on this device / in this context)',
        );
        break;
      case RESULTS.DENIED:
        console.log(
          'The permission has not been requested / is denied but requestable',
        );
        const result = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
        if (result === RESULTS.GRANTED) {
          console.log('The permission is granted');
        } else {
          console.log('The permission is denied');
        }
        break;
      case RESULTS.LIMITED:
        console.log('The permission is limited: some actions are possible');
        break;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        break;
    }
  }
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    await getFCMToken();
  }
}
export const getFCMToken = async () => {
  try {
    const fcmToken = await messaging().getToken();
    console.log('fcmToken:', fcmToken);
    if (fcmToken) {
      console.log('fcmToken inside:', fcmToken);
      await AsyncStorage.setItem('fcmToken', fcmToken);

      // Register the token with Enhanced Push Notifications extension
    }
  } catch (error) {
    console.error('i=>', error);
  }
  // }
};
