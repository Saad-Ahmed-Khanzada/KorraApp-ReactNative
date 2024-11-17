// import React, { useState, useRef, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   StatusBar,
//   Modal,
//   FlatList,
//   TextInput,
//   KeyboardAvoidingView,
//   Animated,
//   Easing,
//   ActivityIndicator,
// } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
// import { useNavigation } from "expo-router";

// const AskKorra: React.FC = () => {
//   const [menuVisible, setMenuVisible] = useState(false);
//   const menuRef = useRef<FlatList | null>(null);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [messages, setMessages] = useState<
//     { type: "user" | "bot"; text: string }[]
//   >([]);
//   const [inputText, setInputText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [swapAmount, setSwapAmount] = useState("");

//   const typingAnimation1 = useRef(new Animated.Value(0)).current;
//   const typingAnimation2 = useRef(new Animated.Value(0)).current;
//   const typingAnimation3 = useRef(new Animated.Value(0)).current;

//   const showMenu = () => {
//     setMenuVisible(true);
//   };

//   const hideMenu = () => {
//     setMenuVisible(false);
//   };

//   const navigation = useNavigation();

//   const handleMenuSelect = (item: string) => {
//     setSelectedOption(item);
//     hideMenu();
//     if (item === "Profile") {
//       navigation.navigate("screens/Profile/profile");
//     }
//   };

//   const options = ["Profile", "Option 2", "Option 3"];

//   const handleSendMessage = () => {
//     if (inputText.trim().length > 0) {
//       const newMessage = { type: "user", text: inputText };
//       setMessages([...messages, newMessage]);
//       setInputText("");
//       setIsTyping(false);

//       // Determine bot response
//       let botMessage = { type: "bot", text: "" };
//       if (newMessage.text.toLowerCase() === "/bridge") {
//         botMessage.text = "How many SOL do you want to swap to Bitcoin?";
//         setMessages((prevMessages) => [...prevMessages, botMessage]);
//       } else if (!isNaN(Number(newMessage.text))) {
//         const solAmount = Number(newMessage.text);
//         setIsLoading(true);
//         botMessage.text = `Swapping ${solAmount} SOL to Bitcoin...`;
//         setMessages((prevMessages) => [...prevMessages, botMessage]);

//         setTimeout(() => {
//           setIsLoading(false);
//           const btcAmount = (solAmount * 0.01).toFixed(4); // Example conversion rate
//           const swapResultMessage = {
//             type: "bot",
//             text: `Successfully swapped ${solAmount} SOL to ${btcAmount} BTC.`,
//           };
//           setMessages((prevMessages) => [...prevMessages, swapResultMessage]);
//         }, 3000);
//       } else {
//         botMessage.text = "Please enter a valid number of SOL.";
//         setMessages((prevMessages) => [...prevMessages, botMessage]);
//       }
//     }
//   };

//   // Initial bot message
//   useEffect(() => {
//     const initialMessage = {
//       type: "bot",
//       text: "Hello User,\nTo bridge from SOL to Bitcoin, type /bridge.",
//     };
//     setMessages([initialMessage]);
//   }, []);

//   useEffect(() => {
//     const startTypingAnimation = (animation, delay) => {
//       Animated.loop(
//         Animated.sequence([
//           Animated.timing(animation, {
//             toValue: 1,
//             duration: 300,
//             easing: Easing.linear,
//             useNativeDriver: true,
//           }),
//           Animated.timing(animation, {
//             toValue: 0,
//             duration: 300,
//             easing: Easing.linear,
//             useNativeDriver: true,
//           }),
//         ]),
//         { delay }
//       ).start();
//     };

//     if (inputText.trim().length > 0) {
//       setIsTyping(true);
//       const timeoutId = setTimeout(() => {
//         setIsTyping(false);
//       }, 500);
//       startTypingAnimation(typingAnimation1, 0);
//       startTypingAnimation(typingAnimation2, 300);
//       startTypingAnimation(typingAnimation3, 600);
//     } else {
//       setIsTyping(false);
//     }

//     return () => {
//       typingAnimation1.stopAnimation();
//       typingAnimation2.stopAnimation();
//       typingAnimation3.stopAnimation();
//     };
//   }, [inputText]);

//   const bounce1 = typingAnimation1.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, -10],
//   });

//   const bounce2 = typingAnimation2.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, -10],
//   });

//   const bounce3 = typingAnimation3.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, -10],
//   });

//   return (
//     <KeyboardAvoidingView style={{ flex: 1 }}>
//       <StatusBar barStyle="dark-content" />
//       <View className="bg-gray-50 flex-1 mt-4">
//         <View className="flex flex-row justify-between items-center p-4 mt-5 mb-2">
//           <Image
//             source={require("../../assets/images/profile/profilePicture.png")}
//             className="w-8 h-8 rounded-full"
//           />
//           <TouchableOpacity
//             onPress={showMenu}
//             className="bg-cyan-50 p-2 rounded-full border border-gray-200"
//           >
//             <Icon name="ellipsis-vertical" size={20} />
//           </TouchableOpacity>
//         </View>

