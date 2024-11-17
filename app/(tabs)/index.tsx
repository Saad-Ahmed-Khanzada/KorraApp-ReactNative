import React, { useState, useRef, useEffect } from "react";
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
  Animated,
  Easing,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "expo-router";

const AskKorra: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<FlatList | null>(null);
  const [selectedOption, setSelectedOption] = useState("");
  const scrollViewRef = useRef<ScrollView>(null);
  const [messages, setMessages] = useState<
    { type: "user" | "bot"; text: string; options?: string[] }[]
  >([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [swapAmount, setSwapAmount] = useState("");

  const typingAnimation1 = useRef(new Animated.Value(0)).current;
  const typingAnimation2 = useRef(new Animated.Value(0)).current;
  const typingAnimation3 = useRef(new Animated.Value(0)).current;

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

  const handleSendMessage = () => {
    if (inputText.trim().length > 0) {
      const newMessage = { type: "user", text: inputText };
      setMessages([...messages, newMessage]);
      setInputText("");
      setIsTyping(false);

      // Determine bot response
      determineBotResponse(newMessage.text);
    }
  };

  const handleOptionSelect = (option: string) => {
    const newMessage = { type: "user", text: option };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    determineBotResponse(option);
  };

  const determineBotResponse = (inputText: string) => {
    let botMessage = { type: "bot", text: "", options: [] as string[] };
    switch (true) {
      case inputText.toLowerCase() === "i want to bridge some crypto":
        botMessage.text =
          "Sure! Let’s get started. Which network would you like to send from? Here are some options.";
        botMessage.options = ["Ethereum Mainnet", "Polygon", "Avalanche"];
        break;
      case ["ethereum mainnet", "polygon", "avalanche"].includes(
        inputText.toLowerCase()
      ):
        botMessage.text =
          "Great choice! How much would you like to send? The maximum amount in your wallet is 20,000 USDT.";
        break;
      case !isNaN(Number(inputText)):
        setSwapAmount(inputText);
        botMessage.text =
          "Noted. Which coin would you like to bridge from? Here are some options.";
        botMessage.options = ["USDT", "USDC", "DAI"];
        break;
      case ["usdt", "usdc", "dai"].includes(inputText.toLowerCase()):
        botMessage.text =
          "Perfect. Which network would you like to bridge to? Here are some options.";
        botMessage.options = ["BNB Chain", "Polygon", "Avalanche"];
        break;
      case ["bnb chain", "polygon", "avalanche"].includes(
        inputText.toLowerCase()
      ):
        botMessage.text = `Excellent! You are bridging ${swapAmount} USDT from Ethereum Mainnet to BNB Chain. You will receive an estimated ${(
          Number(swapAmount) / 2
        ).toFixed(
          2
        )} USDT on the BNB Chain. Would you like to proceed with this transaction?`;
        botMessage.options = ["Proceed", "Cancel"];
        break;
      case inputText.toLowerCase() === "proceed":
        setIsLoading(true);
        botMessage.text =
          "Please hold on while we complete the bridging process. Kindly avoid exiting the app to ensure the transaction is successfully finalised.";
        setTimeout(() => {
          setIsLoading(false);
          const successMessage = {
            type: "bot",
            text: "The transaction was successful! Click here to view the transaction on Solscan. https://solscan.io/txs ",
          };
          setMessages((prevMessages) => [...prevMessages, successMessage]);
        }, 3000);
        break;
      case inputText.toLowerCase() === "cancel":
        botMessage.text = "The transaction has been cancelled.";
        break;
      default:
        botMessage.text = "I didn't understand that. Can you please repeat?";
    }
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  useEffect(() => {
    const initialMessage = {
      type: "bot",
      text: "Hello, Welcome to Korra, an AI chatBot for executing trades on chain using AI commands.",
    };
    setMessages([initialMessage]);
  }, []);

  useEffect(() => {
    const startTypingAnimation = (animation, delay) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animation, {
            toValue: 1,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(animation, {
            toValue: 0,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
        { delay }
      ).start();
    };

    if (inputText.trim().length > 0) {
      setIsTyping(true);
      const timeoutId = setTimeout(() => {
        setIsTyping(false);
      }, 500);
      startTypingAnimation(typingAnimation1, 0);
      startTypingAnimation(typingAnimation2, 300);
      startTypingAnimation(typingAnimation3, 600);
    } else {
      setIsTyping(false);
    }

    return () => {
      typingAnimation1.stopAnimation();
      typingAnimation2.stopAnimation();
      typingAnimation3.stopAnimation();
    };
  }, [inputText]);

  const bounce1 = typingAnimation1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -3],
  });

  const bounce2 = typingAnimation2.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -5],
  });

  const bounce3 = typingAnimation3.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -6],
  });

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View className="bg-gray-50 flex-1 mt-4">
        <View className="flex flex-row justify-between items-center p-4 mt-5 mb-2">
          <Image
            source={require("../../assets/images/profile/profilePicture.png")}
            className="w-8 h-8 rounded-full"
          />
          <TouchableOpacity
            onPress={showMenu}
            className="bg-cyan-50 p-2 rounded-full border border-gray-200"
          >
            <Icon name="ellipsis-vertical" size={20} />
          </TouchableOpacity>
        </View>

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

        <ScrollView
          ref={scrollViewRef}
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "flex-end",
          }}
        >
          <View className="flex-1 px-0 bg-gray-50 border border-gray-300">
            <Image
              source={require("../../assets/images/individualAssets/bgLightWaveLarge.png")}
              className="absolute w-[100%] h-[80%] z-0 ml-0 opacity-70"
              resizeMode="cover"
            />
            <View className="flex-1 flex-col gap-y-3 px-2 py-2 z-10">
              {messages.map((message, index) => (
                <View key={index}>
                  <View
                    className={`flex flex-row  rounded-2xl ${
                      message.type === "user" ? "justify-end " : "justify-start"
                    }`}
                  >
                    {message.type === "bot" && (
                      <Image
                        source={require("../../assets/icons/askKorra/activeKorraHd.png")}
                        className="w-5 h-5 mr-0 z-10 top-3 left-1"
                      />
                    )}
                    <View
                      className={`flex flex-col max-w-[80%] p-4 my-1 rounded-2xl shadow-sm ${
                        message.type === "user"
                          ? "bg-purple-500 text-white"
                          : "bg-white ml-3"
                      }`}
                    >
                      <Text
                        className={` ${
                          message.type === "user"
                            ? "bg-purple-500 text-white"
                            : "text-gray-800"
                        }`}
                      >
                        {message.text}
                      </Text>
                    </View>
                  </View>
                  {message.options && message.options.length > 0 && (
                    <View className="flex flex-row justify-center items-center mt-1 ">
                      {message.options.map((option, optionIndex) => (
                        <View className="w-[32%]  flex flex-row justify-center items-center bg-purple-800 rounded-full    text-center py-2 m-1">
                          <TouchableOpacity
                            key={optionIndex}
                            className=""
                            onPress={() => handleOptionSelect(option)}
                          >
                            <Text className="text-white text-xs text-center w-[100%] ">
                              {option}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              ))}
              {isTyping && (
                <View className="flex flex-row bg-white rounded-2xl justify-end ml-20">
                  <Animated.View
                    style={{
                      transform: [{ translateY: bounce1 }],
                    }}
                    className="w-2 h-2 bg-gray-500 rounded-full m-2"
                  />
                  <Animated.View
                    style={{
                      transform: [{ translateY: bounce2 }],
                    }}
                    className="w-2 h-2 bg-gray-500 rounded-full m-2"
                  />
                  <Animated.View
                    style={{
                      transform: [{ translateY: bounce3 }],
                    }}
                    className="w-2 h-2 bg-gray-500 rounded-full m-2"
                  />
                </View>
              )}
              {isLoading && (
                <View className="flex flex-row justify-center items-center">
                  <ActivityIndicator size="small" color="#0000ff" />
                </View>
              )}
            </View>
          </View>
        </ScrollView>

        <View className="relative  mx-2 my-2  px-4 py-2 bg-white flex flex-row items-center justify-between border border-gray-300 rounded-3xl">
          <Icon
            name="mic"
            size={24}
            style={{ paddingLeft: 5, position: "absolute", left: 2 }}
          />
          <View
            style={{
              width: 1,
              height: 24,
              backgroundColor: "gray",
              marginHorizontal: 20,
            }}
          />
          <TextInput
            placeholder="Type your message"
            placeholderTextColor="gray"
            value={inputText}
            onChangeText={setInputText}
            onFocus={() => setIsTyping(true)}
            className="flex-1 mr-2 ml-[-7] p-2 text-black rounded-xl bg-gray-50"
          />
          <TouchableOpacity
            onPress={handleSendMessage}
            className="bg-cyan-50 p-3 rounded-full border border-gray-200"
          >
            <Icon name="send" size={20} color="black" />
          </TouchableOpacity>
        </View>
        {/* 
        {isLoading && (
          <View className="absolute top-0 bottom-0 left-0 right-0 bg-gray-200 opacity-90 z-50 flex items-center justify-center">
            <View className="w-3/4 h-2 bg-purple-300 rounded-full overflow-hidden">
              <View
                className="h-full bg-purple-500"
                style={{
                  width: `${100}%`,
                  animation: "loading 3s linear infinite",
                }}
              />
            </View>
          </View>
        )} */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default AskKorra;
