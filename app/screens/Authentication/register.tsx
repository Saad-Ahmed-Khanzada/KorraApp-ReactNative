import React, { useState } from "react";
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
import { Link, Stack } from "expo-router";
import { auth } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Icon from "react-native-vector-icons/Ionicons";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false); // State to track checkbox

  const handleRegister = async () => {
    if (!agreed) {
      Alert.alert(
        "Error",
        "Please check the 'I agree to terms and conditions' checkbox."
      );
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Password and confirm password do not match.");
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "User registered successfully!");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
    setLoading(false);
  };

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View className="w-full mt-6">
            <View className="flex flex-row items-center mb-4 p-5 ">
              <Image
                source={require("../../../assets/images/individualAssets/korraLogoLarge.png")}
                className="w-8 h-8 mr-3"
              />
              <Text className="text-2xl font-bold text-black">KORRA</Text>
            </View>

            <ImageBackground
              source={require("../../../assets/images/individualAssets/bgPurpleWave.png")}
              className="w-full "
              resizeMode="cover"
            >
              <View className="bg-white rounded-xl border-2 border-gray-100 px-3 py-1 m-4 shadow-lg">
                <Text className="text-lg font-semibold text-black mb-2">
                  Welcome !!!
                </Text>
                <Text className="text-base text-gray-700">
                  Leverage Korra’s AI to supercharge your trading experience.
                </Text>
                <Text className="text-base text-gray-700 mt-4">
                  Please log in or sign up...
                </Text>
              </View>
            </ImageBackground>
          </View>

          <View className="flex items-center justify-between px-4 w-full mt-16">
            <View className="w-full mb-4">
              <Text className="text-2xl font-semibold mb-4 ml-1 text-black">
                Sign up
              </Text>

              <View className="mb-4">
                <TextInput
                  className="border border-gray-200 bg-blue-50 rounded-lg p-4 text-base"
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor={"#AEAEAE"}
                />
              </View>
              <View className="mb-4 relative">
                <TextInput
                  className="border border-gray-200 bg-blue-50 rounded-lg p-4 text-base"
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  placeholderTextColor={"#AEAEAE"}
                />
                <Icon
                  style={{ position: "absolute", right: 10, top: 18 }}
                  name={showPassword ? "eye-off" : "eye"}
                  size={24}
                  color="#000"
                  onPress={() => setShowPassword(!showPassword)}
                />
              </View>
              <View className="mb-4 relative">
                <TextInput
                  className="border border-gray-200 bg-blue-50 rounded-lg p-4 text-base"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showPassword}
                  placeholderTextColor={"#AEAEAE"}
                />
                <Icon
                  style={{ position: "absolute", right: 10, top: 18 }}
                  name={showPassword ? "eye-off" : "eye"}
                  size={24}
                  color="#000"
                  onPress={() => setShowPassword(!showPassword)}
                />
              </View>
            </View>

            <View className="w-full  mt-10  mb-0  ">
              <View className="flex flex-row items-center ml-2 mb-2">
                <TouchableOpacity onPress={() => setAgreed(!agreed)}>
                  <Icon
                    name={agreed ? "checkbox" : "square-outline"}
                    size={24}
                    color={agreed ? "#6A1B9A" : "#000"}
                  />
                </TouchableOpacity>
                <Text className="ml-2 text-gray-400 flex-row ">
                  I agree to the{" "}
                  <Text className="underline">terms and conditions</Text>
                </Text>
              </View>

              <View>
                <TouchableOpacity
                  onPress={handleRegister}
                  disabled={loading}
                  className={`py-4 rounded-full relative ${
                    loading ? "bg-gray-300" : "bg-purple-800"
                  } mt-0`}
                >
                  <Image
                    source={require("../../../assets/images/individualAssets/bgPurpleWave.png")}
                    className="absolute w-full h-12 rounded-full z-10"
                    resizeMode="cover"
                  />
                  <Text className="text-white text-center font-semibold">
                    {loading ? "Loading..." : "SIGN UP"}
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row justify-center items-center mt-2">
                <Text className="text-gray-400">Already have an Account?</Text>
                <Link
                  className="text-blue-500 ml-2 font-semibold"
                  href="/screens/Authentication/login"
                >
                  Sign In
                </Link>
              </View>
            </View>
            {/* <Link
              href="/screens/Authentication/login"
              className="mb-0 bg-white border-purple-800 border-2 p-2 rounded-xl font-semibold"
            >
              <Text className="text-purple-800 text-center font-semibold">
                Go to Login Screen
              </Text>
            </Link> */}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
