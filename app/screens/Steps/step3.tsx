import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ActivityIndicator,
  Modal,
} from "react-native";
import { Link, Stack, useNavigation } from "expo-router";

export default function Step3() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [loadingTimeout, setLoadingTimeout] = useState(null);

  const handleCreateWallet = () => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
      navigation.navigate("screens/AfterSteps/walletCreated");
    }, 2000); // 2 seconds delay
    setLoadingTimeout(timeout);
  };

  const handleCancel = () => {
    if (loadingTimeout) {
      clearTimeout(loadingTimeout);
    }
    setLoading(false);
  };

  return (
    <View className="flex-1 bg-gray-50 px-5 pt-10 relative">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" />
      {/* First Section */}
      <View className="flex-row justify-end mb-3">
        <Link
          href="/screens/AfterSteps/walletCreated"
          className="text-blue-500 font-semibold text-base  "
        >
          SKIP
        </Link>
      </View>

      <View className="flex-row items-center mb-3">
        <Image
          source={require("../../../assets/icons/askKorra/activeKorraHd.png")}
          className="w-8 h-8 mr-4"
        />
        <Text className="text-2xl font-bold text-black w-[90%]">
          Finally, let’s set up your crypto wallet.
        </Text>
      </View>
      {/* <View className="bg-blue-100 p-4 rounded-lg mb-6">
        <Text className="text-blue-800 font-semibold">
          <Text className="font-bold text-black">What to crypto wallet? </Text>{" "}
          Crypto Wallet act like a b..
        </Text>
      </View> */}

      {/* Second Section */}
      <View className="flex justify-center items-center">
        <Image
          className="my-16 "
          source={require("../../../assets/images/individualAssets/Wallet.png")}
          style={{ width: 300, height: 300 }}
        />
      </View>

      <View className="flex flex-col justify-center items-center ">
        <TouchableOpacity
          onPress={handleCreateWallet}
          className="flex-row items-center justify-center bg-purple-800 p-5 rounded-xl w-full"
        >
          <Image
            source={require("../../../assets/images/individualAssets/bgDarkWaveLarge.png")}
            className="absolute w-80 opacity-50 h-14 rounded-full z-10"
            resizeMode="cover"
          />
          <Image
            className="mb-0 w-4 z-20 "
            source={require("../../../assets/images/individualAssets/createWalletIcon.png")}
          />
          <Text className="z-20 text-white font-semibold px-4 uppercase mr-2 text-center">
            create wallet with korra
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("screens/Steps/step3")}
          className="flex-row items-center justify-center bg-white border-2 border-gray-200 mt-2 p-5 rounded-xl w-full"
        >
          <Image
            className="mb-0 w-4 "
            source={require("../../../assets/images/individualAssets/connectWalletIcon.png")}
          />
          <Text className="text-black font-semibold px-4 uppercase mr-2 text-center">
            connect existing wallets
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center justify-center mt-5">
        <View className="flex flex-col">
          <Text className="text-gray-800 font-bold">Step 3/3</Text>
          <View className="flex-row items-center mt-2">
            <View className="w-4 h-1 rounded-full bg-purple-800 mr-1"></View>
            <View className="w-4 h-1 rounded-full bg-purple-800 mr-1"></View>
            <View className="w-4 h-1 rounded-full bg-purple-800 mr-1"></View>
          </View>
        </View>
      </View>

      {loading && (
        <Modal transparent={true} animationType="slide" visible={loading}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "flex-end",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <View className="bg-white rounded-t-3xl px-5 py-10 flex flex-col justify-between w-full">
              {/* Section1 */}
              <View>
                <Text className="text-left text-xl font-bold mb-4">
                  Creating Wallet
                </Text>
              </View>
              {/* Section2 */}
              <View className="flex flex-col justify-center items-center">
                <ActivityIndicator
                  className="w-24 h-24"
                  size={"large"}
                  color="#4B0082"
                />
                <Text className="mt-5 text-lg font-bold text-gray-600">
                  Wallet is being created...
                </Text>
              </View>
              {/* Section3 */}
              <View>
                <TouchableOpacity onPress={handleCancel} className="mt-5">
                  <Text className="text-center text-red-500 font-semibold underline uppercase">
                    cancel, I change my mind
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}
