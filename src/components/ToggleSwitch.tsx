import {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Svg, {Circle, Rect} from 'react-native-svg';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <TouchableOpacity onPress={handleToggle} style={styles.container}>
      <Svg height="20" width="60" viewBox="0 0 60 30">
        <Rect
          x="0"
          y="0"
          width="60"
          height="30"
          rx="15"
          fill={isOn ? '#31006F' : '#31006F'}
        />
        <Circle
          cx={isOn ? '45' : '15'}
          cy="15"
          r="10"
          fill={isOn ? '#FFFFFF' : '#FFFFFF'}
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // // padding: 20,
    // backgroundColor: 'green',
    width: 50,
  },
});

export default ToggleSwitch;
