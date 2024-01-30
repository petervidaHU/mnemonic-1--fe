import Input from "@/components/Input";
import MnemoResponse from "@/components/MnemoResponse";
import Image from "next/image";
import React from "react";

export default function Home() {


  return (
    <main className="h-screen p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="flex flex-col items-center bg-white rounded-xl p-3 shadow-lg min-h-full">
        <h1 className="mx-auto block mt-8 font-bevan text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-purple-400 via-pink-500 to-red-500">
          MneMaker
        </h1>
        <Input />
        <MnemoResponse />
      </div>
    </main>

  );
}
