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
import { CheckBox } from "react-native-elements";
import { Link, Stack, useNavigation } from "expo-router";
import { auth } from "../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Alert.alert("Success", "Logged in successfully!");
      navigation.navigate("screens/Steps/step1");
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
            <View className="flex p-5 flex-row items-center mb-4">
              <Image
                source={require("../../../assets/images/individualAssets/korraLogoLarge.png")}
                className="w-8 h-8 mr-3"
              />
              <Text className="text-2xl font-bold text-black">KORRA</Text>
            </View>
            <ImageBackground
              source={require("../../../assets/images/individualAssets/bgPurpleWave.png")}
              className="w-full"
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
          <View className="flex items-center justify-between px-8 w-full mt-8">
            <View className="w-full mb-4">
              <Text className="text-3xl font-bold mb-4 text-black">Login</Text>
              <View className="flex flex-col space-y-3 mb-4">
                <TouchableOpacity className="bg-black p-3 rounded-md flex flex-row justify-center items-center">
                  <View className="bg-blue-700 py-1 px-2 rounded-full">
                    <Icon2 name="facebook" size={15} color="#ffff" />
                  </View>
                  <Text className="text-white text-center ml-2">
                    Continue with Facebook
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-black p-3 rounded-md flex flex-row justify-center items-center">
                  <Icon2 name="google" size={20} color="#ffff" />
                  <Text className="text-white text-center ml-2">
                    Continue with Google
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row items-center mb-4">
                <View className="flex-1 border-b border-gray-500 mr-2"></View>
                <Text className="text-gray-500">Or</Text>
                <View className="flex-1 border-b border-gray-500 ml-2"></View>
              </View>
              <View className="mb-4">
                <TextInput
                  className="border-2 border-gray-200 bg-white rounded-lg p-4 text-base "
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
                  className="border-2 border-gray-200 bg-white rounded-lg p-4 text-base"
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
            </View>
            <View className="w-full my-4">
              <TouchableOpacity
                onPress={handleLogin}
                disabled={loading}
                className={`py-4 rounded-full relative  ${
                  loading ? "bg-gray-300" : "bg-purple-800"
                }`}
              >
                <Image
                  source={require("../../../assets/images/individualAssets/bgPurpleWave.png")}
                  className="absolute w-full h-12 rounded-full "
                  resizeMode="cover"
                />
                <Text className="text-white text-center font-semibold">
                  {loading ? "Loading..." : "Login"}
                </Text>
              </TouchableOpacity>
              <View className="flex flex-row justify-center items-center mt-2">
                <Text className="text-gray-400">Create an Account?</Text>
                <Link
                  className="text-blue-500 ml-2 font-semibold"
                  href="/screens/Authentication/register"
                >
                  Sign Up
                </Link>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
