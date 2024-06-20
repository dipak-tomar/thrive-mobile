import AsyncStorage from '@react-native-async-storage/async-storage';

type StorageValue = string | number | boolean | object | null | undefined;

// Function to get an item in AsyncStorage
export const getItem = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error getting item from AsyncStorage:', error);
    throw error;
  }
};

// Function to set an item in AsyncStorage
export const setItem = async (key: string, value: StorageValue) => {
  try {
    if (value !== null && value !== undefined) {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } else {
      console.error('Cannot set null or undefined value in AsyncStorage');
      // Optionally, you can throw an error or handle it as appropriate for your use case.
    }
  } catch (error) {
    console.error('Error setting item in AsyncStorage:', error);
    throw error;
  }
};

// Function to clear all items in AsyncStorage
export const clearAllItems = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error clearing all items in AsyncStorage:', error);
    throw error;
  }
};
