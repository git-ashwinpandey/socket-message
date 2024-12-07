// store/useStore.ts
import {create} from 'zustand'

interface Message {
  id: string
  text: string
  sender: string
}

interface ChatStore {
  messages: Message[]
  addMessage: (message: Message) => void
}

const useStore = create<ChatStore>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
}))

export default useStore