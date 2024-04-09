import {
  Text,
  View,
  Animated,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState, FunctionComponent} from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import MyStatusBar from '../../components/CustomeStatusBar';
import OnboardItem from '../../components/OnboardItem';
import Paginator from '../../components/Paginator';
import {Colors} from '../../theme/Colors';
import {screens} from '../../utilitis';
import {landingData} from './LandingDummyData';

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;
  const sliderRef = useRef<FlatList<any>>(null);

  const viewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: any[]}) => {
      setCurrentIndex(viewableItems[0]?.index || 0);
    },
  ).current;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset, layoutMeasurement} = event.nativeEvent;
    const index = Math.round(contentOffset.x / layoutMeasurement.width);
    setCurrentIndex(index);
  };

  const onPressNext = () => {
    try {
      if (sliderRef.current) {
        sliderRef.current.scrollToIndex({
          index: (currentIndex + 1) % landingData.length,
          animated: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onPressPrevious = () => {
    try {
      if (sliderRef.current) {
        sliderRef.current.scrollToIndex({
          index: (currentIndex - 1 + landingData.length) % landingData.length,
          animated: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor={'#F0FAFF'} barStyle="dark-content" />

      <View style={styles.mainContainer}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={styles.skipBtn}
            onPress={() => navigation.navigate(screens.HOME)}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>

          <FlatList
            data={landingData}
            renderItem={({item}) => <OnboardItem data={item} />}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {
                useNativeDriver: false,
                listener: handleScroll,
              },
            )}
            keyExtractor={item =>
              item.id ? item.id.toString() : Math.random().toString()
            }
            onViewableItemsChanged={viewableItemsChanged}
            scrollEventThrottle={32}
            ref={sliderRef}
          />
        </View>
        <View style={{flex: 0.1, top: RFPercentage(-2)}}>
          <Paginator
            data={landingData}
            scrollX={scrollX}
            currentIndex={currentIndex}
            onPressNext={onPressNext}
            onPressPrevious={onPressPrevious}
            onPressGetStarted={() => navigation.navigate(screens.HOME)}
          />
        </View>
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FAFF',
  },
  buttonText: {
    color: '#666666',
    fontSize: RFValue(13),
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F0FAFF',
  },
  skipBtn: {
    backgroundColor: Colors.white,
    alignSelf: 'flex-end',
    paddingHorizontal: RFPercentage(2),
    paddingVertical: RFPercentage(1),
    borderRadius: RFPercentage(3),
    marginRight: RFPercentage(3),
    marginTop: RFPercentage(1),
  },
});
