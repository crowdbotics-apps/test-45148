import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Welcome = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Text style={styles.TPyvqOJb}>{"Welcome"}</Text>
        <Pressable onPress={() => {
        navigation.navigate("Login", {});
      }}>
          <View style={styles.pjdHuIuc}></View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  TPyvqOJb: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  pjdHuIuc: {
    height: 60,
    width: 140,
    backgroundColor: "#b66363",
    borderRadius: 40,
    color: "#777777",
    borderColor: "#88ac72",
    borderWidth: 10
  }
});
export default Welcome;