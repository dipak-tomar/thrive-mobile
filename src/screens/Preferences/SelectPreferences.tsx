import {
  Box,
  FlatList,
  HStack,
  Icon,
  Pressable,
  ScrollView,
  Text,
  useToast,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import ThriveLogo from '../../Assets/images/thrive_logo.svg';
import CheckboxChecked from '../../Assets/CheckBoxUnChecked.svg';
import CheckboxUnChecked from '../../Assets/CheckBoxUnChecked.svg';
import {Linking, TouchableOpacity, useWindowDimensions} from 'react-native';
import {fontWeights, fonts} from '../../config/fonts.config';
import BookOpen from '../../Assets/BookOpen.svg';
import NotificationBell from '../../Assets/NotificationBell.svg';
import CheckMark from '../../Assets/CheckMark.svg';
import {navigate} from '../../Navigators/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import {useIsFocused} from '@react-navigation/native';
import {Loader} from '../../components/Loader';
import firestore from '@react-native-firebase/firestore';
import {getItem} from '../../config/asyncStorage';

const SelectPreferences = () => {
  const [Loading, setLoading] = useState(false);
  const [microHabbits, setmicroHabbits] = useState([]);
  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;
  const isFocused = useIsFocused();
  const toast = useToast();
  const [userData, setuserData] = useState({});
  const preferences = [
    'Practice deep breathing exercises for 10 minutes before dinner to help manage stress and improve blood sugar levels.',
    'Practice deep breathing exercises for 10 minutes before dinner to help manage stress and improve blood sugar levels.',
    'Practice mindful eating habits during dinner time to manage diabetes better. Focus on chewing slowly and savoring each bite.',
    'Practice deep breathing exercises for 10 minutes before dinner to help manage stress and improve blood sugar levels.',
  ];
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const getUserByEmail = async () => {
    setLoading(true);
    try {
      const userinfo = await getItem('currentUser');
      console.log('userinfo', userinfo);

      const querySnapshot = await firestore()
        .collection('users')
        .where('email', '==', userinfo?.email)
        .get();

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0].data();
        setuserData(userDoc);
        console.log('User document retrieved:', userDoc);
      } else {
        console.log('No user found with this email.');
        setuserData(null);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error getting user document:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      getUserByEmail();
    }
  }, [isFocused]);
  const togglePreference = preference => {
    setSelectedPreferences(prevSelected => {
      if (prevSelected.some(item => item.action === preference.action)) {
        // Remove the item if it already exists
        return prevSelected.filter(item => item.action !== preference.action);
      } else {
        // Add the item if it does not exist
        return [...prevSelected, preference];
      }
    });
  };

  console.log('selected preferences', userData?.suggested_habbits);

  const habbitsData = [
    {
      title: 'Practice deep breathing exercises',
      action:
        'Practice deep breathing exercises for 5 minutes in the morning to help manage Asthma symptoms and promote relaxation.',
      suggested_time: '6:30 AM',
    },
    {
      title: 'Prepare a nutritious breakfast',
      action:
        'Prepare a balanced breakfast with whole grains, protein, and fruits in the morning to kickstart your day with energy and focus.',
      suggested_time: '8:00 AM',
    },
    {
      title: 'Go for a light walk',
      action:
        'Go for a light 15-minute walk in the morning to boost circulation, improve lung function, and enhance overall mood.',
      suggested_time: '9:30 AM',
    },
    {
      title: 'Stretch for flexibility',
      action:
        'Engage in a 10-minute stretching routine in the morning to improve flexibility, reduce stiffness, and prevent injuries during exercise.',
      suggested_time: '10:30 AM',
    },
    {
      title: 'Hydrate with water',
      action:
        'Drink a glass of water every hour in the morning to stay hydrated, improve digestion, and support overall well-being.',
      suggested_time: '5:00 AM - 11:00 AM',
    },
    {
      title: 'Mindful breathing session',
      action:
        'Take 5 minutes for a mindful breathing session in the morning to increase awareness, reduce stress, and enhance mental clarity.',
      suggested_time: '7:00 AM',
    },
    {
      title: 'Plan your workout',
      action:
        'Spend 10 minutes planning your exercise routine for the day in the morning to set clear goals and stay motivated.',
      suggested_time: '8:30 AM',
    },
    {
      title: 'Posture check',
      action:
        'Check your posture every hour in the morning to maintain spinal alignment, prevent back pain, and improve breathing patterns.',
      suggested_time: '5:00 AM - 11:00 AM',
    },
  ];

  const updateUserByEmail = async () => {
    setLoading(true);
    try {
      const querySnapshot = await firestore()
        .collection('users')
        .where('email', '==', 'dipakkumartomar29@gmail.com')
        .get();

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        await firestore().collection('users').doc(userDoc.id).update({
          suggested_habbits: habbitsData,
          selected_habbits: selectedPreferences,
        });
        console.log('User document updated:', userDoc.id);
        toast.show({description: 'User details updated!', duration: 2000});
        setLoading(false);
      } else {
        console.log('No user found with this email.');
        setLoading(false);
        toast.show({
          description: 'No user found with this email!',
          duration: 2000,
        });
      }
    } catch (error) {
      setLoading(false);
      console.error('Error updating user document:', error);
    }
  };

  return (
    <Box safeArea bgColor={'#F6F0FF'} flex={1}>
      <HStack
        px={'2%'}
        width={width}
        mt={'4%'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <HStack maxW={width * 0.8}>
          <ThriveLogo />
          <Text
            color={'#31006F'}
            fontSize={26}
            // width={'50%'}
            fontWeight={fontWeights['700']}
            fontFamily={fonts.Poppins['700']}
            lineHeight={30}
            ml={'4%'}>
            Select your preferences!
          </Text>
        </HStack>
        <HStack>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://capable-ricotta-490.notion.site/Thrive-Knowledge-Articles-b6ddc5c2c31f4f948d4d8abc160dbf85?pvs=4',
              );
            }}>
            <BookOpen />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Notifications', {})}>
            <NotificationBell />
          </TouchableOpacity>
        </HStack>
      </HStack>
      <ScrollView>
        <Text
          color={'#31006F'}
          fontSize={22}
          ml={'4%'}
          alignSelf={'center'}
          mt={'2%'}>
          Hey Aman!👋🏼
        </Text>
        {userData?.suggested_habbits?.length === 0 ||
        !userData?.suggested_habbits ? (
          <Box
            height={height * 0.2}
            width={width * 0.6}
            alignSelf={'center'}
            justifyContent={'center'}
            borderRadius={12}
            borderColor={'gray.400'}
            borderWidth={1}
            mt={'5%'}
            bgColor={'gray.200'}>
            <Text
              color={'#31006F'}
              fontSize={18}
              textAlign={'center'}
              lineHeight={24}
              fontWeight={fontWeights['600']}
              fontFamily={fonts.NunitoSans['600']}>
              No Habbits Found !!
            </Text>
          </Box>
        ) : (
          userData?.suggested_habbits?.map(preference => {
            const isChecked = selectedPreferences.some(
              item => item.action === preference.action,
            );
            return (
              <HStack alignItems={'center'}>
                <Pressable
                  ml={'3%'}
                  mt={'8%'}
                  onPress={() => togglePreference(preference)}>
                  <Box>
                    <CheckboxUnChecked width={40} height={40} />
                    {isChecked && (
                      <Box
                        position="absolute"
                        top={-4}
                        left={2}
                        width={40}
                        height={40}>
                        <CheckMark />
                      </Box>
                    )}
                  </Box>
                </Pressable>

                <TouchableOpacity
                  style={{
                    width: '83%',
                    backgroundColor: '#F8F8F8',
                    marginTop: '8%',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#31006F',
                    padding: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    color={'#31006F'}
                    fontSize={18}
                    textAlign={'justify'}
                    lineHeight={24}
                    fontWeight={fontWeights['600']}
                    fontFamily={fonts.NunitoSans['600']}>
                    {preference.action}
                  </Text>
                </TouchableOpacity>
              </HStack>
            );
          })
        )}

        {userData?.suggested_habbits && (
          <TouchableOpacity
            onPress={async () => {
              await updateUserByEmail();
              navigate('Main', {});
            }}
            style={{
              // width: width * 0.3,
              height: width * 0.12,
              backgroundColor: '#31006F',
              padding: 12,
              borderRadius: 100,
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: '4%',
              marginBottom: '5%',
            }}>
            <HStack
              alignSelf={'center'}
              justifyContent={'space-between'}
              px={'2%'}>
              <Text
                fontSize={14}
                textAlign={'justify'}
                lineHeight={18}
                fontWeight={fontWeights['600']}
                fontFamily={fonts.NunitoSans['600']}
                color={'white'}>
                Proceed
              </Text>
              <Icon
                ml={'2%'}
                as={Feather}
                size={5}
                name="arrow-right"
                color={'#fff'}
              />
            </HStack>
          </TouchableOpacity>
        )}
      </ScrollView>
      {Loading ? <Loader /> : null}
    </Box>
  );
};

export default SelectPreferences;
