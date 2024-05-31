import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4 bg-black min-h-screen flex justify-center text-xl text-white">
      <div>
        <h1 className="font-bold text-4xl mb-3">CPRG 306: Web Development 2 - Assignments</h1>
        <ul>
          <li>
            <Link href="http://localhost:3000/week-2">Week 2 Assignment</Link>
          </li>
          <li>
            <Link href="http://localhost:3000/week-3">Week 3 Assignment</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

