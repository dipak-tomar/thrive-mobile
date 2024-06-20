import React, {useState} from 'react';
import {Box, Checkbox, HStack, Input, Text, VStack} from 'native-base';
import ThriveLogo from '../../Assets/images/thrive_logo.svg';
import {TouchableOpacity} from 'react-native';
import {fontWeights, fonts} from '../../config/fonts.config';
import auth from '@react-native-firebase/auth';
import {navigate} from '../../Navigators/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loader} from '../../components/Loader';

const Login = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setloading] = useState(false);
  const signInUser = async () => {
    setloading(true);
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      console.log('User signed in!', response);
      await AsyncStorage.setItem('currentUser', JSON.stringify(response.user));
      if (response) {
        navigate('ContinueScreen', {fromLogin: true});
      }
      setloading(false);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setloading(false);
        console.log('No user found with that email address!');
      } else if (error.code === 'auth/wrong-password') {
        setloading(false);
        console.log('Incorrect password!');
      } else if (error.code === 'auth/invalid-email') {
        setloading(false);
        console.log('Invalid email address!');
      } else {
        setloading(false);
        console.log(error.message);
      }
    }
  };

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
          Login
        </Text>
      </HStack>

      {/* Email/ Phone Number */}
      <VStack mt={'35%'}>
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

      <TouchableOpacity
        onPress={() => {
          navigate('ContinueScreen', {fromLogin: true});
        }}
        style={{
          backgroundColor: '#31006F',
          width: '85%',
          marginHorizontal: '6%',
          marginTop: '10%',
          borderRadius: 35,
          padding: 17,
          alignItems: 'center',
        }}>
        <Text color={'#fff'}>LOGIN</Text>
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
            onPress={() => navigate('Signup', {})}
            fontWeight={fontWeights['500']}
            fontFamily={fonts.Poppins['500']}>
            SIGN UP
          </Text>
        </Text>
      </Box>
      {loading ? <Loader /> : null}
    </Box>
  );
};

export default Login;
