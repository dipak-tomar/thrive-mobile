import {Box, Button, HStack, Modal, Switch, Text , useToast} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import AnalogClock from 'react-native-clock-analog';
import {TimerPickerModal} from 'react-native-timer-picker';
//  import LinearGradient from "react-native-linear-gradient"
// import { Audio } from "expo-av"; // for audio feedback (click sound as you scroll)
// import * as Haptics from "expo-haptics"; // for haptic feedback
// import AnalogClock from 'react-native-analog-clock';

const AlarmModal = ({isModalVisible, closeModal}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [isPressed, setIsPressed] = useState(false);
  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;
  const [showPicker, setShowPicker] = useState(false);
  const [alarmString, setAlarmString] = useState<string | null>(null);
 const toast = useToast()
  const days = [
    {day: 'S', dayName: 'Sun'},
    {day: 'M', dayName: 'Mon'},
    {day: 'T', dayName: 'Tue'},
    {day: 'W', dayName: 'Wed'},
    {day: 'T', dayName: 'Thu'},
    {day: 'F', dayName: 'Fri'},
    {day: 'S', dayName: 'Sat'},
  ];

  const toggleSwitch = () =>{ 
    
    setIsSwitchOn(false)
    
    toast.show({
      description: 'Reminder set for the following days',
      duration: 2000,
    });
    
    
  };

  const handleSelect = (dayName: string) => {
    setSelectedDays(prevSelectedDays =>
      prevSelectedDays.includes(dayName)
        ? prevSelectedDays.filter(d => d !== dayName)
        : [...prevSelectedDays, dayName],
    );
  };
  console.log("alarmString=>" , alarmString?.hours);
  

  return (
    <Modal isOpen={isModalVisible} onClose={closeModal} size="lg">
      <Modal.Content
        backgroundColor={'#F6F0FF'}
        borderRadius={20}
        borderWidth={1}
        borderColor={'#31006F'}>
        <Modal.CloseButton />
        <Modal.Body mt={'6%'}>
          <Box bgColor={'#F6F0FF'} my={'2%'}>
            <HStack
              px={'2%'}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Text
                fontSize={14}
                fontWeight={700}
                lineHeight={20}
                fontFamily={'Nunito Sans'}
                color="#31006F">
                Repeat
              </Text>
              <Text
                fontSize={10}
                fontWeight={400}
                lineHeight={14}
                fontFamily={'Nunito Sans'}
                color="#31006F">
                Choose at least 1 day
              </Text>
            </HStack>
            <HStack mx={2} justifyContent="space-between" mt={4}>
              {days.map((item, index) => (
                // <Button
                //   key={index}
                //   onPress={() => handleDayPress(day)}
                //   variant="unstyled"
                //   style={[
                //     styles.dayButton,
                //     selectedDays.includes(day) && styles.selectedDayButton,
                //   ]}>
                <TouchableOpacity
                  onPress={() => {
                    handleSelect(item.dayName);
                  }}>
                  <Box
                    height={27}
                    width={27}
                    borderRadius={'full'}
                    bgColor={
                      selectedDays.includes(item.dayName)
                        ? '#31006F'
                        : '#F6F0FF'
                    }
                    borderWidth={1}
                    borderColor={'#31006F'}
                    alignItems={'center'}
                    justifyContent={'center'}>
                    <Text
                      style={[
                        styles.dayButtonText,
                        selectedDays.includes(item.dayName) &&
                          styles.selectedDayButtonText,
                      ]}>
                      {item.day}
                    </Text>
                  </Box>
                </TouchableOpacity>
                // </Button>
              ))}
            </HStack>
            <Box
              borderWidth={1}
              // borderColor={'#31006F'}
              borderRadius={'full'}
              bgColor={'amber.200'}
              alignSelf={'center'}
              shadow={6}
              mt={5}>
              <AnalogClock
                colorClock="#F6F0FF"
                colorNumber="#F6F0FF"
                colorCenter="#807D7D"
                colorHour="#1400FF"
                colorMinutes="#807D7D"
                colorSeconds="#FF74E9"
                borderColor="#0000FF"
                numberFontSize={20}
                hour={alarmString?.hours}
                minutes={alarmString?.minutes}
                seconds={alarmString?.seconds}
                showSeconds
              />
            </Box>
            <TouchableOpacity onPress={()=> setShowPicker(true)}>
            <HStack
              width={width * 0.68}
              height={height * 0.05}
              justifyContent={'space-between'}
              mt={5}
              alignSelf={'center'}
              alignItems="center"
              bgColor={'#FFFFFF'}
              borderColor={'#E7E7E7'}
              borderRadius={8}
              shadow={2}
              borderWidth={1}>
              <HStack>
                <Text
                  fontSize={14}
                  fontWeight={700}
                  lineHeight={14}
                  fontFamily={'Nunito Sans'}
                  ml={2}>
                  {alarmString?.hours ?? '12' } :
                   {alarmString?.minutes ?? '00' }
                </Text>
                <Text
                  fontSize={10}
                  fontWeight={700}
                  lineHeight={12}
                  fontFamily={'Nunito Sans'}
                  ml={1}
                  color={'#C5C5C5'}>
                  AM
                </Text>
              </HStack>
              <Switch
                onTrackColor="black"
                offTrackColor="gray.200"
                value={isSwitchOn}
                onValueChange={toggleSwitch}
              />
            </HStack>
            </TouchableOpacity>
            <TimerPickerModal
              visible={showPicker}
              setIsVisible={setShowPicker}
              onConfirm={pickedDuration => {
                setAlarmString(pickedDuration);
                setShowPicker(false);
              }}
              modalTitle="Set Reminder"
              onCancel={() => setShowPicker(false)}
              closeOnOverlayPress
              use24HourPicker
              // Audio={Audio}
              // supply your own custom click sound asset
              // clickSoundAsset={require('./assets/custom_click.mp3')}
              // LinearGradient={LinearGradient}
              // Haptics={Haptics}
              styles={{
                theme: 'light',
                
              }}
            />
          </Box>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default AlarmModal;

const styles = StyleSheet.create({
  dayButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#EEE',
  },
  selectedDayButton: {
    backgroundColor: '#31006F',
  },
  dayButtonText: {
    color: '#000',
  },
  selectedDayButtonText: {
    color: '#FFF',
  },
});
