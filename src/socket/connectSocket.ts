import { Socket } from "socket.io";

export const connectSocket: Map<number, Socket> = new Map();

export const addSocket = (key: number, value: Socket,) => {
  connectSocket.set(key, value);
};

export const getSocket = (key: number) => {
    return connectSocket.get(key);
}
