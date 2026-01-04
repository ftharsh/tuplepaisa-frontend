import axios from "axios";
import { getToken } from "./authService.js";

const BASE_URL = "https://tuple-paisa-qg59.onrender.com/api/user";

export const fetchSuggestions = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
      params: { query },
    });
    return response.data.usernames || [];
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};
