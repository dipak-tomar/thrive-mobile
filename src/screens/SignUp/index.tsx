import React, {useState} from 'react';
import {Box, HStack, Input, Text, VStack} from 'native-base';
import ThriveLogo from '../../Assets/images/thrive_logo.svg';
import {TouchableOpacity} from 'react-native';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Box safeArea bgColor={'#F6F0FF'} flex={1}>
      <HStack mt={'4%'} ml={'4%'} alignItems={'center'}>
        <ThriveLogo />
        <Text color={'#31006F'} fontSize={32} ml={'4%'}>
          Sign up
        </Text>
      </HStack>
      {/* name input */}
      <VStack mt={'20%'}>
        <Text color={'#31006F'} fontSize={20} ml={'4%'}>
          Full Name
        </Text>
        <Input
          value={fullName}
          onChangeText={text => {
            setFullName(text);
          }}
          borderColor={'#fff'}
          width={'90%'}
          bgColor={'#fff'}
          ml={'4%'}
          borderRadius={15}
          height={50}
          _focus={{backgroundColor: '#fff', borderColor: '#fff'}}
        />
      </VStack>

      {/* Email/ Phone Number */}
      <VStack mt={'5%'}>
        <Text color={'#31006F'} fontSize={20} ml={'4%'}>
          Email/ Phone Number
        </Text>
        <Input
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
          borderColor={'#fff'}
          width={'90%'}
          bgColor={'#fff'}
          ml={'4%'}
          borderRadius={15}
          height={50}
          _focus={{backgroundColor: '#fff', borderColor: '#fff'}}
        />
      </VStack>

      {/* Password*/}
      <VStack mt={'5%'}>
        <Text color={'#31006F'} fontSize={20} ml={'4%'}>
          Password
        </Text>
        <Input
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
          borderColor={'#fff'}
          width={'90%'}
          bgColor={'#fff'}
          ml={'4%'}
          borderRadius={15}
          height={50}
          _focus={{backgroundColor: '#fff', borderColor: '#fff'}}
        />
      </VStack>

      <TouchableOpacity
        style={{
          backgroundColor: '#31006F',
          width: '85%',
          marginHorizontal: '4%',
          marginTop: '4%',
          borderRadius: 35,
          padding: 20,
          alignItems: 'center',
        }}>
        <Text color={'#fff'}>SIGN UP</Text>
      </TouchableOpacity>
      <Box position={'absolute'} bottom={0} mb={'5%'} alignSelf={'center'}>
        <Text>ALREADY HAVE AN ACCOUNT? SIGN IN</Text>
      </Box>
    </Box>
  );
};

export default SignUp;
