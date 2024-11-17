import React from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import { Link, Stack, useNavigation } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";

export default function Step2() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-gray-50 px-5 pt-10">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" />
      {/* First Section */}
      <View className="flex-row justify-end mb-3">
        <Link
          href="/screens/Steps/step3"
          className="text-blue-500 font-semibold text-base  "
        >
          SKIP
        </Link>
      </View>

      {/* ScrollView Section */}
      <ScrollView className="flex-1 mb-3">
        <View className="flex-row items-center mb-3">
          <Image
            source={require("../../../assets/icons/askKorra/activeKorraHd.png")}
            className="w-8 h-8 mr-4"
          />
          <Text className="text-2xl font-bold text-black w-[90%]">
            Tell me about your level of experience in trading digital assets...
          </Text>
        </View>
      </ScrollView>

      {/* Second Section */}
      <View className="flex flex-wrap flex-row justify-between items-stretch mb-0 h-[50%]">
        <TouchableOpacity className="w-[48%] flex flex-col justify-center t items-center p-4 bg-white  rounded-xl mb-2">
          <Text className="font-bold text-lg  text-center mb-2">Beginner</Text>
          <Text className="text-gray-500 text-center">
            I'm completely new to digital assets and cryptocurrency trading
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[48%] flex flex-col justify-center t items-center p-4 bg-white  rounded-xl mb-2">
          <Text className="font-bold text-lg mb-2 ">Intermediate</Text>
          <Text className="text-gray-500 text-center mb-4">
            I have a basic understanding but limited experience
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[48%] flex flex-col justify-center t items-center p-4 bg-white  rounded-xl mb-2">
          <Text className="font-bold text-lg mb-2">Professional</Text>
          <Text className="text-gray-500 text-center">
            I have a strong understanding with intermediate experience
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[48%] flex flex-col justify-center t items-center p-4 bg-white  rounded-xl mb-2">
          <Text className="font-bold text-lg mb-2">Expert</Text>
          <Text className="text-gray-500 text-center mb-5 ">
            I have an in-depth understanding and vast experience
          </Text>
        </TouchableOpacity>
      </View>

      {/* Third Section */}
      <View className="bg-blue-100 p-4 rounded-lg mb-6">
        <Text className="text-blue-800 font-semibold">
          <Text className="font-bold text-black">Why this? </Text> It would be
          helpful to know your current experience
        </Text>
      </View>

      <View className="flex-row items-center justify-between mb-5">
        <View className="flex flex-col">
          <Text className="text-gray-800 font-bold">Step 2/3</Text>
          <View className="flex-row items-center mt-2">
            <View className="w-5 h-1 rounded-full bg-purple-800 mr-1 "></View>
            <View className="w-5 h-1 rounded-full bg-purple-800 mr-1"></View>
            <View className="w-3 h-1 rounded-full bg-gray-300"></View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("screens/Steps/step3")}
          className="flex-row items-center bg-purple-800 p-3 rounded-full"
        >
          <Image
            source={require("../../../assets/images/individualAssets/bgDarkWaveLarge.png")}
            className="absolute w-28 h-10 rounded-full z-10 ml-1 opacity-70"
            resizeMode="cover"
          />
          <View className="flex flex-row z-20">
            <Text className="text-white font-semibold px-4 mr-2 ">NEXT</Text>
            <Icon name="arrow-forward" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
