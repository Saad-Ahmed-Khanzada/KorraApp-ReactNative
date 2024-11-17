import React, { useRef, useEffect } from "react";
import {
  Animated,
  Easing,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { setUser } from "@/redux/slices/user";
import { Stack } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export default function Welcome() {
  const slideAnim = useRef(new Animated.Value(-100)).current;
  const navigation = useNavigation();

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        const { uid, email, displayName } = u;
        dispatch(setUser({ uid, email, displayName }));
      } else {
        dispatch(setUser(null));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const handlePress = () => {
    if (user) {
      navigation.navigate("(tabs)");
    } else {
      navigation.navigate("screens/Authentication/login");
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-5">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Image
        className="mb-16"
        source={require("../assets/images/welcomePage/korraLogo.png")}
        style={{ width: 400, height: 300 }}
      />
      <Animated.Text
        className="text-4xl font-bold text-black mb-1 text-center"
        style={{ transform: [{ translateX: slideAnim }] }}
      >
        Welcome to Korra
      </Animated.Text>
      <Text className="text-gray-500 w-64 text-base text-center mb-10">
        Your AI partner for smarter digital investments
      </Text>
      <View className="absolute bottom-12 w-full flex items-center">
        <TouchableOpacity
          className="bg-violet-800 p-4 w-full rounded-full flex-row items-center justify-center"
          onPress={handlePress}
        >
          <Image
            source={require("../assets/images/individualAssets/bgDarkWaveLarge.png")}
            className="absolute w-80 opacity-30 h-12 rounded-full z-10"
            resizeMode="cover"
          />
          <Text className="text-white  font-bold ml-4 pr-2 z-20">
            LET'S GET STARTED
          </Text>
          <Icon name={"arrow-forward-outline"} color={"white"} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
