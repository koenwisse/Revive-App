import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../theme/Colors';
import { hp, wp } from '../theme';
import { NormalText } from './Text';

type Props = {
  tx: string | number;
  onPress: () => void;
  textStyle?: TextStyle;
  ButtonContainer?: ViewStyle[];
  ButtonColor?: any;
};

const PrimaryButton: FC<Props> = ({
  tx,
  onPress,
  textStyle,
  ButtonContainer,
  ButtonColor = Colors.gradiantRed,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={ButtonColor}
        style={[styles.container, ButtonContainer]}>
        <NormalText style={[styles.textStyle, textStyle]}>{tx}</NormalText>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: hp(1.5),
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: '600',
    color: Colors.white,
  },
});
