import {
  createBottomTabNavigator,
  BottomTabNavigationOptions as RNNavigationOptions,
} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {ParamListBase, RouteProp} from '@react-navigation/native';
import {Box, Pressable, Text} from 'native-base';
import {Platform} from 'react-native';
import HomeIcon from '../Assets/HomeBottomTab.svg';
import ProfileIcon from '../Assets/ProfileBottomTab.svg';
import ProgressIcon from '../Assets/ProgressBottomTab.svg';
import HelpIcon from '../Assets/HelpBottomTab.svg';
import {navigate} from './utils';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

type BottomTabNavigationOptions =
  | ((props: {
      route: RouteProp<ParamListBase, string>;
      navigation: any;
    }) => RNNavigationOptions)
  | undefined;

/**
 * This Navigator handles the Tabs of the App.
 */
const Main = () => {
  /**
   * Screen Options for the Bottom Tab
   */

  const screenOptions: BottomTabNavigationOptions = ({route, navigation}) => ({
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarActiveTintColor: '#31006F',
    tabBarInactiveTintColor: '#69747F',
    tabBarStyle: {
      position: 'absolute',
      height: Platform.OS === 'ios' ? 100 : 70,
    },
    tabBarLabelStyle: {
      fontSize: 12,

      backgroundColor: 'green',
    },
    tabBarIconStyle: {
      marginTop: 8,
    },

    tabBarIcon: ({color, size, focused}) => {
      let iconName = '';
      if (route.name === 'Home') {
        return focused ? (
          <Box
            w={'65%'}
            alignItems={'center'}
            justifyContent={'center'}
            py={1}
            borderRadius={'full'}
            backgroundColor={focused ? '#f0e5ff' : 'white'}>
            <HomeIcon />
          </Box>
        ) : (
          <HomeIcon />
        );
      } else if (route.name === 'Profile') {
        return (
          <Pressable
            onPress={() => {
              navigate('Profile', {});
            }}>
            <ProfileIcon />
          </Pressable>
        );
      } else if (route.name === 'Progress') {
        return focused ? (
          <Box
            w={'65%'}
            alignItems={'center'}
            justifyContent={'center'}
            py={1}
            borderRadius={'full'}
            backgroundColor={focused ? '#f0e5ff' : 'white'}>
            <ProgressIcon />
          </Box>
        ) : (
          <ProgressIcon />
        );
      } else if (route.name === 'Help') {
        return focused ? (
          <Box
            w={'65%'}
            alignItems={'center'}
            justifyContent={'center'}
            py={1}
            borderRadius={'full'}
            backgroundColor={focused ? '#f0e5ff' : 'white'}>
            <HelpIcon />
          </Box>
        ) : (
          <HelpIcon />
        );
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarLabel: ({focused}) => {
      if (route.name === 'Home') {
        return (
          <Box pb={1}>
            <Text
              fontWeight={focused ? 700 : 400}
              color={focused ? '#31006F' : '#5C6873'}
              fontSize={12}>
              Home
            </Text>
          </Box>
        );
      }
      if (route.name === 'Profile') {
        return (
          <Box pb={1}>
            <Text
              fontWeight={focused ? 700 : 400}
              color={focused ? '#31006F' : '#5C6873'}
              fontSize={12}>
              Profile
            </Text>
          </Box>
        );
      }
      if (route.name === 'Progress') {
        return (
          <Box pb={1}>
            <Text
              fontWeight={focused ? 700 : 400}
              color={focused ? '#31006F' : '#5C6873'}
              fontSize={12}>
              Progress
            </Text>
          </Box>
        );
      }
      if (route.name === 'Help') {
        return (
          <Box pb={1}>
            <Text
              fontWeight={focused ? 700 : 400}
              color={focused ? '#31006F' : '#5C6873'}
              fontSize={12}>
              Help
            </Text>
          </Box>
        );
      }
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        listeners={{
          focus: e => {
            console.log('focus', e.target?.split('-')[0]);
          },
          tabPress: e => {
            console.log('focus', e.target?.split('-')[0]);
          },
        }}
        options={{
          gestureEnabled: false,
          tabBarLabelStyle: {
            fontSize: 14, // Adjust the font size as needed
            fontWeight: '600',
            textAlign: 'center',
            marginTop: 2,
          },
          tabBarLabel: 'Home',
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{isExamScheduled: false}}
        listeners={{
          focus: e => {
            console.log('focus', e.target?.split('-')[0]);
          },
          tabPress: e => {
            console.log('focus', e.target?.split('-')[0]);
          },
        }}
        options={{
          tabBarLabelStyle: {
            fontSize: 14, // Adjust the font size as needed
            fontWeight: '600',
            textAlign: 'center',
            marginTop: 2,
          },
          tabBarLabel: 'Profile',
        }}
      />

      <Tab.Screen
        name="Progress"
        component={Login}
        listeners={{
          focus: e => {
            console.log('focus', e.target?.split('-')[0]);
          },
          tabPress: e => {
            console.log('focus', e.target?.split('-')[0]);
          },
        }}
        options={{
          tabBarLabelStyle: {
            fontSize: 14, // Adjust the font size as needed
            fontWeight: '600',
            textAlign: 'center',
          },
          tabBarLabel: 'Progress',
        }}
      />

      <Tab.Screen
        name="Help"
        component={Profile}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },
          tabBarLabelStyle: {
            fontSize: 14, // Adjust the font size as needed
            fontWeight: '600',
            textAlign: 'center',
            marginTop: 2,
          },
          tabBarLabel: 'Help',
        })}
        listeners={{
          focus: e => {
            console.log('focus', e.target?.split('-')[0]);
          },
          tabPress: e => {
            console.log('focus', e.target?.split('-')[0]);
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
