import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  timeout: 15000, // 15 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendContactMessage = async (formData) => {
  try {
    const response = await api.post("/contact", formData);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);

    if (error.code === "ECONNABORTED") {
      throw new Error("Request timed out. Please try again.");
    }

    if (error.response) {
      throw error;
    }

    if (error.request) {
      throw new Error(
        "Unable to connect to the server. Please try again later."
      );
    }

    throw new Error(error.message || "Something went wrong.");
  }
};