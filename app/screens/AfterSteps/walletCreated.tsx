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
  Modal,
} from "react-native";
import { Link, Stack, useNavigation } from "expo-router";
import { styled } from "nativewind";

import Icon from "react-native-vector-icons/Ionicons";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function Step2() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View className="flex flex-col justify-between h-screen bg-gray-50 px-5 pt-10">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" />
      {/* First Section */}
      <View>
        <View className="flex-row justify-end mb-3">
          <Link
            href="(tabs)"
            className="text-blue-500 font-semibold text-base  "
          >
            SKIP
          </Link>
        </View>

        <View className="flex-row items-center ">
          <Image
            source={require("../../../assets/images/individualAssets/korraLogoLarge.png")}
            className="w-12 h-12 mr-4"
          />
          <Text className="text-xl font-bold text-black w-[90%]">
            Great! Your wallet has been successfully created.
          </Text>
        </View>
      </View>

      {/* Second Section */}
      <View className="bg-blue-100 border-gray-200 border-2 rounded-2xl ">
        <View className="flex flex-row justify-center items-center bg-blue-50 rounded-2xl p-2 m-0.5">
          <Image
            source={require("../../../assets/images/individualAssets/korraWalletLogo.png")}
            className="w-16 h-16 mr-4"
          />
          <View className="flex flex-col ">
            <Text className="text-left my-2 font-bold capitalize ">
              my korra wallet
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("(tabs)")}
              className="flex-row items-center justify-center bg-purple-800 px-4 py-3 rounded-lg w-52"
            >
              <Image
                className="mb-0 w-4"
                source={require("../../../assets/images/individualAssets/createWalletIcon.png")}
              />
              <Text className="text-white font-semibold px-2 uppercase mr-2 text-center">
                fill wallet
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("(tabs)")}
            className="flex-row items-center justify-center bg-white border-2 border-gray-200 mt-3 p-5 rounded-2xl w-full"
          >
            <Icon name={"add-outline"} color={"black"} size={24} />
            <Text className="text-black font-semibold px-4 uppercase mr-2 text-center">
              connect more wallets
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View className="flex flex-col justify-center items-center mt-5 ">
          <TouchableOpacity
            onPress={() => navigation.navigate("(tabs)")}
            className="flex-row items-center justify-center bg-purple-800 p-5 rounded-full w-full"
          >
            <Image
              source={require("../../../assets/images/individualAssets/bgDarkWaveLarge.png")}
              className="absolute w-80 opacity-40 h-12 rounded-full z-10"
              resizeMode="cover"
            />
            <Text className="text-white font-semibold px-4 uppercase mr-2 text-center">
              let's build my portfolio
            </Text>
          </TouchableOpacity>
        </View>

        <StyledView className="bg-blue-50 p-4 rounded-lg mt-6">
          <StyledText className="text-gray-400 font-semibold">
            <StyledText className="font-bold text-black">
              What is a crypto wallet?{" "}
            </StyledText>
            A crypto wallet is a tool that stores your cryptocurrencies a...
            <StyledTouchableOpacity onPress={toggleModal}>
              <Icon name="arrow-down" size={15} color="gray" />
            </StyledTouchableOpacity>
          </StyledText>

          <Modal
            visible={modalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={toggleModal}
          >
            <StyledView className="flex-1 justify-end items-center  ">
              <StyledView className="bg-white p-6 rounded-lg w-full mx-4 max-h-2/4">
                <ScrollView>
                  <StyledText className="text-gray-400 font-semibold">
                    <StyledText className="font-bold text-black">
                      What is a crypto wallet?{" "}
                    </StyledText>
                    A crypto wallet is a digital tool that stores your
                    cryptocurrencies and lets you send and receive them. It has
                    a public key (like an account number) to receive money and a
                    private key (like a password) to access and manage your
                    funds. Types include software wallets (apps), hardware
                    wallets (devices), and paper wallets (printouts).
                    Essentially, it’s a secure digital version of a regular
                    wallet for managing digital money.
                  </StyledText>
                  <StyledTouchableOpacity
                    onPress={toggleModal}
                    className="mt-5 flex justify-center items-center"
                  >
                    <Icon name="arrow-down" size={20} color="black" />
                  </StyledTouchableOpacity>
                </ScrollView>
              </StyledView>
            </StyledView>
          </Modal>
        </StyledView>
      </View>
    </View>
  );
}
