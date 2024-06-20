import {
  View,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Box, Button, HStack, Text, VStack} from 'native-base';
// import CircularProgress from 'react-native-circular-progress-indicator';
import {fontWeights, fonts} from '../../config/fonts.config';
import BookOpen from '../../Assets/BookOpen.svg';
import NotificationBell from '../../Assets/NotificationBell.svg';
import ThriveLogo from '../../Assets/images/thrive_logo.svg';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Progress from './Progress';
import Leaderboard from './Leaderboard';

const ProgressScreen = () => {
  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;
  const [progress, setProgress] = useState(true);

  return (
    <Box safeArea bgColor={'#F6F0FF'} flex={1}>
      <ScrollView>
        <HStack
          alignSelf={'center'}
          width={width - 10}
          mt={'4%'}
          mx={'1%'}
          //   ml={'4%'}
          // bgColor={'amber.300'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Box>
            <ThriveLogo height={53} width={53} />
          </Box>
          <Text
            color={'#31006F'}
            fontSize={28}
            // width={'50%'}
            fontWeight={700}
            fontFamily={fonts.Poppins['700']}
            lineHeight={32}
            ml={'-5%'}>
            My Progress
          </Text>
          <HStack>
            <Box>
              <BookOpen height={47} width={47} />
            </Box>
            <Box>
              <NotificationBell />
            </Box>
          </HStack>
        </HStack>
        <HStack alignItems={'center'} justifyContent={'space-around'} mt={'5%'}>
          <TouchableOpacity
            onPress={() => setProgress(true)}
            style={{
              backgroundColor: progress ? '#31006F' : '#ffffff',
              width: '40%',
              marginHorizontal: '4%',
              marginTop: '4%',
              borderRadius: 35,
              padding: 17,
              alignItems: 'center',
            }}>
            <Text
              fontSize={13}
              // width={'50%'}
              fontWeight={500}
              fontFamily={fonts.Poppins['700']}
              lineHeight={16}
              color={progress ? '#ffffff' : '#31006F'}>
              PROGRESS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setProgress(false)}
            style={{
              backgroundColor: progress ? '#ffffff' : '#31006F',
              width: '40%',
              marginHorizontal: '4%',
              marginTop: '4%',
              borderRadius: 35,
              borderColor: '#31006F',
              borderWidth: 1,
              padding: 17,
              alignItems: 'center',
            }}>
            <Text
              fontSize={13}
              // width={'50%'}
              fontWeight={500}
              fontFamily={fonts.Poppins['700']}
              lineHeight={16}
              color={progress ? '#31006F' : '#ffffff'}>
              LEADERBOARD
            </Text>
          </TouchableOpacity>
        </HStack>
        <Box mb={'6%'}>
        {progress ? <Progress /> : <Leaderboard />}
        </Box>
      </ScrollView>
    </Box>
  );
};

export default ProgressScreen;
