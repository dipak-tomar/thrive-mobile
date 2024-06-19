import {Box, HStack, Icon, Input, ScrollView, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import ThriveLogo from '../../Assets/images/thrive_logo.svg';
import Slider from '@react-native-community/slider';
import {TouchableOpacity, useWindowDimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {fontWeights, fonts} from '../../config/fonts.config';
import MaleIcon from '../../Assets/Male.svg';
import FemaleIcon from '../../Assets/Female.svg';
import OthersIcon from '../../Assets/OthersGender.svg';
import PreferNotIcon from '../../Assets/PreferNotToSay.svg';
import SmallHeight from '../../Assets/SmallHeight.svg';
import LargeHeight from '../../Assets/LargeHeight.svg';
import HabbitIcon from '../../Assets/habbit_icon.svg';
import InsuranceIcon from '../../Assets/insurance.svg';
import MedicalIcon from '../../Assets/MedicalIcon.svg';
import AskingIcon from '../../Assets/AskingIcon.svg';
import {navigate} from '../../Navigators/utils';

const Preference = () => {
  const [age, setAge] = useState('');
  const [medicalCondition, setMedicalCondition] = useState('');
  const [step, setStep] = useState(0);
  const {height, width} = useWindowDimensions();
  const [heightSliderValue, setHeightSliderValue] = useState(0);
  const genderOptions = [
    {text: 'Male', icon: <MaleIcon />},
    {text: 'Female', icon: <FemaleIcon />},
    {text: 'Others', icon: <OthersIcon />},
    {text: 'Prefer Not To Say', icon: <PreferNotIcon />},
  ];

  useEffect(() => {
    if (step === 5) {
      setTimeout(() => {
        navigate('SelectPreferences', {});
      }, 2000);
    }
  }, [step]);

  return (
    <Box safeArea bgColor={'#F6F0FF'} flex={1}>
      <Box ml={'3%'}>
        <ThriveLogo />
      </Box>
      <ScrollView>
        {step === 0 ? (
          <>
            <Box alignItems={'center'} mt={'20%'}>
              <Text
                color={'#31006F'}
                fontSize={30}
                fontWeight={fontWeights['400']}
                fontFamily={fonts.NunitoSans['400']}>
                What is your gender?
              </Text>
              <HStack mt={'4%'} alignItems={'center'}>
                {genderOptions?.map(gender => {
                  return (
                    <VStack mx={'1%'} alignItems={'center'}>
                      <Box>{gender.icon}</Box>
                      <Text
                        fontSize={10}
                        color={'#31006F'}
                        mt={'2%'}
                        fontWeight={fontWeights['700']}
                        fontFamily={fonts.NunitoSans['700']}>
                        {gender.text}
                      </Text>
                    </VStack>
                  );
                })}
              </HStack>
            </Box>

            <Box alignItems={'center'} mt={'20%'}>
              <Text
                color={'#31006F'}
                fontSize={30}
                fontWeight={fontWeights['400']}
                fontFamily={fonts.NunitoSans['400']}>
                What is your age?
              </Text>
              <Input
                value={age}
                onChangeText={text => {
                  setAge(text);
                }}
                borderColor={'#000'}
                width={'90%'}
                bgColor={'#fff'}
                ml={'4%'}
                mt={'3%'}
                borderRadius={15}
                placeholder="In years"
                paddingLeft={40}
                height={50}
                _focus={{backgroundColor: '#fff', borderColor: '#000'}}
              />
            </Box>

            <HStack
              alignItems={'center'}
              mt={'20%'}
              //   bgColor={'amber.400'}
              justifyContent={'center'}>
              <Box>
                <SmallHeight />
              </Box>

              <VStack alignItems={'center'}>
                <Text fontSize={30} color={'#31006F'}>
                  Height
                </Text>
                <Box
                  style={{
                    position: 'absolute',
                    // left: theme.moderateScale(145),
                    left: (width * 0.82) / 2.1,
                    bottom: 40,
                  }}>
                  <Text> {`${Math.floor(heightSliderValue)} cm`}</Text>
                </Box>
                <Slider
                  style={{width: width * 0.8, height: 40, marginTop: '12%'}}
                  minimumValue={50}
                  maximumValue={260}
                  step={1}
                  value={heightSliderValue}
                  onValueChange={value => setHeightSliderValue(value)}
                  minimumTrackTintColor="#FFFFFF"
                  maximumTrackTintColor="#000000"
                />
              </VStack>
              <Box>
                <LargeHeight />
              </Box>
            </HStack>

            <HStack
              alignItems={'center'}
              mt={'20%'}
              //   bgColor={'amber.400'}
              justifyContent={'center'}>
              <Box>
                <SmallHeight />
              </Box>

              <VStack alignItems={'center'}>
                <Text fontSize={30} color={'#31006F'}>
                  Weight
                </Text>
                <Box
                  style={{
                    position: 'absolute',
                    // left: theme.moderateScale(145),
                    left: (width * 0.82) / 2.1,
                    bottom: 40,
                  }}>
                  <Text> {`${Math.floor(heightSliderValue)} cm`}</Text>
                </Box>
                <Slider
                  style={{width: width * 0.8, height: 40, marginTop: '12%'}}
                  minimumValue={15}
                  maximumValue={650}
                  step={1}
                  value={heightSliderValue}
                  onValueChange={value => setHeightSliderValue(value)}
                  minimumTrackTintColor="#FFFFFF"
                  maximumTrackTintColor="#000000"
                />
              </VStack>
              <Box>
                <LargeHeight />
              </Box>
            </HStack>
          </>
        ) : step === 1 ? (
          <>
            <Box alignItems={'center'} mt={'5%'}>
              <Box>
                <HabbitIcon />
              </Box>
              <Text
                color={'#31006F'}
                fontSize={24}
                mt={'7%'}
                textAlign={'center'}
                fontWeight={fontWeights['400']}
                fontFamily={fonts.NunitoSans['400']}
                width={'80%'}>
                Thrive is for YOU! Pick the goals that resonate with you (choose
                multiple)
              </Text>
              {[
                'Develop new positive habits',
                'Track my progress toward goals',
                'Improve my overall well-being',
              ].map(question => {
                return (
                  <TouchableOpacity
                    style={{
                      width: '90%',
                      backgroundColor: '#fff',
                      marginTop: '8%',
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: '#000',
                      padding: 12,
                      paddingVertical: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      fontSize={22}
                      textAlign={'center'}
                      fontWeight={fontWeights['700']}
                      fontFamily={fonts.NunitoSans['700']}
                      color={'#31006F'}>
                      {question}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </Box>
          </>
        ) : step === 2 ? (
          <>
            <Box alignItems={'center'} mt={'5%'}>
              <Box>
                <InsuranceIcon />
              </Box>
              <Text
                color={'#31006F'}
                fontSize={24}
                mt={'4%'}
                textAlign={'center'}
                fontWeight={fontWeights['400']}
                fontFamily={fonts.NunitoSans['400']}
                width={'80%'}>
                Ready to thrive? We found some habits suggestions to spark your
                journey! Pick your favorites (choose multiple)
              </Text>
              {[
                'Healthy Food Habits',
                'Exercise Routine',
                'Meditation Routine',
                'Healthy Sleep Schedule',
                'Reading',
              ].map(question => {
                return (
                  <TouchableOpacity
                    style={{
                      width: '90%',
                      backgroundColor: '#fff',
                      marginTop: '8%',
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: '#000',
                      padding: 12,
                      paddingVertical: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      fontSize={22}
                      textAlign={'center'}
                      fontWeight={fontWeights['700']}
                      fontFamily={fonts.NunitoSans['700']}
                      color={'#31006F'}>
                      {question}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </Box>
          </>
        ) : step === 3 ? (
          <>
            <Box alignItems={'center'} mt={'10%'}>
              <Text
                color={'#31006F'}
                fontSize={24}
                textAlign={'center'}
                fontWeight={fontWeights['400']}
                fontFamily={fonts.NunitoSans['400']}
                width={'80%'}>
                What times of the day are most suitable for you to spend 5-10
                minutes on a healthy habit?
              </Text>
              {[
                'Early Morning (3AM to 4:59AM)',
                'Morning (5AM to 11:59AM)',
                'Afternoon (12PM to 3:59PM)',
                'Evening (4PM to 7PM)',
                'Night (7PM to 2AM)',
              ].map(question => {
                return (
                  <TouchableOpacity
                    style={{
                      width: '90%',
                      backgroundColor: '#fff',
                      marginTop: '8%',
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: '#000',
                      padding: 12,
                      paddingVertical: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      fontSize={22}
                      textAlign={'center'}
                      fontWeight={fontWeights['700']}
                      fontFamily={fonts.NunitoSans['700']}
                      color={'#31006F'}>
                      {question}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </Box>
          </>
        ) : step === 4 ? (
          <>
            <Box alignItems={'center'} mt={'10%'}>
              <Box>
                <MedicalIcon />
              </Box>
              <Text
                color={'#31006F'}
                fontSize={24}
                textAlign={'center'}
                mt={'4%'}
                fontWeight={fontWeights['400']}
                fontFamily={fonts.NunitoSans['400']}
                width={'80%'}>
                Any prior medical condition?
              </Text>
              <Input
                value={medicalCondition}
                onChangeText={text => {
                  setMedicalCondition(text);
                }}
                borderColor={'#000'}
                width={'87%'}
                bgColor={'#fff'}
                ml={'2%'}
                mt={'7%'}
                borderRadius={15}
                placeholder="Asthama, Diabetes, etc."
                paddingLeft={95}
                height={100}
                _focus={{backgroundColor: '#fff', borderColor: '#000'}}
              />
              <TouchableOpacity
                onPress={() => setStep(prev => prev + 1)}
                style={{
                  backgroundColor: '#31006F',
                  width: '90%',
                  marginHorizontal: '4%',
                  marginTop: '30%',
                  borderRadius: 35,
                  padding: 15,
                  alignItems: 'center',
                }}>
                <Text color={'#fff'}>FINISH</Text>
              </TouchableOpacity>
            </Box>
          </>
        ) : (
          <>
            <Box alignItems={'center'} mt={'40%'}>
              <Text
                color={'#31006F'}
                fontSize={24}
                textAlign={'center'}
                mt={'4%'}
                fontWeight={fontWeights['400']}
                fontFamily={fonts.NunitoSans['400']}
                width={'80%'}>
                Thrive can help you find healthy habits that work for you
              </Text>
              <Box mt={'12%'}>
                <AskingIcon />
              </Box>
            </Box>
          </>
        )}

        {step !== 4 && step !== 5 && (
          <HStack alignSelf={'flex-end'} mr={'4%'} mt={'8%'}>
            <TouchableOpacity
              onPress={() => setStep(prev => prev + 1)}
              style={{
                backgroundColor: '#31006F',
                padding: 12,
                borderRadius: 20,
              }}>
              <Icon as={Feather} name="arrow-right" color={'#fff'} />
            </TouchableOpacity>
          </HStack>
        )}
      </ScrollView>
    </Box>
  );
};

export default Preference;
