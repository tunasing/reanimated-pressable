/***
 * File: /types/extensions/reanimated.d.ts
 * Project: epik
 * Author: John Chan Kah Seng (johnks.chan@gmail.com)
 * -----
 * Created: 21st October 2023 10:43pm
 * Modified: 25th October 2023 5:38pm     by: John Chan Kah Seng
 * -----
 * ReactNative: 0.70.2   ReactNavigation: 6.x
 * Copyright 2016 - 2023 Chanksis.
 ***/
declare module 'react-native-reanimated' {
  import * as Rn from 'react-native';
  import {PressAnim} from '~/others/reanimated';
  type callback = () => void;

  //+ PressAnim `
  type PressAnimTag = keyof typeof PressAnim;
  type PressAnimStyle = () => [
    /** PressIn forward Animation */
    forward: (cb: callback) => void,
    /** PressOut reverse Animation */
    reverse: (cb: callback) => void,
    /** AnimatedStyle (useAnimatedStyle) */
    UAS: Rn.ViewStyle,
  ];
}
