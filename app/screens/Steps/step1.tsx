import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  FlatList,
  Modal,
} from "react-native";
import { Link, useNavigation, Stack } from "expo-router";
import RNPickerSelect from "react-native-picker-select";
import Icon from "react-native-vector-icons/Ionicons";
import { color } from "react-native-elements/dist/helpers";

export default function Step1_1() {
  const [username, setUsername] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [country, setCountry] = useState("");
  const [showAgeOptions, setShowAgeOptions] = useState(false);
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleAgeOptions = () => {
    setShowAgeOptions(!showAgeOptions);
  };

  const handleAgeSelect = (value: any) => {
    setAgeRange(value);
    setShowAgeOptions(false);
  };

  const handleCountrySelect = (value: any) => {
    setCountry(value);
    setCountryModalVisible(false);
  };
  const countries = [
    { label: "USA", value: "USA" },
    { label: "Canada", value: "Canada" },
    { label: "UK", value: "UK" },
    { label: "Australia", value: "Australia" },
  ];

  return (
    <View className="flex-1 bg-white px-5 pt-10">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" />
      {/* First Section */}
      <View className="flex-row justify-end mb-5">
        {/* <Link
          href="/screens/Steps/step2"
          className="text-blue-500 font-semibold text-base border-2 border-blue-500 rounded-full px-3 "
        >
          SKIP
        </Link> */}
        <Link
          href="/screens/Steps/step2"
          className="text-blue-500 font-semibold text-base  "
        >
          SKIP
        </Link>
      </View>

      {/* Second Section */}
      <ScrollView className="flex-1">
        <View className="flex-row items-center mb-8">
          <Image
            source={require("../../../assets/icons/askKorra/activeKorraHd.png")}
            className="w-8 h-8 mr-4"
          />
          <Text className="text-2xl w-40 font-bold text-black">
            Tell us more about you
          </Text>
        </View>

        <View className="border-2 border-gray-300 bg-blue-50   rounded-lg px-4 py-3  mb-4">
          <TextInput
            className="text-base "
            placeholder="Add username"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor={"#AEAEAE"}
          />
        </View>

        {/* <View className="mb-4 border-2 border-gray-300 bg-blue-50    rounded-lg  text-base   ">
          <RNPickerSelect
            onValueChange={(value) => setAgeRange(value)}
            items={[
              { label: "18-25", value: "18-25" },
              { label: "26-35", value: "26-35" },
              { label: "36-45", value: "36-45" },
              { label: "46+", value: "46+" },
            ]}
            placeholder={{
              label: "Age range",
              value: null,
            }}
          />
        </View> */}
        {/* Custom Age Range Dropdown */}
        <TouchableOpacity
          onPress={toggleAgeOptions}
          className="px-4 mb-4 border-2 border-gray-300 bg-blue-50    rounded-lg  text-base   "
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 12,
            }}
          >
            <Text
              style={{ fontSize: 16, color: ageRange ? "black" : "#AEAEAE" }}
            >
              {ageRange || "Age range"}
            </Text>
            <Icon
              name={showAgeOptions ? "chevron-up" : "chevron-down"}
              size={20}
              color="gray"
            />
          </View>
          {/* Age Range Options */}
          {showAgeOptions && (
            <View className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-xl   z-20 mt-2 ">
              {["14-18", "18-25", "26-32", "32-45"].map((option) => (
                <TouchableOpacity
                  key={option}
                  onPress={() => handleAgeSelect(option)}
                  className="bg-blue-50 m-1 rounded-xl "
                >
                  <Text className="text-base px-4 py-3">{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </TouchableOpacity>

        {/* <View className="mb-4 border-2 border-gray-300 bg-blue-50   rounded-lg  text-base  ">
          <RNPickerSelect
            onValueChange={(value) => setCountry(value)}
            items={[
              { label: "USA", value: "USA" },
              { label: "Canada", value: "Canada" },
              { label: "UK", value: "UK" },
              { label: "Australia", value: "Australia" },
            ]}
            placeholder={{ label: "Select country", value: null }}
          />
        </View> */}

        {/* Custom Country Selection */}
        <TouchableOpacity
          onPress={() => setCountryModalVisible(true)}
          className="mb-4 border-2 border-gray-300 bg-blue-50 px-4  -z-10 rounded-lg  text-base  "
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 12,
            }}
          >
            <Text
              style={{ fontSize: 16, color: country ? "black" : "#AEAEAE" }}
            >
              {country || "Select country"}
            </Text>
            <Icon name="chevron-down" size={20} color="gray" />
          </View>
        </TouchableOpacity>

        {/* Country Selection Modal */}
        <Modal
          visible={countryModalVisible}
          transparent={true}
          animationType="slide"
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <View className=" rounded-t-2xl bg-white">
              <View className="flex flex-row justify-between items-center py-4 px-4">
                <Text className="text-xl  font-bold">Select Country</Text>
                <TouchableOpacity
                  className=""
                  onPress={() => setCountryModalVisible(false)}
                >
                  <Icon name="chevron-down" size={25} color="gray" />
                </TouchableOpacity>
              </View>
              <TextInput
                className="bg-blue-50 text-lg mx-2 py-2 px-4  rounded-full border-2 border-gray-300"
                placeholder="E.g Egypt "
                placeholderTextColor={"#AEAEAE"}
              />
              <View className="px-4 py-2">
                <FlatList
                  data={countries}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => handleCountrySelect(item.value)}
                    >
                      <Text className="py-3 text-lg text-gray-400">
                        {item.label}
                      </Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item.value}
                  ItemSeparatorComponent={() => (
                    <View style={{ height: 0, backgroundColor: "gray" }} />
                  )}
                  contentContainerStyle={{ paddingBottom: 20 }}
                />
              </View>
            </View>
          </View>
        </Modal>

        {/* Third Section */}
        <View className="">
          {/* <View className="bg-blue-100 p-4 rounded-lg mb-4 ">
            <Text className="text-gray-400 font-semibold">
              <Text className="font-bold text-black">Note: </Text> The more
              information you are willing to share the better we can work
              together
            </Text>
          </View> */}

          <View className="flex-row items-center justify-between mt-96">
            <View className="flex flex-col">
              <Text className="text-gray-800 font-bold">Step 1/3</Text>
              <View className="flex-row items-center mt-2">
                <View className="w-5 h-1 rounded-full bg-purple-800 mr-1 "></View>
                <View className="w-3 h-1 rounded-full bg-gray-300 mr-1"></View>
                <View className="w-3 h-1 rounded-full bg-gray-300"></View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("screens/Steps/step2")}
              className="flex-row items-center bg-purple-800 p-3 rounded-full"
            >
              <Image
                source={require("../../../assets/images/individualAssets/bgDarkWaveLarge.png")}
                className="absolute w-28 h-10 rounded-full z-10 ml-1 opacity-70"
                resizeMode="cover"
              />
              <View className="flex flex-row z-20">
                <Text className="text-white font-semibold px-4 mr-2 ">
                  NEXT
                </Text>
                <Icon name="arrow-forward" size={20} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
