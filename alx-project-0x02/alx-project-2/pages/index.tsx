import Header from "@/components/layout/Header"

export default function Home() {
  return(
    <div>
    <Header/>
    <main>
      <h2 className="text-3xl font-bold mb-4">This is the Alx next project</h2>
        <p className="text-gray-600">Your Next.js + TypeScript + Tailwind setup is ready.</p>
    </main>
    </div>
  )
}