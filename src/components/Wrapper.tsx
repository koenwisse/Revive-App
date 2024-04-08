import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Colors} from '../theme/Colors';
import {screens} from '../utilitis';
import {Icon} from './Icons';
import {hp, wp} from '../theme';
import {navigate} from '../navigation/rootNavigation';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const Wrapper = props => {
  function onPressSpiral() {
    console.log('onPress Spiral...');
    navigate(screens.createPost);
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      {props.children}
      <TouchableOpacity onPress={props.onPress} style={styles.spiralContainer}>
        <Icon
          type="Entypo"
          name="plus"
          size={RFPercentage(4)}
          color={Colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  spiralContainer: {
    position: 'absolute',
    right: RFPercentage(2),
    bottom: RFPercentage(2),
    height: RFPercentage(8),
    width: RFPercentage(8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.red,
    borderRadius: wp(70),
  },
  spiralIcon: {
    height: hp(15),
    width: wp(15),
    resizeMode: 'contain',
  },
  imagestyle: {
    width: wp(18),
    height: hp(9),
    resizeMode: 'contain',
  },
});

export default Wrapper;
