import React from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Link, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

function Profile() {
  return (
    <View className="h-full bg-gray-50">
      <Stack.Screen
        options={{
          title: "My profile",
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "normal" },
          headerTitleAlign: "left",
        }}
      />

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Section1 */}
        <View className="flex flex-row justify-between mb-6">
          <View>
            <Image
              source={require("@/assets/images/profile/profilePicture.png")}
              className="w-24 h-24"
            />
          </View>
          <View className="flex flex-col justify-center gap-y-1 items-start">
            <Text className="text-sm font-bold">Mark wood</Text>
            <Text className="text-gray-600">markwood@example.com</Text>
            <Text className="text-white bg-black underline px-2 py-1 rounded-full">
              Profile edit
            </Text>
          </View>

          <View>
            <Link href="/screens/SettingsScreen/SettingsScreen">
              <Icon name="settings" size={28} color="black" />
            </Link>
          </View>
        </View>

        {/* Section2 */}
        <View className="bg-white border border-gray-200 px-4 py-2 rounded-md ">
          {/* Section2.1 */}

          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-col">
              <Text className="text-lg font-semibold">My Wallet</Text>
              <Text className="text-base text-gray-500">
                Copy wallet address
              </Text>
            </View>
            <View>
              <TouchableOpacity className="bg-violet-800  px-2 py-1 rounded-full">
                <Text className="text-white">Open</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Section2.2 */}
          <View className="bg-blue-50 rounded-xl flex flex-row justify-between items-center px-4 py-2">
            <View className="bg-white p-3 rounded-xl">
              <Image
                source={require("@/assets/icons/askKorra/activeKorraHd.png")}
                className="w-8 h-8"
              />
            </View>
            <Text>19i91283u128398du2</Text>
            <Icon name="copy-outline" size={20}></Icon>
          </View>
        </View>

        {/* Section3 */}
        <View className="bg-white border border-gray-200 px-2 py-2 mt-3 mx-[-10] rounded-md ">
          {/* Section3.1 */}

          <View className="flex flex-row justify-between items-center mb-4">
            <Text className="text-lg font-semibold">Transaction History</Text>
            <View>
              <TouchableOpacity className="bg-violet-800  px-2 py-1 rounded-full">
                <Text className="text-white">Open</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Section3.2 */}
          <View className="flex flex-col gap-y-2">
            <View className="bg-blue-50 rounded-xl  px-2 py-2">
              <View className=" rounded-xl p-1 px-2 flex flex-row justify-between items-center">
                <Text className="font-semibold text-lg">BNB</Text>
                <Text className="font-semibold">12 Jul,2023</Text>
              </View>
              <View className=" rounded-xl p-1 px-2 flex flex-row justify-between items-center">
                <Text className="font-semibold text-blue-600 bg-blue-100 rounded-full border border-blue-400 p-1 text-xs ">
                  Deposit
                </Text>
                <View className="flex flex-row justify-between">
                  <Text className=" text-green-500 mr-1 font-semibold">
                    USDT
                  </Text>
                  <Text className="font-semibold">9,407.87</Text>
                </View>
              </View>
            </View>
            <View className="bg-blue-50 rounded-xl  px-2 py-2">
              <View className=" rounded-xl p-1 px-2 flex flex-row justify-between items-center">
                <Text className="font-semibold text-lg">BNB</Text>
                <Text className="font-semibold">12 Jul,2023</Text>
              </View>
              <View className=" rounded-xl p-1 px-2 flex flex-row justify-between items-center">
                <Text className="font-semibold text-blue-600 bg-blue-100 rounded-full border border-blue-400 p-1 text-xs ">
                  Deposit
                </Text>
                <View className="flex flex-row justify-between">
                  <Text className=" text-green-500 mr-1 font-semibold">
                    USDT
                  </Text>
                  <Text className="font-semibold">9,407.87</Text>
                </View>
              </View>
            </View>
            <View className="bg-blue-50 rounded-xl  px-2 py-2">
              <View className=" rounded-xl p-1 px-2 flex flex-row justify-between items-center">
                <Text className="font-semibold text-lg">BNB</Text>
                <Text className="font-semibold">12 Jul,2023</Text>
              </View>
              <View className=" rounded-xl p-1 px-2 flex flex-row justify-between items-center">
                <Text className="font-semibold text-blue-600 bg-blue-100 rounded-full border border-blue-400 p-1 text-xs ">
                  Deposit
                </Text>
                <View className="flex flex-row justify-between">
                  <Text className=" text-green-500 mr-1 font-semibold">
                    USDT
                  </Text>
                  <Text className="font-semibold">9,407.87</Text>
                </View>
              </View>
            </View>
            <View className="bg-blue-50 rounded-xl  px-2 py-2">
              <View className=" rounded-xl p-1 px-2 flex flex-row justify-between items-center">
                <Text className="font-semibold text-lg">BNB</Text>
                <Text className="font-semibold">12 Jul,2023</Text>
              </View>
              <View className=" rounded-xl p-1 px-2 flex flex-row justify-between items-center">
                <Text className="font-semibold text-blue-600 bg-blue-100 rounded-full border border-blue-400 p-1 text-xs ">
                  Deposit
                </Text>
                <View className="flex flex-row justify-between">
                  <Text className=" text-green-500 mr-1 font-semibold">
                    USDT
                  </Text>
                  <Text className="font-semibold">9,407.87</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Profile;
