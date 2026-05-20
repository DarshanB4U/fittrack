"use client";

import { useStore } from "@/store/useStore";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, User, Bot, Loader2, Compass, ArrowRight, Activity, Dumbbell, Apple, Heart } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  { text: "Design a 5-day workout plan", icon: Dumbbell, color: "text-blue-500", bgColor: "bg-blue-500/10" },
  { text: "Create a custom high-protein diet plan", icon: Apple, color: "text-green-500", bgColor: "bg-green-500/10" },
  { text: "Best strategies to stay consistent", icon: Heart, color: "text-rose-500", bgColor: "bg-rose-500/10" },
];

export default function AICoachPage() {
  const store = useStore();
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    // Initial welcome message
    const timer = setTimeout(() => {
      const userName = store.name ? store.name.split(" ")[0] : store.username || "Athlete";
      setMessages([
        {
          role: "assistant",
          content: `Hi **${userName}**! 👋 \n\nI'm your **FitTrack AI Coach**. I've synchronized your onboarding profile details and am ready to support your health journey!\n\nI see you're focusing on **${store.goals.length > 0 ? store.goals.map(g => g.replace('_', ' ')).join(', ') : 'general fitness'}**.\n\nHow can I help you today? Feel free to ask about custom workout splits, nutritional advice, or recovery planning!`,
        },
      ]);
    }, 400);

    return () => clearTimeout(timer);
  }, [store.name, store.username, store.goals]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  if (!mounted) return null;

  const handleSubmit = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const chatHistory = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/ai-coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: chatHistory,
          userProfile: {
            name: store.name,
            dob: store.dob,
            gender: store.gender,
            height: store.height,
            weight: store.weight,
            goals: store.goals,
            activityLevel: store.activityLevel,
            bio: store.bio,
          },
        }),
      });

      if (!res.ok) throw new Error("API call failed");

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.text }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Oops! I encountered an error communicating with my system. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Convert markdown-like syntax to HTML strings beautifully
  const renderMessageContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      let element = line;
      // Bold syntax
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = boldRegex.exec(element)) !== null) {
        if (match.index > lastIndex) {
          parts.push(element.substring(lastIndex, match.index));
        }
        parts.push(
          <strong key={match.index} className="font-bold text-primary">
            {match[1]}
          </strong>
        );
        lastIndex = boldRegex.lastIndex;
      }

      if (lastIndex < element.length) {
        parts.push(element.substring(lastIndex));
      }

      const parsedLine = parts.length > 0 ? parts : element;

      if (line.startsWith("### ")) {
        return <h4 key={i} className="text-lg font-bold mt-4 mb-2 text-foreground">{line.replace("### ", "")}</h4>;
      }
      if (line.startsWith("## ")) {
        return <h3 key={i} className="text-xl font-bold mt-5 mb-3 text-foreground">{line.replace("## ", "")}</h3>;
      }
      if (line.startsWith("- ") || line.startsWith("* ")) {
        return (
          <li key={i} className="ml-4 list-disc text-sm sm:text-base mb-1 text-foreground/90">
            {parsedLine === element ? line.substring(2) : parsedLine}
          </li>
        );
      }
      if (/^\d+\.\s/.test(line)) {
        return (
          <li key={i} className="ml-4 list-decimal text-sm sm:text-base mb-1 text-foreground/90">
            {parsedLine === element ? line.replace(/^\d+\.\s/, "") : parsedLine}
          </li>
        );
      }
      
      return (
        <p key={i} className="text-sm sm:text-base leading-relaxed mb-2 text-foreground/90 min-h-[1rem]">
          {parsedLine}
        </p>
      );
    });
  };

  return (
    <main className="p-4 sm:p-8 w-full max-w-7xl mx-auto h-[calc(100vh-2rem)] flex flex-col md:flex-row gap-6">
      {/* Left Column: Chat Container */}
      <div className="flex-1 flex flex-col h-full overflow-hidden glass rounded-3xl border border-border">
        {/* Chat Header */}
        <div className="p-4 sm:p-6 border-b border-border flex items-center justify-between bg-card/40 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary relative">
              <Sparkles className="w-5 h-5" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-card rounded-full" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground flex items-center gap-1.5">
                FitTrack AI Coach
              </h1>
              <p className="text-xs text-muted-foreground">Expert Wellness Consultant</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            Mock/OpenRouter Mode
          </div>
        </div>

        {/* Messages Space */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scrollbar-thin">
          <AnimatePresence initial={false}>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-3 sm:gap-4 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 shadow-sm ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-none"
                      : "bg-card border border-border rounded-tl-none text-foreground"
                  }`}
                >
                  <div className="space-y-1">
                    {message.role === "user" ? (
                      <p className="text-sm sm:text-base whitespace-pre-wrap">{message.content}</p>
                    ) : (
                      renderMessageContent(message.content)
                    )}
                  </div>
                </div>

                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-foreground border border-border shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-3 sm:gap-4 justify-start"
            >
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-card border border-border rounded-2xl rounded-tl-none p-4 flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-primary animate-spin" />
                <span className="text-sm text-muted-foreground">Formulating personalized plan...</span>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        {messages.length <= 1 && (
          <div className="px-6 py-3 border-t border-border bg-card/20 flex flex-wrap gap-2.5">
            <div className="text-xs text-muted-foreground w-full mb-1 flex items-center gap-1">
              <Compass className="w-3.5 h-3.5" /> Quick suggestions:
            </div>
            {SUGGESTIONS.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSubmit(s.text)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card border border-border text-xs text-foreground font-semibold hover:border-primary/50 hover:bg-muted transition-all text-left"
              >
                <div className={`p-1 rounded-md ${s.bgColor} ${s.color}`}>
                  <s.icon className="w-3.5 h-3.5" />
                </div>
                <span>{s.text}</span>
                <ArrowRight className="w-3 h-3 text-muted-foreground shrink-0 ml-auto" />
              </button>
            ))}
          </div>
        )}

        {/* Input Bar */}
        <div className="p-4 sm:p-6 border-t border-border bg-card/40 backdrop-blur-md">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(input);
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your coach anything about workouts, diet, or habits..."
              disabled={isLoading}
              className="flex-1 h-12 px-4 rounded-xl bg-background border border-border focus:outline-none focus:border-primary/50 text-sm text-foreground"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all shrink-0 cursor-pointer"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Right Column: Profile Context HUD */}
      <div className="w-full md:w-80 h-fit md:h-full flex flex-col gap-6">
        <div className="glass rounded-3xl p-6 border border-border flex flex-col gap-6">
          <div>
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" /> Profile Context
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              The AI coach uses this data for tailoring recommendations.
            </p>
          </div>

          <div className="border-t border-border pt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/50 p-3 rounded-xl border border-border/60">
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Weight</p>
                <p className="text-lg font-bold text-foreground mt-0.5">
                  {store.weight} <span className="text-xs font-normal text-muted-foreground">{store.unit === 'metric' ? 'kg' : 'lbs'}</span>
                </p>
              </div>
              <div className="bg-card/50 p-3 rounded-xl border border-border/60">
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Height</p>
                <p className="text-lg font-bold text-foreground mt-0.5">
                  {store.height} <span className="text-xs font-normal text-muted-foreground">{store.unit === 'metric' ? 'cm' : 'in'}</span>
                </p>
              </div>
            </div>

            <div className="bg-card/50 p-3.5 rounded-xl border border-border/60 space-y-1.5">
              <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Gender & Age</p>
              <div className="flex justify-between items-center text-sm font-semibold text-foreground">
                <span>{store.gender || 'Not specified'}</span>
                <span className="text-xs font-normal text-muted-foreground">{store.dob || 'DOB unspecified'}</span>
              </div>
            </div>

            <div className="bg-card/50 p-3.5 rounded-xl border border-border/60 space-y-2">
              <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Fitness Goals</p>
              <div className="flex flex-wrap gap-1.5">
                {store.goals.length > 0 ? (
                  store.goals.map((goal, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold capitalize"
                    >
                      {goal.replace('_', ' ')}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-muted-foreground">General wellness</span>
                )}
              </div>
            </div>

            <div className="bg-card/50 p-3.5 rounded-xl border border-border/60 space-y-1.5">
              <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Activity Level</p>
              <p className="text-sm font-semibold text-foreground capitalize">
                {store.activityLevel ? store.activityLevel.replace('_', ' ') : 'Moderate'}
              </p>
            </div>

            {store.bio && (
              <div className="bg-card/50 p-3.5 rounded-xl border border-border/60 space-y-1">
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Personal Bio</p>
                <p className="text-xs text-muted-foreground italic leading-relaxed">
                  "{store.bio}"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
