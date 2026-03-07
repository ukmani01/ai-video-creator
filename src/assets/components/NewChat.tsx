import { useState, useRef, useEffect } from "react"
import { FaPaperPlane } from "react-icons/fa"

type Message = {
    text: string
    sender: "user" | "bot"
}

const botReplies = [
    "Hello 👋",
    "How are you?",
    "I am fine!",
    "Nice to meet you.",
    "How can I help?",
    "Tell me more.",
    "That sounds interesting.",
    "I'm VidGenie AI.",
    "What do you want to know?"
]

export default function NewChat() {

    const [input, setInput] = useState("")
    const [messages, setMessages] = useState<Message[]>([])
    const [typing, setTyping] = useState(false)

    const bottomRef = useRef<HTMLDivElement | null>(null)

    const sendMessage = () => {

        if (!input.trim()) return

        const userMessage: Message = {
            text: input,
            sender: "user"
        }

        setMessages(prev => [...prev, userMessage])
        setInput("")
        setTyping(true)

        setTimeout(() => {

            const randomReply =
                botReplies[Math.floor(Math.random() * botReplies.length)]

            const botMessage: Message = {
                text: randomReply,
                sender: "bot"
            }

            setMessages(prev => {
                let updated = [...prev, botMessage]

                if (updated.length > 100) {
                    updated = updated.slice(updated.length - 100)
                }

                return updated
            })

            setTyping(false)

        }, 1000)
    }

    // Enter key send
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") sendMessage()
    }

    // Auto scroll
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages, typing])

    return (
        <div className="bg-black min-h-screen w-full flex flex-col">

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-3">

                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`max-w-lg p-3 rounded-lg
            ${msg.sender === "user"
                                ? "ml-auto bg-blue-600 text-white"
                                : "bg-gray-800 text-white"
                            }`}
                    >
                        {msg.text}
                    </div>
                ))}

                {typing && (
                    <div className="bg-gray-800 text-white p-3 rounded-lg w-fit">
                        Typing...
                    </div>
                )}

                <div ref={bottomRef}></div>

            </div>

            {/* Input */}
            <div className="w-full max-w-2xl mx-auto flex items-center bg-gray-900 rounded-xl border border-gray-700 p-2 mb-6">

                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask VidGenie..."
                    className="flex-1 bg-transparent outline-none text-white px-3 py-2"
                />

                <button
                    onClick={sendMessage}
                    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg"
                >
                    <FaPaperPlane />
                </button>

            </div>

        </div>
    )
}