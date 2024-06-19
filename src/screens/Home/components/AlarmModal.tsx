import {Box, Button, HStack, Modal, Switch, Text} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

const AlarmModal = ({isModalVisible, closeModal}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const toggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const handleDayPress = day => {
    setSelectedDays(prevSelectedDays =>
      prevSelectedDays.includes(day)
        ? prevSelectedDays.filter(d => d !== day)
        : [...prevSelectedDays, day],
    );
  };
  return (
    <Modal isOpen={isModalVisible} onClose={closeModal} size="lg">
      <Modal.Content backgroundColor={'#F6F0FF'}>
        <Modal.CloseButton />
        <Modal.Header>Repeat</Modal.Header>
        <Modal.Body>
          <Text fontSize="sm" color="gray.500">
            Choose at least 1 day
          </Text>
          <HStack justifyContent="space-between" mt={4}>
            {days.map((day, index) => (
              <Button
                key={index}
                onPress={() => handleDayPress(day)}
                variant="unstyled"
                style={[
                  styles.dayButton,
                  selectedDays.includes(day) && styles.selectedDayButton,
                ]}>
                <Text
                  style={[
                    styles.dayButtonText,
                    selectedDays.includes(day) && styles.selectedDayButtonText,
                  ]}>
                  {day}
                </Text>
              </Button>
            ))}
          </HStack>
          <Box mt={5}>{/* <Clock /> Custom clock component */}</Box>
          <HStack
            mt={5}
            alignItems="center"
            bgColor={'gray.300'}
            borderWidth={1}>
            <Text fontSize="xl" mr={2}>
              11:15 AM
            </Text>
            <Switch value={isSwitchOn} onValueChange={toggleSwitch} />
          </HStack>
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
