import Link from "next/link";

export default function Home() {
  const linkStyles = "text-white-600 hover:underline hover:text-green-300"

  return (
    <main className="p-4 bg-black min-h-screen flex justify-center text-xl text-white">
      <div>
        <h1 className="font-bold text-4xl mb-3">CPRG 306: Web Development 2 - Assignments</h1>
        <ul>
        <li><Link className={linkStyles} href="./week-2/">Week 2 Assignment</Link></li>
        <li><Link className={linkStyles} href="./week-3/">Week 3 Assignment</Link></li>
        <li><Link className={linkStyles} href="./week-4/">Week 4 Assignment</Link></li>
        </ul>
      </div>
    </main>
  );
}
