import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const token = AsyncStorage.getItem("userToken");

const api = axios.create({
  baseURL: "http://54.254.164.127/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer" + token,
  },
});

export const fetchPosts = async () => {
  try {
    const response = await api.get("/users");
    return response.data.data;
  } catch (error) {
    throw new Error("Failed to fetch: " + error.message);
  }
};

export const createPost = async (postData) => {
  try {
    const response = await api.post("/users", postData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create post: " + error.message);
  }
};

export const loginFunc = async (email, password) => {
  try {
    // console.log(data);
    const response = await api.post("/auth/login", { email, password });
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Login failed");
  }
};

export const register = async (email, password, full_name, phone_number) => {
  try {
    const response = await api.post("/auth/register", {
      email,
      password,
      full_name,
      phone_number,
    });
    // console.log(response);
    return response.data;
  } catch (error) {
    // console.log(error);
    throw new Error(error.response?.data?.error || "Registration failed");
  }
};

export default api;
