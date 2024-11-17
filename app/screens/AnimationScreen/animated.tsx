import React, { useRef, useEffect } from "react";
import { Animated, Text, View, Easing } from "react-native";
import type { PropsWithChildren } from "react";
import type { ViewStyle } from "react-native";

type FadeInViewProps = PropsWithChildren<{ style: ViewStyle }>;

const FadeInView: React.FC<FadeInViewProps> = (props) => {
  const fadeAnim = useRef(new Animated.Value(-100)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{ transform: [{ translateY: fadeAnim }] }}
    >
      {props.children}
    </Animated.View>
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FadeInView
        style={{
          width: 250,
          height: 50,
          backgroundColor: "powderblue",
        }}
      >
        <Text style={{ fontSize: 28, textAlign: "center", margin: 10 }}>
          Lets bounce
        </Text>
      </FadeInView>
    </View>
  );
};
