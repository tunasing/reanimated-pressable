/***
 * File: /src/components/others/reanimated/Pressable.tsx
 * Project: epik
 * Author: John Chan Kah Seng (johnc@chanksis.com)
 * -----
 * Created: 12th June 2023 11:22am
 * Modified: 25th October 2023 6:14pm     by: John Chan Kah Seng
 * -----
 * ReactNative: 0.70.2   ReactNavigation: 6.x
 * Copyright 2016 - 2023 Chanksis.
 ***/
import React from 'react';
import {Pressable, type GestureResponderEvent} from 'react-native';
import Animated from 'react-native-reanimated';
import {PressAnim} from './pressAnim';
import type {RAPressableProps} from 'rnOthers';
//^ Vars `
const RaPressable = Animated.createAnimatedComponent(Pressable);
/**
 * ## [FC] Pressable (reanimated)
 * React-Native Pressable Enhanced with Custom Animations.
 * OnPressIn & OnPressOut holds animation states. Enhanced properties:
 * - `anim` pre-defined PressAnim for Pressable.
 * - `isActive` function that determines if press is enabled. default true.
 * @param {PressableProps} RAPressableProps - Reanimated.Pressable properties.
 */
const RAPressable: React.FC<RAPressableProps> = ({
  isActive = () => true,
  anim,
  onPressIn,
  onPressOut,
  style,
  ...rest
}) => {
  //? PressAnim
  const [forward, reverse, UAS] = (anim && PressAnim[anim]()) || [
    undefined,
    undefined,
    {},
  ];
  //? onPressIn | onPressOut | onPress Handlers
  const onPressInHd = (e: GestureResponderEvent) => {
    const scope = () => {
      onPressIn && onPressIn(e);
    };
    isActive() && forward && forward(scope);
  };
  const onPressOutHd = (e: GestureResponderEvent) => {
    const scope = () => {
      onPressOut && onPressOut(e);
    };
    reverse && reverse(scope);
    // isActive() && reverse && reverse(scope);
  };
  return (
    <RaPressable
      onPressIn={(anim && onPressInHd) || onPressIn}
      onPressOut={(anim && onPressOutHd) || onPressOut}
      style={[style, UAS]}
      {...rest}
    />
  );
};
//^ Exports `
export {RAPressable};
export type {RAPressableProps};
