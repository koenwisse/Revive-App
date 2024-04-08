import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Colors} from '../theme/Colors';
import {Icon} from './Icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {hp, wp} from '../theme';

type Props = {
  title?: string;
  rightIconType?: string | undefined;
  rightIconName?: string | undefined;
};

const Header: FC<Props> = (props: Props) => {
  const navigation = useNavigation();
  const route = useRoute();

  const {title = route?.name, rightIconType, rightIconName} = props;

  return (
    <View style={styles.container}>
      <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
        <Icon type="Ionicons" name={'chevron-back'} size={25} />
      </Pressable>

      <Text style={styles.titleText}>{title}</Text>

      <Pressable style={styles.backIcon}>
        <Icon
          type={rightIconType}
          name={rightIconName}
          size={22}
          color={Colors.black}
        />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingVertical: hp(1.5),
    flexDirection: 'row',
    marginBottom: 1,
  },
  backIcon: {
    width: wp(10),
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
  },
});
