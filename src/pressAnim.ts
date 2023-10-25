/***
 * File: /src/components/others/reanimated/pressAnim.ts
 * Project: epik
 * Author: John Chan Kah Seng (johnc@chanksis.com)
 * -----
 * Created: 18th October 2023 10:55am
 * Modified: 25th October 2023 6:22pm     by: John Chan Kah Seng
 * -----
 * ReactNative: 0.70.2   ReactNavigation: 6.x
 * Copyright 2016 - 2023 Chanksis.
 ***/
import {
  interpolate,
  Extrapolate,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
  type PressAnimStyle,
} from 'react-native-reanimated';
/**
 * # Namespace PressAnim
 */
export namespace PressAnim {
  /**
   * ## bounce
   * bounce on press animation by using transform scale.
   */
  export const bounce: PressAnimStyle = () => {
    const shared = useSharedValue(1);
    function forward(cb: () => void) {
      'worklet';
      shared.value = withSpring(0.95, {mass: 0.1}, () => runOnJS(cb)());
    }
    function reverse(cb: () => void) {
      'worklet';
      shared.value = withSpring(1, {mass: 0.1}, () => runOnJS(cb)());
    }
    const UAS = useAnimatedStyle(() => ({transform: [{scale: shared.value}]}));
    return [forward, reverse, UAS];
  };
  /**
   * ## elevate
   * compress on press, elevate on press release animation.
   * animate using transform scale & shadow.
   */
  export const elevate: PressAnimStyle = () => {
    const shared = useSharedValue(0);
    function forward(cb: () => void) {
      shared.value = withSpring(1, {mass: 0.1}, () => runOnJS(cb)());
    }
    function reverse(cb: () => void) {
      shared.value = withSpring(0, {mass: 0.1}, () => runOnJS(cb)());
    }
    const UAS = useAnimatedStyle(() => {
      const scale = interpolate(
        shared.value,
        [0, 1],
        [1, 0.95],
        Extrapolate.CLAMP,
      );
      const depth = interpolate(
        shared.value,
        [0, 1],
        [10, 0],
        Extrapolate.CLAMP,
      );
      return {
        transform: [{scale}],
        shadowColor: '#000',
        shadowOffset: {width: 0, height: depth * 0.5},
        shadowOpacity: Math.round((0.16 + depth * 0.018) * 100) / 100,
        shadowRadius: Math.round((0.41 + depth * 0.59) * 100) / 100,
        elevation: depth,
      };
    });
    return [forward, reverse, UAS];
  };
  /**
   * ## shade
   * lighten shade of button on press by reducing opacity (0.7)
   */
  export const shade: PressAnimStyle = () => {
    const shared = useSharedValue(1);
    function forward(cb: () => void) {
      shared.value = withSpring(0.7, {mass: 0.1}, () => runOnJS(cb)());
    }
    function reverse(cb: () => void) {
      shared.value = withSpring(1, {mass: 0.1}, () => runOnJS(cb)());
    }
    const UAS = useAnimatedStyle(() => ({opacity: shared.value}));
    return [forward, reverse, UAS];
  };
}
