import Chat from "@/components/Chat";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="text-2xl font-bold text-center my-4">Real-time Chat</h1>
      <Chat />
    </main>
  );
}
