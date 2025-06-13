"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import toast, { ToastIcon } from "react-hot-toast";

const customQs = [
    "How to write a blog post?",
    "What are SEO tips for bloggers?",
    "How to improve writing style?",
    "How to get more readers?",
];

const ChatAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [chats, setChats] = useState([
        { sender: "bot", message: "Hello! How can I assist you today?" },
    ]);
    const [loading, setLoading] = useState(false);
    const abortRef = useRef(false);
    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
    }, [chats]);

    const formatText = (str: string) => {
        return str
            ?.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
            ?.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
            ?.replace(/\n/g, "<br />");
    };

    const sendMessage = async (message: string) => {
        setChats((prev) => [...prev, { sender: "user", message }]);
        setLoading(true);
        abortRef.current = false;

        try {
            const res = await fetch("/api/ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: message }),
            });
            const data = await res.json();
            console.log(res);

            let botReply: string = data.content || "";
            if (botReply.length > 10000) {
                botReply = botReply.slice(0, 10000) + "…";
            }

            let currentText = "";
            for (let i = 0; i < botReply.length; i++) {
                if (abortRef.current) break;
                currentText += botReply[i];
                setChats((prevChats) => {
                    const filtered = prevChats.filter((c) => c.sender !== "typing");
                    return [...filtered, { sender: "typing", message: currentText }];
                });
                await new Promise((res) => setTimeout(res, 15));
            }

            setChats((prevChats) => {
                const filtered = prevChats.filter((c) => c.sender !== "typing");
                return [...filtered, { sender: "bot", message: currentText }];
            });
        } catch (error) {
            if (error) {
                toast.error(error?.message);
            }
            setChats((prev) => [...prev, { sender: "bot", message: "Error fetching response!" }]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = e.currentTarget.chat as HTMLInputElement;
        const message = input.value.trim();
        if (!message) return;
        sendMessage(message);
        input.value = "";
    };



    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                className="fixed  bottom-10 right-12 text-lg z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg px-5 py-3"
            >
                Help 💬
            </Button>

            {isOpen && (
                <div className="bg-white md:rounded-xl shadow-lg border-2 md:border-blue-500 fixed inset-0 md:inset-auto md:bottom-0 md:right-0 md:m-5 w-full h-full md:w-[350px] md:h-[550px] z-[500] transition-all duration-300">
                    <div className="flex justify-between items-center px-5 m-3">
                        <div
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-full bg-blue-500 text-white cursor-pointer"
                        >
                            <X />
                        </div>
                        <h1 className="font-semibold text-2xl text-black">AI Assistant</h1>
                        <div className="w-8" />
                    </div>

                    <div className="bg-gray-100 rounded-t-2xl p-5 flex flex-col justify-between h-11/12 md:h-[485px]">
                        <div className="flex-1 overflow-auto space-y-4 mb-2" ref={chatRef}>
                            {chats.map((chat, i) => (
                                <div key={i} className={`flex ${chat.sender === "user" ? "justify-end" : "items-start"}`}>

                                    {chat.sender === "bot" && (
                                        <Image
                                            className="w-10 h-10 rounded-full"
                                            src="https://img.icons8.com/?size=100&id=Xkr03BWm9C1n&format=png&color=2563EB"
                                            alt="bot"
                                            width={50}
                                            height={50}
                                        />

                                    )}
                                    <p
                                        className={`p-2 px-4 rounded-2xl max-w-[90%] text-sm ${chat.sender === "user"
                                            ? "bg-blue-600 text-white mr-2"
                                            : "bg-white text-gray-800 ml-2"
                                            }`}
                                        dangerouslySetInnerHTML={{ __html: formatText(chat.message) }}
                                    />
                                    {chat.sender === "user" && (
                                        <Image
                                            className="w-10 h-10 rounded-full"
                                            src="https://img.icons8.com/?size=100&id=84020&format=png&color=000000"
                                            alt="user"
                                            width={50}
                                            height={50}
                                        />
                                    )}

                                </div>
                            ))}
                        </div>



                        <div className="flex gap-1 overflow-x-auto text-xs mb-2">
                            {customQs.map((q, i) => (
                                <button
                                    key={i}
                                    onClick={() => sendMessage(q)}
                                    className="bg-white border px-3 py-1 rounded-full text-gray-600 font-medium whitespace-nowrap"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="chat"
                                    placeholder="Type your message..."
                                    className="py-3 pl-5 pr-12 bg-white text-black w-full rounded-full outline-none border border-gray-300 focus:border-blue-500"
                                />
                                <div className="flex items-center ">
                                    {chats.some((c) => c.sender === "typing") ? (
                                        <button
                                            type="button"
                                            onClick={() => (abortRef.current = true)}
                                            className="absolute right-2  text-md top-[14%] bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                                        >
                                            stop
                                        </button>
                                    ) :
                                        (
                                            <button
                                                type="submit"
                                                className="absolute right-2 top-[14%] bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 010-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        )
                                    }

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatAssistant;
