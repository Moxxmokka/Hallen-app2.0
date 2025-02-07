import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import { TextInput, Button } from "react-native";
import { login } from "../utils/auth";
import { getToken } from "../utils/token";

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

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginScreen = ({ navigation }) => {


  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await login(values.email, values.password); // ✅ Await the async function

      console.log("Login response: JSX", response);

      if (response.user.token) {
        console.log("Navigating to", response);
        navigation.navigate("HomeScreen"); // ✅ Navigate only if login is successful
      } else {
        setErrors({ general: response.message || "Login failed" }); // ✅ Show error message
      }
    } catch (error) {
      setErrors({ general: "An error occurred" });
      console.log("An error occurred:", error);
    } finally {
      console.log("Login complete");
      setSubmitting(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <OutlinedText text="HUDDINGE" />
        <OutlinedText text="HALLEN" />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.login}>Login</Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isSubmitting,
          }) => (
            <View>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Email"
              />
              {errors.email && <Text style={styles.error}>{errors.email}</Text>}
              <TextInput
                style={styles.input}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="Password"
                secureTextEntry
              />
              {errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
              <Button
                title={isSubmitting ? "Logging in..." : "Login"}
                onPress={handleSubmit}
                disabled={isSubmitting}
              />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

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
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 20,
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
    fontFamily: "Liter-Regular",
  },
  outline: {
    fontSize: 35,
    fontWeight: 900,
    textAlign: "center",
    color: "white", // Outline color
    position: "absolute",
    fontFamily: "Liter-Regular",
  },
  login: {
    fontSize: 40,
    margin: 20,
    fontWeight: 900,
    color: "#0384fc",
    textAlign: "center",
    position: "relative",
    fontFamily: "Liter-Regular",
  },
});

export default LoginScreen;
