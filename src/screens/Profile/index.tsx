import {
  Box,
  HStack,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import ThriveLogo from '../../Assets/images/thrive_logo.svg';
import ToggleSwitch from '../../components/ToggleSwitch';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Profile = () => {
  return (
    <Box safeArea bgColor={'#F6F0FF'} flex={1}>
      <HStack mt={'4%'} ml={'4%'} alignItems={'center'}>
        <HStack>
          <ThriveLogo />
          <Text color={'#31006F'} fontSize={35} ml={'4%'}>
            Profile{' '}
          </Text>
        </HStack>
      </HStack>
      <ScrollView>
        <HStack ml={'4%'} mt={'5%'}>
          <Box
            width={70}
            height={70}
            borderRadius={35}
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
          <VStack ml={'5%'} justifyContent={'space-around'}>
            <Text color={'#1D1617'} fontSize={14} fontWeight={'500'}>
              AMAN
            </Text>
            <Text color={'#7B6F72'} fontSize={12} fontWeight={'400'}>
              amandewangan@gmailcom
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
                <Text color={'#31006F'} fontSize={14} fontWeight={'500'}>
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
            <HStack ml={'4%'}>
              <Icon as={MaterialIcons} name="notifications" />
              <Text
                color={'#7B6F72'}
                fontSize={12}
                fontWeight={'400'}
                ml={'4%'}>
                Pop-up Notification
              </Text>
            </HStack>
            <Box mr={'4%'}>
              <ToggleSwitch />
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
            <HStack ml={'4%'}>
              <Icon as={MaterialIcons} name="notifications" />
              <Text
                color={'#7B6F72'}
                fontSize={12}
                fontWeight={'400'}
                ml={'4%'}>
                Contact Us{' '}
              </Text>
            </HStack>
            <Box mr={'4%'}>
              <Icon as={AntDesign} name="right" />
            </Box>
          </HStack>
          <HStack justifyContent={'space-between'} mt={'5%'}>
            <HStack ml={'4%'}>
              <Icon as={MaterialIcons} name="notifications" />
              <Text
                color={'#7B6F72'}
                fontSize={12}
                fontWeight={'400'}
                ml={'4%'}>
                Privacy Policy
              </Text>
            </HStack>
            <Box mr={'4%'}>
              <Icon as={AntDesign} name="right" />
            </Box>
          </HStack>
          <HStack justifyContent={'space-between'} mt={'5%'}>
            <HStack ml={'4%'}>
              <Icon as={MaterialIcons} name="notifications" />
              <Text
                color={'#7B6F72'}
                fontSize={12}
                fontWeight={'400'}
                ml={'4%'}>
                Settings
              </Text>
            </HStack>
            <Box mr={'4%'}>
              <Icon as={AntDesign} name="right" />
            </Box>
          </HStack>
        </Box>
        <Pressable mt={'5%'} alignSelf={'center'}>
          <Text>LOG OUT</Text>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Profile;
