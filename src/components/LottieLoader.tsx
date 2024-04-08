import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet, View} from 'react-native';
import {wp} from '../theme';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default function LottieLoader() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../images/grocceryLoader.json')}
        style={{width: RFPercentage(30), height: RFPercentage(30)}}
        resizeMode="contain"
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});
