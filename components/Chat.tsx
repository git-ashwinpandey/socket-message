// components/Chat.tsx
"use client"
import { useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'
import useStore from '../lib/store/useStore'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

let socket: Socket

const Chat = () => {
    const [message, setMessage] = useState('')
    const { messages, addMessage } = useStore()
    const [userId] = useState(`user-${Math.random().toString(36).substr(2, 9)}`)

    useEffect(() => {
        const socketInitializer = async () => {
            socket = io('http://localhost:3030')

            socket.on('receive-message', (message) => {
                addMessage(message)
            })
        }

        socketInitializer()

        return () => {
            if (socket) socket.disconnect()
        }
    }, [])

    const sendMessage = () => {
        if (message.trim()) {
            const newMessage = {
                id: Date.now().toString(),
                text: message,
                sender: userId,
            }
            socket.emit('send-message', newMessage)
            setMessage('')
        }
    }

    return (
        <div className="flex flex-col min-h-screen p-4">
            <div className="flex-1 overflow-y-auto mb-4">
                {messages.map((msg) => (
                    <div>
                        <div
                            key={msg.id}
                            className={`my-2 p-3 rounded-lg max-w-[30%] ${msg.sender === userId
                                ? 'ml-auto bg-green-500 text-white'
                                : 'bg-blue-500 text-white'
                                }`}
                        >
                            {msg.text}
                        </div>
                        <div
                            key={msg.id} 
                            className={`my-2 p-3 max-w-[30%] ${msg.sender === userId
                            ? 'ml-auto'
                            : ''
                            }`}>{msg.sender}
                        </div>
                    </div>

                ))}
            </div>
            <div className="flex gap-2">
                <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message..."
                    className="flex-1"
                />
                <Button onClick={sendMessage}>Send</Button>
            </div>
        </div>
    )
}

export default Chat