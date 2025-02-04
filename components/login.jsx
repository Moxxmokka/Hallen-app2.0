import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";

const OutlinedText = ({ text }) => {
  return (
    <View style={styles.textContainer}>
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

function Login() {
  return (
    <View style={styles.textContainer}>
      <OutlinedText text="HUDDINGE" />
      <OutlinedText text="HALLEN" />
      <View style={styles.box}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    width: 50,
    height: 50,
    backroundColor: "black",
  },
  textContainer: {
    display: "block",
    position: "relative",
    backgroundColor: "black",
    alignItems: "center",
  },
  title: {
    flex: 0,
    alignItems: "center",
    justifyContent: "start",
    fontSize: 35,
    fontWeight: 900,
    color: "#0384fc",
    border: "2px solid black",
  },
  title2: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "red",
    justifyContent: "start",
    padding: 0,
    fontSize: 35,
    fontWeight: 800,
    color: "#0384fc",
    textAlign: "center",
  },
  outline: {
    fontSize: 35,
    fontWeight: 900,
    textAlign: "center",
    color: "white", // Outline color
    position: "absolute",
  },
});

export default Login;