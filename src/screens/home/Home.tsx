import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from '../../components/Icons';

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Icon type="AntDesign" name="stepforward" size={30} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
