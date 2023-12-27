import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, View } from "react-native";

const Login = () => {
  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="User ID" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8
  },
  buttonContainer: {
    marginTop: 12
  }
});
export default Login;