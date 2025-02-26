import { View, Text } from "react-native";
import React from "react";

import "../global.css";
import { nowPlayingActions } from "@/core/actions/movies/now-playing-actions";

const RootLayout = () => {
  nowPlayingActions();
  return (
    <View className="bg-blue-500 h-screen">
      <Text className="text-2xl bg-red-500">RootLayout</Text>
    </View>
  );
};

export default RootLayout;
