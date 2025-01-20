import axios from "axios";

const API_URL = import.meta.env.VITE_PERENUAL_API_KEY || "";
const API_KEY = import.meta.env.VITE_PERENUAL_API_KEY || "";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Token ${API_KEY}`,
    "Content-Type": "application/json",
  },
});

export const searchPlants = async (alias: string): Promise<any[]> => {
  // Debugging the constructed URL
  console.log("Request URL:", `${API_URL}?q=${alias}&key=${API_KEY}`);

  try {
    const response = await apiClient.get(`/search`, { params: { alias } });
    console.log("API Response Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in searchPlants:", error);
    throw new Error("Failed to fetch plants from API.");
  }
};
