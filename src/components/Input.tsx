'use client';
import { useCreateMnemoMutation } from '@/store/apiSlice';
import React, { useState } from 'react'

const Input = () => {
  const [fetchMnemo, { data, error, isLoading }] = useCreateMnemoMutation();
  const [input, setInput] = useState("");
  const [holdMyHand, setHoldMyHand] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (input.length < 3) {
      setHoldMyHand('Come on... you could learn a 2 letter acronym, try it harder....')
      return;
    }
    if (input.length > 7) {
      setHoldMyHand('Whatta... An acronym more than 7 char long? I give up, and you should do the same! Run!!!')
      return;
    }

    setHoldMyHand('')
    fetchMnemo([...input.split('')]);
  }

  return (<>
    <input
      className="mt-8 border-4 rounded-2xl border-green-500 p-4 font-bevan text-xl w-full md:w-1/3 text-center tracking-wide"
      type="text"
      placeholder="Enter the stubborn acronym !!"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      className="mt-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={handleSubmit}
    >
      Submit
    </button>
    <div>{holdMyHand}</div>
  </>

  )
}

export default Input
