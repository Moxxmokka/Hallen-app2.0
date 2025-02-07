import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";



const OutlinedText = ({ text }) => {
  return (
    <View style={styles.outlineContainer}>
      {/* Outline layers */}
      <Text style={[styles.outline, { top: -2, left: -2 }]}>{text}</Text>
      <Text style={[styles.outline, { top: -2, left: 2 }]}>{text}</Text>
      <Text style={[styles.outline, { top: 2, left: -2 }]}>{text}</Text>
      <Text style={[styles.outline, { top: 2, left: 2 }]}>{text}</Text>

      {/* Main text */}
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

function LoginPage() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <OutlinedText text="HUDDINGE" />
        <OutlinedText text="HALLEN" />
      </View>
      <View style={styles.loginContainer}>{/* Login form */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
  },
  loginContainer: {
    flex: 8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: 900,
    color: "#0384fc",
    textAlign: "center",
    position: "relative",
  },
  outline: {
    fontSize: 35,
    fontWeight: 900,
    textAlign: "center",
    color: "white", // Outline color
    position: "absolute",
  },
});

export default LoginPage;
