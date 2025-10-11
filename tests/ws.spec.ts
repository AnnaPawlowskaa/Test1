import WebSocket from "ws";
import { test, expect } from "@playwright/test";

test("WebSocket testing example", async () => {
  const ws = new WebSocket("wss://ws.ifelse.io");

  const messages: string[] = [];
  ws.on("message", (data) => {
    console.log("Received:", data.toString());
    messages.push(data.toString());
  });

  await new Promise<void>((resolve) => {
    ws.on("open", () => {
      console.log("WebSocket connected");
      resolve();
    });
  });

  ws.send("Hello Playwright WS!");
  await new Promise((resolve) => setTimeout(resolve, 500));
  expect(messages).toContain("Hello Playwright WS!");

  ws.close();
});
