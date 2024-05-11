import { create } from "zustand"

export const useConversationState = create((set) => ({
   // Property Conversation for storing conversation data
   selectedConversation: null,
   setSelectedConversation: (conversation) => set({ selectedConversation: conversation }),

   messages: [],
   setMessages: (messages) => set({ messages }),
}))
