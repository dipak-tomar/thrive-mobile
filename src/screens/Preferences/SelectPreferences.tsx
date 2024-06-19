import {Box, HStack, Pressable, ScrollView, Text} from 'native-base';
import React, {useState} from 'react';
import ThriveLogo from '../../Assets/images/thrive_logo.svg';
import CheckboxChecked from '../../Assets/CheckBoxUnChecked.svg';
import CheckboxUnChecked from '../../Assets/CheckBoxUnChecked.svg';
import {TouchableOpacity} from 'react-native';

const SelectPreferences = () => {
  const [isChecked, setisChecked] = useState(false);
  const preferences = [
    'Practice deep breathing exercises for 10 minutes before dinner to help manage stress and improve blood sugar levels.',
    'Practice deep breathing exercises for 10 minutes before dinner to help manage stress and improve blood sugar levels.',
    'Practice mindful eating habits during dinner time to manage diabetes better. Focus on chewing slowly and savoring each bite.',
    'Practice deep breathing exercises for 10 minutes before dinner to help manage stress and improve blood sugar levels.',
  ];
  console.log('ischecked', isChecked);

  return (
    <Box safeArea bgColor={'#F6F0FF'} flex={1}>
      <HStack mt={'4%'} ml={'4%'} alignItems={'center'}>
        <HStack>
          <ThriveLogo />
          <Text color={'#31006F'} fontSize={35} ml={'4%'}>
            Select your preferences!
          </Text>
        </HStack>
      </HStack>
      <ScrollView>
        <Text color={'#31006F'} fontSize={22} ml={'4%'} alignSelf={'center'}>
          Hey Aman!👋🏼
        </Text>
        {preferences?.map(preference => {
          return (
            <HStack alignItems={'center'}>
              <Pressable ml={'3%'} onPress={() => setisChecked(prev => !prev)}>
                {isChecked ? (
                  <CheckboxChecked width={40} height={40} />
                ) : (
                  <CheckboxUnChecked />
                )}
              </Pressable>

              <TouchableOpacity
                style={{
                  width: '80%',
                  backgroundColor: '#F8F8F8',
                  marginTop: '8%',
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#31006F',
                  padding: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text fontSize={18} fontWeight={'400'} color={'#31006F'}>
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
