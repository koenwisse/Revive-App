import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from './Icons';
import {TitleText} from './Text';
import {wp} from '../theme';
import {useNavigation} from '@react-navigation/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

type Props = {
  headerTitle: String;
};

const GlobalHeader = (props: Props) => {
  const {headerTitle} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.headerConatiner}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon type="Ionicons" name={'chevron-back'} size={RFPercentage(3.5)} />
      </Pressable>
      <TitleText>{headerTitle}</TitleText>
      <View style={{width: RFPercentage(3.5)}} />
    </View>
  );
};

export default GlobalHeader;

const styles = StyleSheet.create({
  headerConatiner: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp(3),
    paddingBottom: wp(3),
    justifyContent: 'space-between',
    marginTop: wp(2),
  },
});
