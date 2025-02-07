import axios from "axios";
import { getToken, saveToken } from "./token";

const login = async (email, password) => {
  try {
    console.log("Login attempt:", email, password);
    const response = await axios.post("http://192.168.1.12:4000/api/auth/login", {
      email,
      password,
    }, {timeout: 10000});

    console.log("Token: ", response.data.user.token);

    if (response.data.user.token) {
      try {
        saveToken(response.data.user.token);
        console.log("Token saved successfully");
      } catch (keychainError) {
        console.error("Failed to save token: Auth", keychainError);
      }
    }
    return response.data;
  } catch (error) {
    console.error("Login error:", error);

    // Handle network errors or unexpected issues
    if (!error.response) {
      return { message: "Network error. Please try again later." };
    }

    return error.response.data || { message: "An unknown error occurred" };
  }
};

const register = async (name, email, password) => {
    try {
        const response = await axios.post("http://localhost:4000/api/auth/register", {
        name,
        email,
        password,
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export { login, register };