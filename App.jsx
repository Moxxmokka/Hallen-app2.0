import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { checkTokenExpiration, getToken } from "./utils/token";
import jwtDecode from "jwt-decode";

// Alla screens
import LoginScreen from "./screens/loginScreen";
import HomeScreen from "./screens/homeScreen";

// Skapar en stack navigator
const Stack = createStackNavigator();

// Löser fonts
SplashScreen.preventAutoHideAsync();

// Laddar in font och visar appen när fonten är laddad

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Liter-Regular": require("./assets/fonts/Liter-Regular.ttf"),
  });

  // useEffect för att kolla om token finns och om det finns så kollar vi om det är giltigt

  useEffect(() => {
    console.log("Checking token");
    const loadToken = async () => {
      console.log("Getting token");
      try {
        const token = await getToken();
        console.log("Token:", token);

        if (token && checkTokenExpiration(token)) {
          console.log("Token is valid");
          navigationRef.current?.navigate("HomeScreen");
        } else {
          console.log("Token is invalid");
        }
      } catch (error) {
        console.error("Failed to get token:", error);
      }
    };
    loadToken();
  }, []);

  // useEffect för att ladda fonten och visa appen
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <App />;
}

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginSceen" component={LoginScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
  },
});
