import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  Modal,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "expo-router";

const AskKorra: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<FlatList | null>(null);
  const [selectedOption, setSelectedOption] = useState("");

  const showMenu = () => {
    setMenuVisible(true);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };

  const navigation = useNavigation();

  const handleMenuSelect = (item: string) => {
    setSelectedOption(item);
    hideMenu();
    if (item === "Profile") {
      navigation.navigate("screens/Profile/profile");
    }
  };

  const options = ["Profile", "Option 2", "Option 3"];

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View className="bg-gray-50 flex-1 mt-4">
        {/* This is Head Section */}
        <View className="flex flex-row justify-between items-center p-4 mt-5 mb-2">
          <Image
            source={require("../../../assets/images/profile/profilePicture.png")}
            className="w-8 h-8 rounded-full"
          />
          <TouchableOpacity
            onPress={showMenu}
            className="bg-cyan-50 p-2 rounded-full border border-gray-200"
          >
            <Icon name="ellipsis-vertical" size={20} />
          </TouchableOpacity>
        </View>

        {/* Menu */}
        <Modal visible={menuVisible} transparent={true} animationType="none">
          <TouchableOpacity
            className="flex-1 justify-start items-end pt-12 px-4"
            onPress={hideMenu}
          >
            <View className="bg-gray-100 border border-gray-400 px-4 h-36 rounded-md">
              <FlatList
                ref={menuRef}
                data={options}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleMenuSelect(item)}>
                    <Text className="p-3 mt-1 text-center font-semibold rounded-xl text-gray-900 bg-white">
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
              />
            </View>
          </TouchableOpacity>
        </Modal>

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* Chat Section */}
          <View className="flex-1 px-0">
            <Image
              source={require("../../../assets/icons/askKorra/activeKorraHd.png")}
              className="w-6 h-6 mr-4 absolute z-10 top-5 left-0.5"
            />
            <View className="flex-1 flex-col gap-y-2 bg-gray-50 border border-gray-300 py-2 px-3">
              <Text className="font-bold text-xl bg-white rounded-2xl px-4 py-4 z-20 mx-4">
                Hello Warren! 👋
              </Text>
              <Text className="text-base bg-white rounded-2xl px-4 py-4 mx-4 z-20">
                How can I help you today?
              </Text>
              <View className="bg-white rounded-2xl px-4 py-4 mx-4 z-20">
                <Text className="font-semibold text-base mb-3">Perhaps</Text>
                <View className="flex flex-col gap-y-3">
                  <Text className="text-center text-lg border border-gray-300 rounded-3xl py-2">
                    Daily token recommendation
                  </Text>
                  <Text className="text-center text-lg border border-gray-300 rounded-3xl py-2">
                    Latest news updates
                  </Text>
                  <Text className="text-center text-lg border border-gray-300 rounded-3xl py-2">
                    Analyse my portfolio
                  </Text>
                </View>
              </View>
              <Image
                source={require("../../../assets/images/individualAssets/bgLightWaveLarge.png")}
                className="absolute w-[105%] h-[90%] z-10 ml-0 opacity-70"
                resizeMode="cover"
              />
            </View>
          </View>

          {/* Recommendation Section */}
          <View className="mx-3 pl-2 flex flex-row gap-x-1 bg-white">
            <Text className="bg-white p-2 my-2 rounded-full border border-gray-200 text-gray-500">
              Level of risk
            </Text>
            <Text className="bg-white p-2 my-2 rounded-full border border-gray-200 text-gray-500">
              Level
            </Text>
            <Text className="bg-white p-2 my-2 rounded-full border border-gray-200 text-gray-500">
              VV risk
            </Text>
            <Text className="bg-white p-2 my-2 rounded-full border border-gray-200 text-gray-500">
              of risk
            </Text>
            <Text className="bg-white p-2 my-2 rounded-full border border-gray-200 text-gray-500">
              of risk
            </Text>
          </View>
        </ScrollView>

        {/* Input Section */}
        <View className="flex flex-row items-center relative bg-blue-50 border-2 border-gray-200 rounded-2xl p-4 mx-2 my-2">
          <Icon
            name="mic"
            size={24}
            style={{ marginLeft: 3, position: "absolute", left: 10 }}
          />
          <TextInput
            placeholder="Type here..."
            className="flex-1 ml-7 text-base"
          />
          <TouchableOpacity className="absolute right-4">
            <Icon name="send" size={24} color="purple" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AskKorra;
