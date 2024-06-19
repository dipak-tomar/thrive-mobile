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
import {TouchableOpacity} from 'react-native';
import {fontWeights, fonts} from '../../config/fonts.config';
import BookOpen from '../../Assets/BookOpen.svg';
import NotificationBell from '../../Assets/NotificationBell.svg';
import CheckMark from '../../Assets/CheckMark.svg';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AlarmModal from './components/AlarmModal';
const Home = () => {
  const [isChecked, setisChecked] = useState(false);

  const preferences = [
    'Practice deep breathing exercises for 10 minutes before dinner to help manage stress and improve blood sugar levels.',
    'Stretch for 10 minutes in the evening to improve flexibility and relax your muscles. It can help manage stress and support blood sugar control.',
    'Practice mindful eating habits during dinner time to manage diabetes better. Focus on chewing slowly and savoring each bite.',
  ];
  const [selectedPreference, setselectedPreference] = useState({
    isChecked: false,
    selected: preferences[0],
  });
  console.log('ischecked', isChecked);

  return (
    <Box safeArea bgColor={'#F6F0FF'} flex={1}>
      <HStack
        mt={'4%'}
        ml={'4%'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <HStack alignItems={'center'}>
          <ThriveLogo />
          <Text
            color={'#31006F'}
            fontSize={35}
            // width={'50%'}
            fontWeight={fontWeights['700']}
            fontFamily={fonts.Poppins['700']}
            lineHeight={32}
            ml={'4%'}>
            Home
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
        {preferences?.map(preference => {
          return (
            <HStack alignItems={'center'}>
              <Pressable
                ml={'3%'}
                mt={'8%'}
                // bgColor={'green.400'}
                w={'15%'}
                onPress={() =>
                  setselectedPreference(prev => ({
                    isChecked: !prev.isChecked,
                    selected: preference,
                  }))
                }>
                <Box>
                  <CheckboxUnChecked width={40} height={40} />
                  {selectedPreference?.isChecked &&
                    selectedPreference?.selected === preference && (
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
                  backgroundColor: '#F8F8F8',
                  marginTop: '8%',
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#31006F',
                  padding: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <VStack>
                  <Text
                    color={'#31006F'}
                    fontSize={18}
                    textAlign={'justify'}
                    lineHeight={24}
                    fontWeight={fontWeights['600']}
                    fontFamily={fonts.NunitoSans['600']}>
                    {preference}
                  </Text>
                  <HStack justifyContent={'flex-end'}>
                    <Text
                      color={'#31006F'}
                      fontSize={12}
                      lineHeight={16}
                      fontWeight={fontWeights['600']}
                      fontFamily={fonts.NunitoSans['600']}
                      underline>
                      Set Reminder
                    </Text>
                    <Icon as={IonIcons} name="alarm-outline" ml={'1%'} />
                  </HStack>
                </VStack>
              </TouchableOpacity>
            </HStack>
          );
        })}
      </ScrollView>
      <AlarmModal isModalVisible={true} />
    </Box>
  );
};

export default Home;
