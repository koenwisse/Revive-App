import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextProps,
  StyleProp,
  TextStyle,
  Dimensions,
} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

interface CustomTextProps extends TextProps {
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
}

export const TitleText: React.FC<CustomTextProps> = ({
  children,
  style,
  numberOfLines,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      adjustsFontSizeToFit={false}
      style={[styles.titleText, style]}>
      {children}
    </Text>
  );
};

export const NormalText: React.FC<CustomTextProps> = ({
  children,
  style,
  numberOfLines,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      adjustsFontSizeToFit={false}
      style={[styles.normalText, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: RFValue(17),
    color: 'black',
    fontFamily: 'Nunito-Bold',
  },
  normalText: {
    fontSize: RFValue(13),
    color: 'black',
    fontFamily: 'Nunito-Medium',
  },
});
