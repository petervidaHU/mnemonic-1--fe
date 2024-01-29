import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="flex flex-col items-center bg-white rounded-xl p-3 shadow-lg min-h-full">
        <h1 className="mx-auto block mt-8 font-bevan text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-purple-400 via-pink-500 to-red-500">
          MneMaker
        </h1>
        <input
          className="mt-8 border-4 rounded-2xl border-green-500 p-4 font-bevan text-xl w-1/3 text-center tracking-wide"
          type="text"
          placeholder="Enter the stubborn acronym !!"
        />
      </div>
    </main>

  );
}
