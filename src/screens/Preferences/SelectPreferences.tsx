import {Box, HStack, Icon, Pressable, ScrollView, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import ThriveLogo from '../../Assets/images/thrive_logo.svg';
import CheckboxChecked from '../../Assets/CheckBoxUnChecked.svg';
import CheckboxUnChecked from '../../Assets/CheckBoxUnChecked.svg';
import {TouchableOpacity} from 'react-native';
import {fontWeights, fonts} from '../../config/fonts.config';
import BookOpen from '../../Assets/BookOpen.svg';
import NotificationBell from '../../Assets/NotificationBell.svg';
import CheckMark from '../../Assets/CheckMark.svg';
import {navigate} from '../../Navigators/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import {useIsFocused} from '@react-navigation/native';
import {Loader} from '../../components/Loader';
const SelectPreferences = () => {
  const [isChecked, setisChecked] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [microHabbits, setmicroHabbits] = useState([]);
  const isFocused = useIsFocused();
  const preferences = [
    'Practice deep breathing exercises for 10 minutes before dinner to help manage stress and improve blood sugar levels.',
    'Practice deep breathing exercises for 10 minutes before dinner to help manage stress and improve blood sugar levels.',
    'Practice mindful eating habits during dinner time to manage diabetes better. Focus on chewing slowly and savoring each bite.',
    'Practice deep breathing exercises for 10 minutes before dinner to help manage stress and improve blood sugar levels.',
  ];
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  console.log('ischecked', isChecked);

  useEffect(() => {
    async function getMicroHabbits() {
      setLoading(true);
      try {
        const habbitsString = await AsyncStorage.getItem('habbitsData');
        if (habbitsString !== null) {
          const habbitsInfo = JSON.parse(habbitsString);

          setmicroHabbits(habbitsInfo);
          console.log('Data retrieved from AsyncStorage', habbitsInfo);
        } else {
          setmicroHabbits([]); // Ensure microHabbits is an array if there's no data
        }
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage', error);
        setmicroHabbits([]); // Ensure microHabbits is an array in case of error
      } finally {
        setLoading(false);
      }
    }

    getMicroHabbits();
  }, [isFocused]);
  const togglePreference = preference => {
    setSelectedPreferences(prevSelected => {
      if (prevSelected.includes(preference.action)) {
        return prevSelected.filter(item => item !== preference.action);
      } else {
        return [...prevSelected, preference.action];
      }
    });
  };
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
  return (
    <Box safeArea bgColor={'#F6F0FF'} flex={1}>
      <HStack mt={'4%'} ml={'4%'} alignItems={'center'}>
        <HStack>
          <ThriveLogo />
          <Text
            color={'#31006F'}
            fontSize={35}
            // width={'50%'}
            fontWeight={fontWeights['700']}
            fontFamily={fonts.Poppins['700']}
            lineHeight={32}
            ml={'4%'}>
            Select your preferences!
          </Text>
        </HStack>
        <HStack>
          <Box>
            <BookOpen />
          </Box>
          <Box>
            <NotificationBell />
          </Box>
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
        {microHabbits.length === 0 && <Text>No habbits available</Text>}
        {microHabbits?.map(preference => {
          const isChecked = selectedPreferences.includes(preference.action);
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
        })}
        <TouchableOpacity
          onPress={() => navigate('Main', {})}
          style={{
            backgroundColor: '#31006F',
            padding: 12,
            borderRadius: 20,
          }}>
          <Icon as={Feather} name="arrow-right" color={'#fff'} />
        </TouchableOpacity>
        {Loading ? <Loader /> : null}
      </ScrollView>
    </Box>
  );
};

export default SelectPreferences;
