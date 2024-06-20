import {
  Box,
  HStack,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Switch,
  Text,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import ThriveLogo from '../../Assets/images/thrive_logo.svg';
import ToggleSwitch from '../../components/ToggleSwitch';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fontWeights, fonts} from '../../config/fonts.config';
import PrivacyIcon from '../../Assets/PrivacyIcon.svg';
import NotificationIcon from '../../Assets/Notification.svg';
import LeftArrow from '../../Assets/LeftArrow.svg';
import {navigate} from '../../Navigators/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import auth from '@react-native-firebase/auth';
import {getItem} from '../../config/asyncStorage';
import {useIsFocused} from '@react-navigation/native';

const Profile = () => {
  const [Loading, setLoading] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const isFocused = useIsFocused();
  const [user, setuser] = useState({});

  useEffect(() => {
    async function getCurrentUser() {
      setLoading(true);
      try {
        const userString = await AsyncStorage.getItem('currentUser');
        if (userString) {
          const userInfo = JSON.parse(userString);
          setuser(userInfo);
          console.log('User retrieved from AsyncStorage', userInfo);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error retrieving user from AsyncStorage', error);
        setLoading(false);
      }
    }
    getCurrentUser();
  }, [isFocused]);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await AsyncStorage.clear();
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
      RNRestart.Restart();
      navigate('Login', {});
    } catch (error) {
      console.error('Error occurred during logout:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box safeArea bgColor={'#F6F0FF'} flex={1}>
      <HStack mt={'4%'} ml={'4%'} alignItems={'center'}>
        <HStack>
          <ThriveLogo />
          <Text
            color={'#31006F'}
            fontSize={35}
            fontWeight={fontWeights['700']}
            fontFamily={fonts.Poppins['700']}
            ml={'4%'}>
            Profile{' '}
          </Text>
        </HStack>
      </HStack>
      <ScrollView>
        <HStack ml={'5%'} mt={'10%'}>
          <Box
            width={60}
            height={60}
            borderRadius={30}
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={'#fff'}>
            <Image
              style={{
                height: 50,
                width: 50,
                resizeMode: 'cover',
              }}
              borderRadius={'full'}
              source={require('../../Assets/images/profile.png')}
              alt="image"
            />
          </Box>
          <VStack ml={'5%'} justifyContent={'space-evenly'}>
            <Text
              color={'#1D1617'}
              fontSize={14}
              lineHeight={21}
              fontWeight={fontWeights['500']}
              fontFamily={fonts.Poppins['500']}>
              {user?.displayName ?? ''}
            </Text>
            <Text
              color={'#7B6F72'}
              fontSize={12}
              lineHeight={18}
              fontWeight={fontWeights['400']}
              fontFamily={fonts.Poppins['400']}>
              {user?.email ?? ''}
            </Text>
          </VStack>
        </HStack>
        <HStack ml={'4%'} mt={'5%'}>
          {[
            {value: '180 cm', text: 'Height'},
            {value: '100 kg', text: 'Weight'},
            {value: '22yo', text: 'Age'},
          ].map(i => {
            return (
              <Box
                width={100}
                ml={'5%'}
                height={70}
                backgroundColor={'#fff'}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={16}>
                <Text
                  color={'#31006F'}
                  fontSize={14}
                  lineHeight={21}
                  fontWeight={fontWeights['500']}
                  fontFamily={fonts.Poppins['500']}>
                  {i.value}
                </Text>
                <Text color={'#7B6F72'} fontSize={12} fontWeight={'400'}>
                  {i.text}
                </Text>
              </Box>
            );
          })}
        </HStack>
        <Box
          width={'90%'}
          ml={'5%'}
          mt={'10%'}
          //   height={70}
          pb={'5%'}
          backgroundColor={'#fff'}
          justifyContent={'center'}
          //   alignItems={'center'}
          borderRadius={16}>
          <Text
            color={'#31006F'}
            fontSize={14}
            fontWeight={'500'}
            ml={'8%'}
            mt={'5%'}>
            Notification
          </Text>
          <HStack justifyContent={'space-between'} mt={'5%'}>
            <HStack ml={'4%'} alignItems={'center'}>
              <Box>
                <NotificationIcon />
              </Box>
              <Text
                color={'#7B6F72'}
                fontSize={12}
                fontWeight={'400'}
                ml={'7%'}>
                Pop-up Notification
              </Text>
            </HStack>
            <Box mr={'4%'}>
              <Switch
                value={isSwitchOn}
                size="lg"
                onTrackColor="#31006F"
                onValueChange={value => setIsSwitchOn(value)}
              />
            </Box>
          </HStack>
        </Box>
        <Box
          width={'90%'}
          ml={'5%'}
          mt={'10%'}
          //   height={70}
          pb={'5%'}
          backgroundColor={'#fff'}
          justifyContent={'center'}
          //   alignItems={'center'}
          borderRadius={16}>
          <Text
            color={'#31006F'}
            fontSize={14}
            fontWeight={'500'}
            ml={'8%'}
            mt={'5%'}>
            Other
          </Text>

          <HStack justifyContent={'space-between'} mt={'5%'}>
            <HStack ml={'4%'} alignItems={'center'}>
              <Box>
                <PrivacyIcon />
              </Box>
              <Text
                color={'#7B6F72'}
                fontSize={12}
                fontWeight={'400'}
                ml={'7%'}>
                Privacy Policy
              </Text>
            </HStack>
            <Box mr={'4%'}>
              <LeftArrow />
            </Box>
          </HStack>
        </Box>
        <Pressable
          mt={'5%'}
          alignSelf={'center'}
          onPress={() => handleLogout()}>
          <Text>LOG OUT</Text>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Profile;
