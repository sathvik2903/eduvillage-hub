import { useState } from "react";
import { Send, Mic, Camera, Paperclip, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export const ChatbotInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm MRD-RAG, your Multi-Resource Data AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isDark, setIsDark] = useState(true);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I'm processing your request using advanced retrieval augmented generation...",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div
      className={cn(
        "min-h-screen transition-all duration-500 relative overflow-hidden",
        isDark
          ? "bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100"
      )}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-2 h-2 rounded-full animate-float",
              isDark ? "bg-primary/20" : "bg-primary/10"
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient waves */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={cn(
            "absolute -top-1/2 -left-1/2 w-full h-full rounded-full blur-3xl animate-pulse",
            isDark ? "bg-blue-500/5" : "bg-blue-500/10"
          )}
        />
        <div
          className={cn(
            "absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full blur-3xl animate-pulse",
            isDark ? "bg-purple-500/5" : "bg-purple-500/10"
          )}
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-primary/20 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-primary/50">
              <span className="text-white font-bold">MR</span>
            </div>
            <div>
              <h1
                className={cn(
                  "text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent"
                )}
              >
                MRD-RAG
              </h1>
              <p className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                AI Assistant
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="rounded-full hover:scale-110 transition-transform"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-slate-700" />
            )}
          </Button>
        </div>
      </header>

      {/* Chat Container */}
      <div className="container mx-auto px-4 py-6 max-w-4xl relative z-10">
        <div
          className={cn(
            "rounded-3xl shadow-2xl overflow-hidden transition-all duration-500",
            isDark
              ? "bg-slate-900/40 backdrop-blur-xl border border-primary/20"
              : "bg-white/60 backdrop-blur-xl border border-primary/30 shadow-purple-200/50"
          )}
          style={{
            boxShadow: isDark
              ? "0 0 60px rgba(139, 92, 246, 0.15), inset 0 0 30px rgba(139, 92, 246, 0.05)"
              : "0 0 60px rgba(139, 92, 246, 0.2), inset 0 0 30px rgba(139, 92, 246, 0.1)",
          }}
        >
          {/* Messages Area */}
          <ScrollArea className="h-[calc(100vh-300px)] p-6">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex animate-fade-in",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-3 shadow-lg transition-all duration-300 hover:scale-[1.02]",
                      message.role === "user"
                        ? isDark
                          ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                          : "bg-gradient-to-br from-blue-500 to-purple-500 text-white"
                        : isDark
                        ? "bg-slate-800/60 backdrop-blur-xl border border-primary/20 text-slate-100"
                        : "bg-white/80 backdrop-blur-xl border border-primary/30 text-slate-800"
                    )}
                    style={{
                      boxShadow:
                        message.role === "user"
                          ? "0 4px 20px rgba(139, 92, 246, 0.3)"
                          : isDark
                          ? "0 4px 20px rgba(0, 0, 0, 0.2)"
                          : "0 4px 20px rgba(139, 92, 246, 0.15)",
                    }}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div
            className={cn(
              "border-t p-4",
              isDark ? "border-primary/20 bg-slate-900/60" : "border-primary/30 bg-white/40"
            )}
          >
            <div className="flex items-center gap-2">
              {/* Action Buttons */}
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-all hover:bg-primary/10"
                >
                  <Mic className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-all hover:bg-primary/10"
                >
                  <Camera className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-all hover:bg-primary/10"
                >
                  <Paperclip className="h-5 w-5" />
                </Button>
              </div>

              {/* Input Field */}
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask MRD-RAG anything..."
                className={cn(
                  "flex-1 rounded-full border-2 transition-all duration-300 focus:scale-[1.02]",
                  isDark
                    ? "bg-slate-800/60 border-primary/20 focus:border-primary/40"
                    : "bg-white/60 border-primary/30 focus:border-primary/50"
                )}
              />

              {/* Send Button */}
              <Button
                onClick={handleSend}
                className="rounded-full w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-primary/50 hover:scale-110 transition-all"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
