import React, {useState} from 'react';
import {Box, Checkbox, HStack, Input, Text, VStack} from 'native-base';
import ThriveLogo from '../../Assets/images/thrive_logo.svg';
import {TouchableOpacity} from 'react-native';
import {fontWeights, fonts} from '../../config/fonts.config';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Box safeArea bgColor={'#F6F0FF'} flex={1}>
      <HStack mt={'4%'} ml={'4%'} alignItems={'center'}>
        <ThriveLogo />
        <Text
          color={'#31006F'}
          fontSize={35}
          fontWeight={fontWeights['700']}
          fontFamily={fonts.Poppins['700']}
          // lineHeight={24}
          ml={'4%'}>
          Sign up
        </Text>
      </HStack>
      {/* name input */}
      <VStack mt={'20%'}>
        <Text
          color={'#31006F'}
          fontSize={18}
          fontWeight={fontWeights['400']}
          fontFamily={fonts.NunitoSans['400']}
          lineHeight={24}
          ml={'5%'}>
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
          mt={'1%'}
          borderRadius={15}
          height={50}
          _focus={{backgroundColor: '#fff', borderColor: '#fff'}}
        />
      </VStack>

      {/* Email/ Phone Number */}
      <VStack mt={'7%'}>
        <Text
          color={'#31006F'}
          fontSize={18}
          fontWeight={fontWeights['400']}
          fontFamily={fonts.NunitoSans['400']}
          lineHeight={24}
          ml={'5%'}>
          Email/ Phone Number
        </Text>

        <Input
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
          mt={'1%'}
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
      <VStack mt={'7%'}>
        <Text
          color={'#31006F'}
          fontSize={18}
          fontWeight={fontWeights['400']}
          fontFamily={fonts.NunitoSans['400']}
          lineHeight={24}
          ml={'5%'}>
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

      <HStack ml={'5%'} my={'4%'}>
        <Checkbox
          shadow={2}
          value="test"
          _text={{
            fontSize: 14,
            fontWeight: fontWeights['500'],
            fontFamily: fonts.Poppins['500'],
          }}
          accessibilityLabel="This is a dummy checkbox"
          defaultIsChecked>
          I have read the
          <Text
            underline
            color={'#31006F'}
            fontSize={14}
            fontWeight={fontWeights['500']}
            fontFamily={fonts.Poppins['500']}>
            Privacy Policy
          </Text>
        </Checkbox>
      </HStack>
      <TouchableOpacity
        style={{
          backgroundColor: '#31006F',
          width: '85%',
          marginHorizontal: '4%',
          marginTop: '4%',
          borderRadius: 35,
          padding: 17,
          alignItems: 'center',
        }}>
        <Text color={'#fff'}>SIGN UP</Text>
      </TouchableOpacity>
      <Box position={'absolute'} bottom={0} mb={'5%'} alignSelf={'center'}>
        <Text
          color={'gray.400'}
          fontSize={14}
          fontWeight={fontWeights['500']}
          fontFamily={fonts.Poppins['500']}>
          ALREADY HAVE AN ACCOUNT?{' '}
          <Text
            color={'black'}
            fontSize={14}
            fontWeight={fontWeights['500']}
            fontFamily={fonts.Poppins['500']}>
            SIGN IN
          </Text>
        </Text>
      </Box>
    </Box>
  );
};

export default SignUp;
