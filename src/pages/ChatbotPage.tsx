import { useState } from "react";
import { SplashScreen } from "@/components/chatbot/SplashScreen";
import { ChatbotInterface } from "@/components/chatbot/ChatbotInterface";

export default function ChatbotPage() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      {!showSplash && <ChatbotInterface />}
    </>
  );
}
