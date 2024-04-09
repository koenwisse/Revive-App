import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {Colors} from '../theme/Colors';

type Props = {
  visible: boolean;
};

const Loader: React.FC<Props> = ({visible}: Props) => {
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
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF80',
  },
});
