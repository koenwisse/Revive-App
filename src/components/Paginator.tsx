import React, {FunctionComponent} from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Icon} from './Icons';
import {Colors} from '../theme/Colors';
import {NormalText} from './Text';

interface PaginatorProps {
  data: object[];
  scrollX: Animated.Value;
  currentIndex: number;
  onPressNext: () => void;
  onPressPrevious: () => void;
  onPressGetStarted: () => void;
}

const Paginator: FunctionComponent<PaginatorProps> = ({
  data,
  scrollX,
  currentIndex,
  onPressNext,
  onPressPrevious,
  onPressGetStarted,
}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        {data.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [RFPercentage(4), RFPercentage(4), RFPercentage(4)],
            extrapolate: 'clamp',
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
          });
          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: ['#DDDDDD', '#53EB95', '#DDDDDD'],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={i.toString()}
              style={{width: dotWidth, opacity}}>
              <Animated.View style={[styles.dot, {backgroundColor}]} />
            </Animated.View>
          );
        })}
      </View>
      <View style={styles.btnContainer}>
        {currentIndex === 0 ? (
          <Pressable style={styles.nextBtnContainer} onPress={onPressNext}>
            <Icon
              type="AntDesign"
              name="arrowright"
              size={RFPercentage(3.5)}
              color={Colors.white}
            />
          </Pressable>
        ) : currentIndex === 3 ? (
          <>
            <Pressable
              onPress={onPressGetStarted}
              style={[
                styles.nextBtnContainer,
                {
                  backgroundColor: '#203946',
                  flexDirection: 'row',
                  alignItems: 'center',
                },
              ]}>
              <NormalText
                style={{
                  color: Colors.white,
                  marginHorizontal: RFPercentage(1),
                  fontSize: RFValue(15),
                }}>
                Get Started
              </NormalText>
              <Icon
                type="AntDesign"
                name="right"
                size={RFPercentage(2.5)}
                color={Colors.white}
              />
            </Pressable>
          </>
        ) : (
          <>
            <Pressable
              onPress={onPressPrevious}
              style={[styles.nextBtnContainer, {backgroundColor: '#203946'}]}>
              <Icon
                type="AntDesign"
                name="arrowleft"
                size={RFPercentage(3.5)}
                color={Colors.white}
              />
            </Pressable>
            <View style={{marginHorizontal: RFPercentage(2)}} />
            <Pressable style={styles.nextBtnContainer} onPress={onPressNext}>
              <Icon
                type="AntDesign"
                name="arrowright"
                size={RFPercentage(3.5)}
                color={Colors.white}
              />
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: RFPercentage(2),
    borderRadius: RFPercentage(70),
    backgroundColor: '#53EB95',
    marginHorizontal: RFPercentage(1),
  },
  container: {
    flexDirection: 'row',
    height: RFPercentage(4),
    paddingHorizontal: RFPercentage(3),
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextBtnContainer: {
    backgroundColor: '#53EB95',
    padding: RFPercentage(1.3),
    borderRadius: RFPercentage(10),
  },
});
