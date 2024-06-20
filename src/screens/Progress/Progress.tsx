import {
    View,
    TouchableOpacity,
    useWindowDimensions,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  import {Box, Button, HStack, Text, VStack} from 'native-base';
  // import CircularProgress from 'react-native-circular-progress-indicator';
  import {fontWeights, fonts} from '../../config/fonts.config';
  import BookOpen from '../../Assets/BookOpen.svg';
  import NotificationBell from '../../Assets/NotificationBell.svg';
  import ThriveLogo from '../../Assets/images/thrive_logo.svg';
  import {AnimatedCircularProgress} from 'react-native-circular-progress';
import { activities } from './ProgressData';

const Progress = () => {
    const height = useWindowDimensions().height;
    const width = useWindowDimensions().width;
    
    const countMarkedDoneForToday = (dayName) => {
      return activities
        .filter(activity => activity.dayName === dayName)
        .filter(activity => activity.isMarkedDone)
        .length;
    };
    
    const dayName = new Date().toLocaleDateString('en-US', { weekday: 'long' }); // Get the current day name
    const markedDoneCountForToday = countMarkedDoneForToday(dayName);
    
    console.log(`Number of activities marked as done for ${dayName}:`, markedDoneCountForToday);
    const days = [
      {value: (countMarkedDoneForToday('Sunday')/10)*100 , dayName: 'Sun' , acivitiesDone : countMarkedDoneForToday('Sunday')  },
      {value: (countMarkedDoneForToday('Monday')/10)*100, dayName: 'Mon' , acivitiesDone : countMarkedDoneForToday('Monday') },
      {value: (countMarkedDoneForToday('Tuesday')/10)*100, dayName: 'Tue' , acivitiesDone : countMarkedDoneForToday('Tuesday') },
      {value: (countMarkedDoneForToday('Wednesday')/10)*100, dayName: 'Wed', acivitiesDone : countMarkedDoneForToday('Wednesday') },
      {value: (countMarkedDoneForToday('Thursday')/10)*100, dayName: 'Thu', acivitiesDone : countMarkedDoneForToday('Thursday') },
      {value: (countMarkedDoneForToday('Friday')/10)*100, dayName: 'Fri', acivitiesDone : countMarkedDoneForToday('Friday') },
      {value: (countMarkedDoneForToday('Saturday')/10)*100, dayName: 'Sat' , acivitiesDone : countMarkedDoneForToday('Saturday') },
    ];
    console.log("acitivitiesDone=>" , days);
    
    const habitsData = [
      {name: 'Total Habits', value: 10},
      {name: 'Habits Followed', value: markedDoneCountForToday},
      {
        name: 'Habits Not Followed',
        value: 10 - markedDoneCountForToday,
      },
    ];
    const averagePercentage =  (markedDoneCountForToday/10)*100

    
    const VerticalProgressBar = ({ progress }) => {
      return (
        <View
          style={{
            flexDirection: 'column-reverse',
            width: 20,
            height: 150,
            backgroundColor: '#f0f0f0',
            borderRadius: 12,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Filled part of the progress bar */}
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderRadius: 12,
              height: `${progress}%`,
              backgroundColor: '#31006F',
            }}
          />
          {/* Empty part of the progress bar */}
          <View
            style={{
              position: 'absolute',
              bottom: `${progress}%`,
              
              width: '100%',
              height: `${100 - progress}%`,
              backgroundColor: '#F7F8F8',
            }}
          />
        </View>
      );
    };
    
  return (
    <Box>
    <VStack mt={'10%'}>
    <Text
      fontSize={16}
      fontWeight={600}
      fontFamily={'Poppins-Bold'} // Assuming 'fonts.Poppins['700']' refers to the font family name
      lineHeight={24}
      px={'7%'}
      color={'#31006F'}>
      Daily Progress
    </Text>

    <HStack
      height={height * 0.28}
      width={width * 0.85}
      alignSelf={'center'}
      bgColor={'#FFFFFF'}
      borderRadius={20}
      justifyContent={'space-evenly'}
      mt={'4%'}>
      {days.map((item, index) => (
        <VStack
          key={index} // Don't forget to add key prop when iterating over arrays in React
          //   height={height * 0.23}
          py={'3%'}
          width={width * 0.1}
          //   bgColor={'amber.300'}
          justifyContent={'space-between'}
          alignItems={'center'}
          //   key={index}
        >
          {/* <Box height={21} width={21} bgColor={'amber.200'} /> */}
          <VerticalProgressBar progress={item.value} />
          <Text
            color={'#7B6F72'}
            fontSize={14}
            fontWeight={700}
            fontFamily={'Poppins-Bold'} // Assuming 'fonts.Poppins['700']' refers to the font family name
            lineHeight={18}>
            {item.dayName}
          </Text>
        </VStack>
      ))}
    </HStack>
  </VStack>
  <VStack mt={'10%'} mb={'5%'}>
    <Text
      fontSize={16}
      fontWeight={600}
      fontFamily={'Poppins-Bold'} // Assuming 'fonts.Poppins['700']' refers to the font family name
      lineHeight={24}
      px={'7%'}
      color={'#31006F'}>
      Today's Update
    </Text>

    <HStack
      height={height * 0.28}
      width={width * 0.85}
      alignSelf={'center'}
      bgColor={'#F6F0FF'}
      borderRadius={20}
      justifyContent={'space-evenly'}
      mt={'4%'}>
        <Box ml={'2%'} mt={'4%'} height={100} width={100} alignItems={'center'} >
              <AnimatedCircularProgress
                size={100}
                width={25}
                fill={averagePercentage}
                
                tintColor="#31006F"
                lineCap={'butt'}
                duration={3000}
                backgroundWidth={20}
                onAnimationComplete={() =>
                  console.log('onAnimationComplete')
                }
                backgroundColor="#FFFFFF"
              />
            </Box>
      <Box height={height * 0.22} mt={'10%'} >
        {habitsData.map((item, index) => (
          <HStack
            my={'2%'}
            alignItems={'center'}
            // alignSelf={'center'}
            justifyContent={'space-between'}
            >
            
            <Text
              fontSize={10}
              fontWeight={400}
              fontFamily={'Poppins-Bold'} // Assuming 'fonts.Poppins['700']' refers to the font family name
              lineHeight={12}
              px={'7%'}
              color={'#31006F'}>
              {item.name}
            </Text>
            <Text
              fontSize={10}
              fontWeight={400}
              fontFamily={'Poppins-Bold'} // Assuming 'fonts.Poppins['700']' refers to the font family name
              lineHeight={12}
              px={'7%'}
              color={'#31006F'}>
              {item.value}
            </Text>
          </HStack>
        ))}
      </Box>
    </HStack>
  </VStack>
  </Box>
  )
}

export default Progress