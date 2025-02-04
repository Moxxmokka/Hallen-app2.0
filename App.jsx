import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import Login from "./components/login";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#d3d3d3",
  },
});
