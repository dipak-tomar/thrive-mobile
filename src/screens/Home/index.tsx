import {
  Box,
  HStack,
  Icon,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import ThriveLogo from '../../Assets/images/thrive_logo.svg';
import CheckboxChecked from '../../Assets/CheckBoxUnChecked.svg';
import CheckboxUnChecked from '../../Assets/CheckBoxUnChecked.svg';
import {TouchableOpacity, useWindowDimensions} from 'react-native';
import {fontWeights, fonts} from '../../config/fonts.config';
import BookOpen from '../../Assets/BookOpen.svg';
import NotificationBell from '../../Assets/NotificationBell.svg';
import CheckMark from '../../Assets/CheckMark.svg';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AlarmModal from './components/AlarmModal';
import {navigate} from '../../Navigators/utils';
const Home = () => {
  const [isChecked, setisChecked] = useState(false);
  const [openReminder, setOpenReminder] = useState(false);
  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;

  const preferences = [
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
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  console.log('ischecked', isChecked);
  const togglePreference = preference => {
    setSelectedPreferences(prevSelected => {
      if (prevSelected.includes(preference.action)) {
        return prevSelected.filter(item => item !== preference.action);
      } else {
        return [...prevSelected, preference.action];
      }
    });
  };
  return (
    <Box safeArea bgColor={'#F6F0FF'} flex={1} mb={'16%'}>
      <HStack
        mt={'4%'}
        // ml={'4%'}
        px={'2%'}
        alignItems={'center'}
        justifyContent={'space-between'}
        // bgColor={'amber.200'}
      >
        <HStack alignItems={'center'}>
          <ThriveLogo />
          <Text
            color={'#31006F'}
            fontSize={26}
            // width={'50%'}
            fontWeight={fontWeights['700']}
            fontFamily={fonts.Poppins['700']}
            lineHeight={30}
            ml={'4%'}>
            Home
          </Text>
        </HStack>
        <HStack>
          <Box>
            <BookOpen />
          </Box>
          <Pressable onPress={() => navigate('Notifications', {})}>
            <NotificationBell />
          </Pressable>
        </HStack>
      </HStack>
      <ScrollView bounces={false}>
        <Text
          color={'#31006F'}
          fontSize={22}
          ml={'4%'}
          alignSelf={'center'}
          mt={'2%'}>
          Hey Aman!👋🏼
        </Text>
        {preferences?.map(preference => {
          const isChecked = selectedPreferences.includes(preference.action);
          return (
            <HStack alignItems={'center'}>
              <Pressable
                ml={'3%'}
                mt={'8%'}
                // bgColor={'green.400'}
                w={'15%'}
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
                <Text
                  //   width={'60%'}
                  fontSize={15}
                  lineHeight={20}
                  fontWeight={fontWeights['600']}
                  fontFamily={fonts.NunitoSans['600']}>
                  Mark as Done
                </Text>
              </Pressable>

              <TouchableOpacity
                style={{
                  width: '80%',
                  backgroundColor: isChecked ? '#ECF8E9' : '#F8F8F8',
                  // backgroundColor: 'amber.300' ,
                  marginTop: '8%',
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#31006F',
                  padding: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <VStack>
                  {/* <Text
                    color={'#31006F'}
                    fontSize={18}
                    textAlign={'justify'}
                    lineHeight={24}
                    fontWeight={fontWeights['600']}
                    fontFamily={fonts.NunitoSans['600']}>
                    {preference.title}
                  </Text> */}
                  <Text
                    color={'gray.500'}
                    fontSize={16}
                    // textAlign={'justify'}
                    // maxWidth={width*0.65}
                    lineHeight={24}
                    // mt={'1%'}

                    fontWeight={fontWeights['400']}
                    fontFamily={fonts.NunitoSans['400']}>
                    {preference.action}
                  </Text>

                  <Pressable onPress={() => setOpenReminder(true)}>
                    <HStack
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      // bgColor={'amber.300'}
                      py={'2%'}
                      mt={'2%'}>
                      <Text
                        color={'#31006F'}
                        fontSize={12}
                        // textAlign={'justify'}
                        lineHeight={20}
                        // mt={'4%'}
                        // w={'50%'}
                        fontWeight={fontWeights['400']}
                        fontFamily={fonts.NunitoSans['400']}>
                        {preference.suggested_time}
                      </Text>
                      <HStack alignItems={'center'}>
                        <Text
                          color={'#31006F'}
                          fontSize={16}
                          lineHeight={20}
                          fontWeight={fontWeights['600']}
                          fontFamily={fonts.NunitoSans['600']}
                          underline>
                          Set Reminder
                        </Text>
                        <Icon as={IonIcons} name="alarm-outline" ml={'1%'} />
                      </HStack>
                    </HStack>
                  </Pressable>
                </VStack>
              </TouchableOpacity>
            </HStack>
          );
        })}
        <TouchableOpacity
          onPress={() => {
            console.log('pressed');
          }}>
          <Box
            borderRadius={8}
            mt={'5%'}
            alignSelf={'center'}
            height={height * 0.07}
            width={width * 0.45}
            alignItems={'center'}
            justifyContent={'center'}
            bgColor={'#31006F'}>
            <Text
              color={'white'}
              fontSize={16}
              lineHeight={20}
              fontWeight={fontWeights['600']}
              fontFamily={fonts.NunitoSans['600']}>
              Continue
            </Text>
          </Box>
        </TouchableOpacity>
        <Box h={50} />
      </ScrollView>
      <AlarmModal
        isModalVisible={openReminder}
        closeModal={() => setOpenReminder(prev => !prev)}
      />
    </Box>
  );
};

export default Home;
