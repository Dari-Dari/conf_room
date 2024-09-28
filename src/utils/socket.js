import { io } from "socket.io-client";

const SOCKET_URL = "https://test.wpdataforum.ru";
const socket = io(SOCKET_URL);

export const joinRoom = (eventId, roomId) => {
  const roomEvent = `${eventId}_${roomId}`;
  socket.emit("room", roomEvent);
};

export const onJoin = (callback) => {
  socket.on("join", callback);
};

export const onCurrentEvent = (callback) => {
  socket.on("current-event", callback);
};

export const onRoomStatus = (callback) => {
  socket.on("room-status", callback);
};

export default socket;
