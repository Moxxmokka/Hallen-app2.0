import { StyleSheet, Text, View } from "react-native";

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

const styles = StyleSheet.create({
  outlineContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  outline: {
    fontSize: 35,
    fontWeight: 900,
    textAlign: "center",
    color: "white", // Outline color
    position: "absolute",
  },
  title: {
    fontSize: 35,
    fontWeight: 900,
    color: "#0384fc",
    textAlign: "center",
    position: "relative",
  },
});
