import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

import {PermissionsAndroid, Platform} from 'react-native';

/**
 * Check if user has enabled the Notification Service
 *
 */

export async function requestUserPermission() {
  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATION,
    );
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
const getFCMToken = async () => {
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
