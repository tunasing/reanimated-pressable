# reanimated-pressable

![Pressable ranim](https://github.com/tunasing/reanimated-pressable/assets/5899265/c2d86a5d-ea7b-40b3-884a-35d2338a7e45)

## Feature

-   currently has animation types `bounce|elevate|shade`
-   easy add in additional custom animations in `PressAnim.ts` to use with `anim` property
-   bypass `PressIn` event when `isActive` property returns `false`. (Defaults to true)

## Instructions

Specify `anim` property in the `Pressable.ranim` component

```
    <Pressable.ranim anim={'elevate'} style={styles.prss}>
        <Text color={'white'} children={'Reanimated.Pressable'} />
    </Pressable.ranim>
```

## Pre-requisites

-   react-native-reanimated (package)

## Compatability

-   ios
-   android
