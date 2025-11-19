import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-3xl font-bold mb-4">Welcome to ALX Project 2 🚀</h2>
        <p className="text-gray-600">Your Next.js + TypeScript + Tailwind setup is ready.</p>
      </main>
    </div>
  );
}
