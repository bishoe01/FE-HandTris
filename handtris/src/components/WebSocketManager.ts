import { getAccessToken } from "@/util/getAccessToken";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

export class WebSocketManager {
  stompClient: any;

  connected: boolean;

  onMessage: (message: any) => void;

  token: string | null;

  constructor() {
    this.connected = false;
    this.onMessage = () => {};
    this.token = null;
  }

  async connect(url: string): Promise<void> {
    this.token = getAccessToken();
    return new Promise((resolve, reject) => {
      const socket = new SockJS(url);
      this.stompClient = Stomp.over(socket);
      this.stompClient.connect(
        { Authorization: `Bearer ${this.token}` },
        (frame: any) => {
          console.log(`Connected: ${frame}`);
          this.connected = true;
          resolve();
        },
        (error: any) => {
          console.error(`Connection error: ${error}`);
          alert(`Failed to connect to WebSocket: ${error}`);
          reject(error);
        },
      );
    });
  }

  subscribe(subscribeUrl: string, onMessage: (message: any) => void) {
    if (this.connected) {
      const headers = {
        Authorization: `Bearer ${this.token}`,
      };
      this.stompClient.subscribe(subscribeUrl, (message: any) => {
        console.log("Message received: ", message);
        onMessage(JSON.parse(message.body));
      }, headers);
    } else {
      console.log("WebSocket connection is not established yet.");
    }
  }

  sendMessageOnGaming(board: any, isEnd: boolean, roomCode: string | null) {
    if (
      this.stompClient &&
      this.stompClient.ws &&
      this.stompClient.ws._transport
    ) {
      const message = { board, isEnd, isAttack:false };
      if (this.connected) {
        this.stompClient.send(
          `/app/${roomCode}/tetris`,
          { Authorization: `Bearer ${this.token}` },
          JSON.stringify(message),
        );
        console.log("Message sent: ", message);
      } else {
        console.log("WebSocket connection is not established yet.");
      }
    } else {
      console.error("stompClient ws에 연결되지 않음.");
    }
  }


  sendMessageOnEntering(gameInfo: any, URL: string) {
    if (this.stompClient && this.connected) {
      const message = {};
      this.stompClient.send(
        URL,
        { Authorization: `Bearer ${this.token}` },
        JSON.stringify(message),
      );
      console.log("Message sent: ", message);
    } else {
      console.log("WebSocket connection is not established yet.");
    }
  }

  sendMessageOnWaiting(
    waitingInfo: { isAllReady: boolean; isStart: boolean },
    URL: string,
  ) {
    if (this.stompClient && this.connected) {
      const message = {
        isReady: waitingInfo.isAllReady,
        isStart: waitingInfo.isStart,
      };
      this.stompClient.send(
        URL,
        { Authorization: `Bearer ${this.token}` },
        JSON.stringify(message),
      );
      console.log("Message sent: ", message);
    } else {
      console.log("WebSocket connection is not established yet.");
    }
  }

  sendMessageForStart(
    waitingInfo: { isAllReady: boolean; isStart: boolean },
    URL: string,
  ) {
    if (this.stompClient && this.connected) {
      const message = {
        isReady: waitingInfo.isAllReady,
        isStart: waitingInfo.isStart,
      };
      this.stompClient.send(
        URL,
        { Authorization: `Bearer ${this.token}` },
        JSON.stringify(message),
      );
      console.log("Message sent: ", message);
    } else {
      console.log("WebSocket connection is not established yet.");
    }
  }
}
