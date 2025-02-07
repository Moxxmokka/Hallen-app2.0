import axios from "axios";
import * as Keychain from "react-native-keychain";

const API = axios.create({
  baseURL: "http://localhost:4000/api",
});

API.interceptors.request.use(async (req) =>{
    const token = await Keychain.getGenericPassword("token");
    if(token){
        req.headers.Authorization = `Bearer ${token.password}`;
    }
    return req;
});

export default API;
