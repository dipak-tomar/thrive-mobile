import {Box, HStack, Pressable, ScrollView, Text} from 'native-base';
import React, {useState} from 'react';
import ThriveLogo from '../../Assets/images/thrive_logo.svg';
import CheckboxChecked from '../../Assets/CheckBoxUnChecked.svg';
import CheckboxUnChecked from '../../Assets/CheckBoxUnChecked.svg';
import {TouchableOpacity} from 'react-native';
import {fontWeights, fonts} from '../../config/fonts.config';
import BookOpen from '../../Assets/BookOpen.svg';
import NotificationBell from '../../Assets/NotificationBell.svg';
import CheckMark from '../../Assets/CheckMark.svg';
const SelectPreferences = () => {
  const [isChecked, setisChecked] = useState(false);

  const preferences = [
    'Practice deep breathing exercises for 10 minutes before dinner to help manage stress and improve blood sugar levels.',
    'Practice deep breathing exercises for 10 minutes before dinner to help manage stress and improve blood sugar levels.',
    'Practice mindful eating habits during dinner time to manage diabetes better. Focus on chewing slowly and savoring each bite.',
    'Practice deep breathing exercises for 10 minutes before dinner to help manage stress and improve blood sugar levels.',
  ];
  const [selectedPreference, setselectedPreference] = useState({
    isChecked: false,
    selected: preferences[0],
  });
  console.log('ischecked', isChecked);

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
        {preferences?.map(preference => {
          return (
            <HStack alignItems={'center'}>
              <Pressable
                ml={'3%'}
                mt={'8%'}
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
                  {preference}
                </Text>
              </TouchableOpacity>
            </HStack>
          );
        })}
      </ScrollView>
    </Box>
  );
};

export default SelectPreferences;
