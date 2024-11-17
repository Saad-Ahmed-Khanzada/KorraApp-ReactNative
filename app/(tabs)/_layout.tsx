import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AskKorra from ".";
import Trade from "./trade";
import AirDrops from "./airdrops";
import Explore from "./explore";
import Portfolio from "./portfolio";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const TabLayout: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 18,
          paddingTop: 5,
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icons/portfolio/activePortfolio.png")
                  : require("@/assets/icons/portfolio/inactivePortfolio.png")
              }
              style={{ width: 18, height: 18 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Trade}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icons/trade/activeTrade.png")
                  : require("@/assets/icons/trade/inactiveTrade.png")
              }
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ask Korra"
        component={AskKorra}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icons/askKorra/activeKorraHd.png")
                  : require("@/assets/icons/askKorra/inacitveKorra.png")
              }
              style={{ width: 28, height: 28 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Airdrops"
        component={AirDrops}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icons/airDrops/activeAirdrops.png")
                  : require("@/assets/icons/airDrops/inactiveAirdrops.png")
              }
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icons/explore/acitveExplore.png")
                  : require("@/assets/icons/explore/inactiveExplore.png")
              }
              style={{ width: 18, height: 18 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabLayout;
