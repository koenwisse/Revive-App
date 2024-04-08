import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
  KeyboardTypeOptions,
  Dimensions,
} from 'react-native';
import React, {FC} from 'react';
import {hp, wp} from '../theme';
import {Colors} from '../theme/Colors';
import {Icon} from './Icons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

type Props = {
  value: any;
  onChangeText: any;
  placeholder: string;
  inputContainerStyle?: ViewStyle;
  secureTextEntry?: boolean;
  onPressEye?: Function;
  showPassWord?: boolean;
  showRightIcon?: boolean;
  editable?: Boolean | undefined;
  keyboardType?: KeyboardTypeOptions; // Define keyboardType prop
  maxLength?: number;
  inputStyle?: ViewStyle;
  multiline?: boolean;
  numberOfLines?: Number;
};

const CustomTextInput: FC<Props> = ({
  value,
  onChangeText,
  placeholder,
  inputContainerStyle,
  secureTextEntry,
  onPressEye,
  showPassWord = false,
  showRightIcon,
  editable = true,
  keyboardType, // Destructure keyboardType from props
  maxLength,
  inputStyle,
  multiline = false,
  numberOfLines,
  ...rest
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        inputContainerStyle,
        {backgroundColor: !editable ? Colors.lightGray : Colors.white},
      ]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[
          styles.inputStyle,
          inputStyle,
          {textAlignVertical: multiline ? 'top' : 'center'},
        ]}
        placeholderTextColor={Colors.textGray}
        secureTextEntry={showPassWord}
        editable={editable}
        keyboardType={keyboardType} // Pass keyboardType to TextInput
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
        {...rest}
      />
      {showRightIcon && (
        <Pressable
          style={{position: 'absolute', right: wp(3)}}
          hitSlop={{bottom: 10, left: 10, top: 10}}
          onPress={onPressEye}>
          <Icon
            type="FontAwesome"
            name={showPassWord ? 'eye-slash' : 'eye'}
            size={RFPercentage(2)}
            color={Colors.textGray}
          />
        </Pressable>
      )}
    </View>
  );
};

export default CustomTextInput;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.borderGray,
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    justifyContent: 'center',
  },
  inputStyle: {
    fontSize: RFPercentage(2),
    paddingVertical: wp(1),
    color: Colors.black,
  },
});
