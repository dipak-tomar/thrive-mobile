import {Box, HStack, Icon, Input, ScrollView, Text} from 'native-base';
import React, {useState} from 'react';
import ThriveLogo from '../../Assets/images/thrive_logo.svg';
import Slider from '@react-native-community/slider';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Preference = () => {
  const [age, setAge] = useState('');
  const [medicalCondition, setMedicalCondition] = useState('');
  const [step, setStep] = useState(4);

  return (
    <Box safeArea bgColor={'#F6F0FF'} flex={1}>
      <Box>
        <ThriveLogo />
      </Box>
      <ScrollView>
        {step === 0 ? (
          <>
            <Box alignSelf={'center'} mt={'20%'}>
              <Text fontSize={30} color={'#31006F'}>
                What is your gender?
              </Text>
            </Box>

            <Box alignItems={'center'} mt={'20%'}>
              <Text fontSize={30} color={'#31006F'}>
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

            <Box alignItems={'center'} mt={'20%'}>
              <Text fontSize={30} color={'#31006F'}>
                Height
              </Text>
              <Slider
                style={{width: 200, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
              />
            </Box>

            <Box alignItems={'center'} mt={'20%'}>
              <Text fontSize={30} color={'#31006F'}>
                Weight
              </Text>
              <Slider
                style={{width: 200, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
              />
            </Box>
          </>
        ) : step === 1 ? (
          <>
            <Box alignItems={'center'} mt={'20%'}>
              <Text fontSize={30} color={'#31006F'} width={'80%'}>
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
                      width: '80%',
                      backgroundColor: '#fff',
                      marginTop: '8%',
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: '#000',
                      padding: 8,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text fontSize={22} fontWeight={'700'} color={'#31006F'}>
                      {question}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </Box>
          </>
        ) : step === 2 ? (
          <>
            <Box alignItems={'center'} mt={'20%'}>
              <Text fontSize={30} color={'#31006F'} width={'80%'}>
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
                      width: '80%',
                      backgroundColor: '#fff',
                      marginTop: '8%',
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: '#000',
                      padding: 8,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text fontSize={22} fontWeight={'700'} color={'#31006F'}>
                      {question}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </Box>
          </>
        ) : step === 3 ? (
          <>
            <Box alignItems={'center'} mt={'20%'}>
              <Text fontSize={30} color={'#31006F'} width={'80%'}>
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
                      width: '80%',
                      backgroundColor: '#fff',
                      marginTop: '8%',
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: '#000',
                      padding: 8,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text fontSize={22} fontWeight={'700'} color={'#31006F'}>
                      {question}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </Box>
          </>
        ) : (
          <>
            <Box alignItems={'center'} mt={'20%'}>
              <Text fontSize={30} color={'#31006F'} width={'80%'}>
                Any prior medical condition?
              </Text>
              <Input
                value={medicalCondition}
                onChangeText={text => {
                  setMedicalCondition(text);
                }}
                borderColor={'#000'}
                width={'90%'}
                bgColor={'#fff'}
                ml={'4%'}
                mt={'3%'}
                borderRadius={15}
                placeholder="Asthama, Diabetes, etc."
                paddingLeft={95}
                height={100}
                _focus={{backgroundColor: '#fff', borderColor: '#000'}}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: '#31006F',
                  width: '85%',
                  marginHorizontal: '4%',
                  marginTop: '24%',
                  borderRadius: 35,
                  padding: 20,
                  alignItems: 'center',
                }}>
                <Text color={'#fff'}>FINISH</Text>
              </TouchableOpacity>
            </Box>
          </>
        )}

        {step !== 4 && (
          <HStack alignSelf={'flex-end'} mr={'4%'} mt={'8%'}>
            <TouchableOpacity
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
