"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "./sub/Heading";

export default function AIChat() {
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("zh");

  const audioRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [conversation]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput("");
    setLoading(true);

    setConversation((prev) => [...prev, { role: "user", content: userMsg }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg,
          language: language,
        }),
      });

      if (!res.ok) throw new Error("API Error");

      const data = await res.json();

      setConversation((prev) => [...prev, { role: "ai", content: data.text }]);

      if (audioRef.current) {
        audioRef.current.src = data.audio;
        audioRef.current.play();
      }
    } catch (error) {
      console.error(error);
      setConversation((prev) => [
        ...prev,
        { role: "system", content: "Cici 似乎有点累了，请稍后再试..." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="aiChat" className="my-20 px-4 md:px-20 lg:px-40 select-none">
      <Heading text="Cici AI" />
      <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl border border-pink-100 overflow-hidden flex flex-col h-[600px] font-sans">
        <audio ref={audioRef} className="hidden" />

        {/* --- 顶部 Header --- */}
        <div className="bg-white/80 backdrop-blur-md p-6 border-b border-pink-50 z-10">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-gray-800 font-bold text-2xl flex items-center gap-2">
                Cici AI
                <span className="text-red-400 text-lg">✨</span>
              </h2>
              <p className="text-xs text-gray-500 mt-1 font-light tracking-wide">
                Talk to the AI version of me! It clones my voice and style.
              </p>
            </div>

            <div className="bg-gray-50 p-1 rounded-full flex border border-gray-100">
              <button
                onClick={() => setLanguage("zh")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                  language === "zh"
                    ? "bg-red-500 text-white shadow-md shadow-rose-200"
                    : "text-gray-400 hover:text-red-400"
                }`}
              >
                中
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                  language === "en"
                    ? "bg-red-500 text-white shadow-md shadow-rose-200"
                    : "text-gray-400 hover:text-red-400"
                }`}
              >
                En
              </button>
            </div>
          </div>
        </div>

        {/* --- 聊天内容区 --- */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-5 space-y-6 bg-white"
        >
          {conversation.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-gray-300 space-y-4 opacity-60">
              <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-3xl">
                😜
              </div>
              <p className="text-sm font-light">
                {language === "zh" ? "随便聊聊？" : "Ask anything about me!"}
              </p>
            </div>
          )}

          <AnimatePresence>
            {conversation.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] px-5 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-rose-500 text-white rounded-2xl rounded-br-none"
                      : msg.role === "system"
                      ? "bg-gray-100 text-gray-500 rounded-lg text-xs"
                      : "bg-rose-50 text-gray-700 rounded-2xl rounded-bl-none border border-rose-100"
                  }`}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-1.5 ml-2 mt-2"
            >
              <div
                className="w-2 h-2 bg-rose-300 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.15s" }}
              />
              <div
                className="w-2 h-2 bg-rose-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.3s" }}
              />
            </motion.div>
          )}
        </div>

        {/* --- 底部输入区 --- */}
        <div className="p-5 bg-white border-t border-pink-50">
          <div className="flex gap-3 relative items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={
                language === "zh" ? "说点什么..." : "Say something..."
              }
              disabled={loading}
              className="w-full bg-gray-50 text-gray-700 border border-gray-100 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition-all placeholder-gray-400"
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className={`p-3 rounded-full transition-all transform active:scale-95 flex-shrink-0 ${
                loading || !input.trim()
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-200"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
