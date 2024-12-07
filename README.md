# Real-time Chat Application

A basic chat app built with Next.js, Socket.io, TypeScript, Zustand, and Tailwind CSS/shadcn-ui.

## Features

- Real-time messaging using Socket.io
- State management with Zustand
- Different message styles for sender and receiver
- Responsive design with Tailwind CSS
- Clean UI components with shadcn-ui

## Directory Structure

src/
├──app/
|  └── page.tsx
|  └── layout.tsx
├──components/
|  └──ui/
|     └── button.tsx
|     └── input.tsx
|  └── Chat.tsx
├── lib/
│   └── store/
│       └── useStore.ts
|   └── utils.ts
├──server/
|  └── server.ts

## Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/git-ashwinpandey/socket-message.git
cd socket-message
```

2. Install Dependencies:
npm install
# or
yarn install

3. Run the server:
npm run dev
# or
ts-node server.ts

## Dependencies
{
    "@radix-ui/react-slot": "^1.1.0",
    "@shadcn/ui": "^0.0.4",
    "@types/express": "^5.0.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "express": "^4.21.2",
    "lucide-react": "^0.468.0",
    "next": "14.2.20",
    "react": "^18",
    "react-dom": "^18",
    "socket.io": "^4.8.1",
    "socket.io-client": "^4.8.1",
    "tailwind-merge": "^2.5.5",
    "tailwindcss-animate": "^1.0.7",
    "ts-node": "^10.9.2",
    "zustand": "^5.0.2"
  }



Open [http://localhost:3000](http://localhost:3030) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
