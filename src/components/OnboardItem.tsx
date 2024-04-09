import React, {FunctionComponent} from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import {NormalText, TitleText} from './Text';
import {Images} from '../images';

interface OnboardItemProps {
  data: {
    title: string;
    description: string;
    image: ImageSourcePropType | any;
  };
}

const OnboardItem: FunctionComponent<OnboardItemProps> = ({data}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <View style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
        <TitleText style={styles.titleStyle}>{data.title}</TitleText>
        <NormalText style={styles.descStyle}>{data.description}</NormalText>
      </View>

      <View style={{flex: 1, justifyContent: 'center'}}>
        <FastImage
          source={data.image}
          style={[styles.imageStyle, {width}]}
          resizeMode="contain"
        />
        <FastImage
          source={Images.appLogo}
          style={styles.appLogo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default OnboardItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: RFPercentage(2),
  },
  titleStyle: {
    fontSize: RFValue(20),
    textAlign: 'center',
    color: '#203946',
  },
  descStyle: {
    fontSize: RFValue(12),
    textAlign: 'center',
    marginHorizontal: RFPercentage(2),
    marginVertical: RFPercentage(2),
    fontWeight: '500',
    color: '#313E45',
  },
  imageStyle: {
    justifyContent: 'center',
    flex: 0.5,
  },
  appLogo: {
    justifyContent: 'center',
    flex: 0.2,
    width: RFPercentage(25),
    alignSelf: 'center',
    bottom: RFPercentage(-2),
  },
});
