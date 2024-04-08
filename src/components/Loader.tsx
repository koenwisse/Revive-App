import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {Colors} from '../theme/Colors';
import {screenHeight, screenWidth} from '../theme/Scale';

type Props = {
  visible: boolean;
};

const Loader: React.FC<Props> = (props: Props) => {
  const {visible} = props;

  return (
    <>
      {visible && (
        <View style={styles.container}>
          <ActivityIndicator color={Colors.red} size={'large'} />
        </View>
      )}
    </>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF80',
  },
});
