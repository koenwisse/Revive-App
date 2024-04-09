import {
  View,
  StatusBar,
  StatusBarProps,
  ViewStyle,
  SafeAreaView,
} from 'react-native';
import React from 'react';

interface MyStatusBarProps extends StatusBarProps {
  backgroundColor: string;
}

interface Styles {
  statusBar: ViewStyle;
}

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles: Styles = {
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
};

const MyStatusBar: React.FC<MyStatusBarProps> = ({
  backgroundColor,
  ...props
}: MyStatusBarProps) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

export default MyStatusBar;
