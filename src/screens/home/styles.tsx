import {Theme} from '@react-navigation/native';
import {StyleSheet, ViewStyle} from 'react-native';
import DeviceInfo from 'react-native-device-info';

interface Style {
  container: ViewStyle;
}

let isTablet = DeviceInfo.isTablet();

export default (theme: Theme) => {
  const {colors} = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  });
};
