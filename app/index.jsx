import { View, Text, SafeAreaView } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { images, icons, COLORS, FONT, SIZES, SHADOWS } from "../constants";
import {
  NearbyJobCard,
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

export default function Home() {
  const router = useRouter();

  console.log("hello world");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome/>
          <Popularjobs/>
          <Nearbyjobs/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
