import axios from "axios";

const API_URL = "https://test.wpdataforum.ru";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: "your-auth-token",
  },
});

export const getRoomData = async (eventId, roomId) => {
  const response = await api.get(`/events/${eventId}/rooms/${roomId}`);
  return response.data;
};

export const startRoom = async (roomId) => {
  await api.post(`/rooms/${roomId}/start`);
};

export const pauseRoom = async (roomId) => {
  await api.post(`/rooms/${roomId}/pause`);
};

export const stopRoom = async (roomId) => {
  await api.post(`/rooms/${roomId}/stop`);
};

export const setActiveScheduleItem = async (scheduleId) => {
  await api.patch(`/schedules/${scheduleId}`, { is_active: true });
};
