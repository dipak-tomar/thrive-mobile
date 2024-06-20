import {View, useWindowDimensions, FlatList} from 'react-native';
import {Box, Button, HStack, Text, VStack, Icon} from 'native-base';
import React from 'react';
import Female from '../../Assets/Female.svg';
import FirstPlace from '../../Assets/FirstPlace.svg';
import SecondPlace from '../../Assets/SecondPlace.svg';
import ThirdPlace from '../../Assets/ThirdPlace.svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Icon from 'react-native-vector-icons/AntDesign';

const Leaderboard = () => {
  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;
  const data = [
    {name: 'Alice', number: 95},
    {name: 'Bob', number: 93},
    {name: 'Charlie', number: 91},
    {name: 'David', number: 78},
    {name: 'Eve', number: 77},
    {name: 'Frank', number: 75},
    {name: 'Grace', number: 72},
    {name: 'Hank', number: 67},
    {name: 'Ivy', number: 66},
    {name: 'Jack', number: 64},
    {name: 'Alice', number: 60},
    {name: 'Bob', number: 54},
    {name: 'Charlie', number: 52},
    {name: 'David', number: 50},
    {name: 'Eve', number: 49},
    {name: 'Frank', number: 48},
    {name: 'Grace', number: 45},
    {name: 'Hank', number: 42},
    {name: 'Ivy', number: 38},
    {name: 'Jack', number: 33},
  ];

  const renderItem = ({item, index}) => (
    <HStack
      mt={'5%'}
      py={index === 0 || index === 1 || index === 2 ?'4%':'2%'}
      px={index === 0 || index === 1 || index === 2 ?'3%':'2%'}
      borderRadius={ index === 0 || index === 1 || index === 2  ? 12 : 0}
      shadow={index === 0 || index === 1 || index === 2 ? 8: null}
      bgColor={index === 0 ? '#FFE166' : (index === 1 ? '#B3CBEF' :index === 2 ? '#FCD9C5' : null )}
      alignItems={'center'}
      alignSelf={'center'}
      justifyContent={'space-between'}
      width={ index === 0 ?  width*0.93 :(index === 1 ?  width*0.88 :(index === 2 ?  width * 0.84 : width*0.80))}>
      <HStack
        width={width * 0.18}
        alignItems={'center'}
        justifyContent={'space-between'}>
        {index === 0 && <FirstPlace height={23} width={23} />}
        {index === 1 && <SecondPlace height={23} width={23} />}
        {index === 2 && <ThirdPlace height={23} width={23} />}
        {index !== 0 && index !== 1 && index !== 2 && (
          <Box height={23} width={23}></Box>
        )}
        <Female height={33} width={33} />
      </HStack>
      <Box>
        <Text
          color={'#31006FEB'}
          fontSize={16}
          fontWeight={600}
          lineHeight={20}
          // textAlign={'start'}
          ml={'4%'}>
          {item.name}
        </Text>
      </Box>
      <HStack
        width={width * 0.13}
        alignItems={'center'}
        justifyContent={'space-evenly'}>
        <Icon as={AntDesign} color={'#FFCA28'} name="star" size={3} />
        <Text>{item.number}</Text>
      </HStack>
    </HStack>
  );

  return (
    <Box>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </Box>
  );
};

export default Leaderboard;
