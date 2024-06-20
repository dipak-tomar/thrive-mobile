import {
  Box,
  Divider,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import ThriveLogo from '../../Assets/images/thrive_logo.svg';
import DashedVerticalLine from '../../Assets/DashedVerticalLine.svg';
import BookOpen from '../../Assets/BookOpen.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loader} from '../../components/Loader';
const Notifications = () => {
  const [data, setdata] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setloading(true);
    const notify = await AsyncStorage.getItem('notification');
    if (notify) {
      const pasredNotify = JSON.parse(notify ? notify : '');
      setdata(pasredNotify);
    }
    setTimeout(() => {
      setloading(false);
    }, 2000);

    console.log('notification.js', notify);
  };

  return (
    <Box safeArea bgColor={'#F6F0FF'} flex={1}>
      <HStack
        mt={'4%'}
        ml={'4%'}
        alignItems={'center'}
        justifyContent={'space-around'}>
        <HStack>
          <ThriveLogo />
          <Text color={'#31006F'} fontSize={35} ml={'4%'}>
            Notifications
          </Text>
        </HStack>
        <Box>
          <BookOpen />
        </Box>
      </HStack>
      <ScrollView>
        <Box mt={'5%'}>
          {[1, 2, 3]?.map(i => {
            return (
              <>
                <HStack
                  justifyContent={'space-around'}
                  backgroundColor={'#F6F0FF'}
                  alignItems={'center'}
                  padding={4}
                  // margin={1}
                >
                  <Image
                    style={{
                      height: 50,
                      width: 50,
                      resizeMode: 'cover',
                    }}
                    borderRadius={'full'}
                    source={require('../../Assets/images/test_image.png')}
                    alt="image"
                  />
                  <VStack>
                    <Text
                      numberOfLines={1}
                      color={'#31006F'}
                      fontWeight={'600'}
                      fontSize={16}
                      fontFamily={'Averta Std'}>
                      Hey, it’s time for lunch
                    </Text>
                    <Text
                      fontFamily={'Averta Std'}
                      numberOfLines={1}
                      fontWeight={'400'}
                      fontSize={14}
                      color={'#7B6F72'}>
                      About {new Date().getMinutes()} m ago
                    </Text>
                  </VStack>
                  <DashedVerticalLine />
                </HStack>
                <Divider width={'85%'} ml={'9%'} thickness={2} />
              </>
            );
          })}
        </Box>
        {loading ? <Loader /> : null}
      </ScrollView>
    </Box>
  );
};

export default Notifications;
