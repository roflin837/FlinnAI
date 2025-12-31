"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Send,
  Bot,
  User,
  Sparkles,
  Copy,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const sampleResponses = [
  "Halo! Saya Roflin AI, asisten virtual yang dibuat oleh Roflin Juliadi. Saya siap membantu Anda dengan berbagai pertanyaan! 🎉",
  "Berikut tips belajar efektif: 1) Buat jadwal belajar rutin, 2) Gunakan metode Pomodoro, 3) Catat poin penting, 4) Review materi berkala, 5) Istirahat cukup. AI ini dibuat oleh Roflin Juliadi.",
  "Tentu! Saya bisa membantu Anda membuat gambar, menjawab pertanyaan, menulis konten kreatif, dan banyak lagi. Bagaimana saya bisa membantu Anda hari ini?",
  "Harry Potter, seorang anak yatim piatu, menemukan dirinya sebagai penyihir dan masuk Hogwarts. Di sana ia belajar sihir, menemukan teman, dan menghadapi penyihir gelap Voldemort. AI ini dibuat oleh Roflin Juliadi.",
];

export function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Halo! Saya Roflin AI, asisten virtual yang dibuat oleh Roflin Juliadi. Saya siap membantu Anda dengan chat interaktif, pembuatan gambar, dan berbagai kebutuhan lainnya!",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const randomResponse =
        sampleResponses[
          Math.floor(Math.random() * sampleResponses.length)
        ];
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: randomResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="chat" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Chat Interaktif
          </h2>
          <p className="text-lg text-muted-foreground">
            Berinteraksi dengan AI yang cerdas, sopan, dan ramah dalam bahasa
            Indonesia
          </p>
        </div>

        {/* Chat Interface Demo */}
        <Card className="max-w-4xl mx-auto border-0 shadow-xl">
          <CardHeader className="border-b bg-muted/30">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
              </div>
              <div>
                <CardTitle className="text-base">Roflin AI</CardTitle>
                <p className="text-xs text-muted-foreground">Online • Selalu siaga</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            {/* Messages Area */}
            <ScrollArea
              ref={scrollRef}
              className="h-[400px] p-4 space-y-4"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback
                      className={
                        message.role === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-primary text-primary-foreground"
                      }
                    >
                      {message.role === "user" ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                    </AvatarFallback>
                  </Avatar>

                  <div
                    className={`flex flex-col gap-1 max-w-[75%] ${
                      message.role === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-sm ${
                        message.role === "user"
                          ? "bg-blue-500 text-white rounded-tr-sm"
                          : "bg-muted rounded-tl-sm"
                      }`}
                    >
                      {message.content}
                    </div>
                    {message.role === "assistant" && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                        >
                          <ThumbsUp className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                        >
                          <ThumbsDown className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" />
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce delay-100" />
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce delay-200" />
                  </div>
                </div>
              )}
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t bg-muted/20">
              <div className="flex gap-2">
                <Input
                  placeholder="Ketik pesan Anda..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button onClick={handleSend} disabled={isTyping}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                AI ini dibuat oleh Roflin Juliadi
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