//         <Modal visible={menuVisible} transparent={true} animationType="none">
//           <TouchableOpacity
//             className="flex-1 justify-start items-end pt-12 px-4"
//             onPress={hideMenu}
//           >
//             <View className="bg-gray-100 border border-gray-400 px-4 h-36 rounded-md">
//               <FlatList
//                 ref={menuRef}
//                 data={options}
//                 renderItem={({ item }) => (
//                   <TouchableOpacity onPress={() => handleMenuSelect(item)}>
//                     <Text className="p-3 mt-1 text-center font-semibold rounded-xl text-gray-900 bg-white">
//                       {item}
//                     </Text>
//                   </TouchableOpacity>
//                 )}
//                 keyExtractor={(item) => item}
//               />
//             </View>
//           </TouchableOpacity>
//         </Modal>

//         <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//           <View className="flex-1 px-0 bg-gray-50 border border-gray-300">
//             <View className="flex-1 flex-col gap-y-3 px-2 py-2 z-10">
//               {messages.map((message, index) => (
//                 <View
//                   key={index}
//                   className={`flex flex-row bg-white rounded-2xl ${
//                     message.type === "user" ? "justify-end" : "justify-start"
//                   }`}
//                 >
//                   {message.type === "bot" && (
//                     <Image
//                       source={require("../../assets/icons/askKorra/activeKorraHd.png")}
//                       className="w-5 h-5 mr-0 z-10 top-3 left-1"
//                     />
//                   )}
//                   <Text
//                     className={`px-4 py-2 m-2 rounded-2xl text-sm font-semibold ${
//                       message.type === "user"
//                         ? "bg-purple-400 text-white text-left "
//                         : "bg-white text-black text-left "
//                     }`}
//                   >
//                     {message.text}
//                   </Text>
//                 </View>
//               ))}
//               {isTyping && (
//                 <View className="flex flex-row bg-white rounded-2xl justify-end">
//                   <Animated.View
//                     style={{
//                       transform: [{ translateY: bounce1 }],
//                     }}
//                     className="w-3 h-3 bg-gray-500 rounded-full m-2"
//                   />
//                   <Animated.View
//                     style={{
//                       transform: [{ translateY: bounce2 }],
//                     }}
//                     className="w-3 h-3 bg-gray-500 rounded-full m-2"
//                   />
//                   <Animated.View
//                     style={{
//                       transform: [{ translateY: bounce3 }],
//                     }}
//                     className="w-3 h-3 bg-gray-500 rounded-full m-2"
//                   />
//                 </View>
//               )}
//             </View>
//             <Image
//               source={require("../../assets/images/individualAssets/bgLightWaveLarge.png")}
//               className="absolute w-[105%] h-[90%] z-0 ml-0 opacity-70"
//               resizeMode="cover"
//             />
//           </View>
//           {/* <View className=" ">
//             <ScrollView
//               className="mx-3 pl-2  bg-white flex flex-row gap-x-2"
//               horizontal
//               showsHorizontalScrollIndicator={false}
//             >
//               <TouchableOpacity>
//                 <Text className="bg-white p-2 my-2 rounded-full border border-gray-200 text-gray-500">
//                   Buy a car
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <Text className="bg-white p-2 my-2 rounded-full border border-gray-200 text-gray-500">
//                   Child education Saving
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <Text className="bg-white p-2 my-2 rounded-full border border-gray-200 text-gray-500">
//                   Traveling
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <Text className="bg-white p-2 my-2 rounded-full border border-gray-200 text-gray-500">
//                   Retirement
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <Text className="bg-white p-2 my-2 rounded-full border border-gray-200 text-gray-500">
//                   Saving pocket
//                 </Text>
//               </TouchableOpacity>
//             </ScrollView>
//           </View> */}
//         </ScrollView>

//         <View className="flex flex-row items-center relative bg-blue-50 border-2 border-gray-200 rounded-2xl p-4 mx-2 my-2">
//           <Icon
//             name="mic"
//             size={24}
//             style={{ paddingLeft: 5, position: "absolute", left: 2 }}
//           />
//           <View
//             style={{
//               width: 1,
//               height: 24,
//               backgroundColor: "gray",
//               marginHorizontal: 20,
//             }}
//           />

//           <TextInput
//             placeholder="Type here..."
//             value={inputText}
//             onChangeText={setInputText}
//             className="flex-1 ml-[-7] text-base  "
//           />
//           <TouchableOpacity
//             onPress={handleSendMessage}
//             className="absolute right-4 bg-blue-50 pl-2"
//           >
//             <Icon name="send" size={24} color="purple" />
//           </TouchableOpacity>
//         </View>
//         {isLoading && (
//           <View className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
//             <ActivityIndicator size="large" color="#5D3FD3" />
//           </View>
//         )}
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default AskKorra;
