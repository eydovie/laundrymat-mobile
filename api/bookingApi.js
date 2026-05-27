import axios from "axios";
import { idText } from "typescript";

const BASE_URL = "https://laundrymat-api.onrender.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Tyoe": "application/json" },
});

export const submitBooking = async (formData) => {
  const response = await api.post("api/bookings", formData);
  return response.data;
};

export const getBookings = async () => {
  const response = await api.get("/api/bookings");
  return response.data;
};

export const updateBookingStatus = async (idText, status) => {
  const response = await api.patch("/api/bookings/${id}/status", { stsus });
  return response.data;
};
