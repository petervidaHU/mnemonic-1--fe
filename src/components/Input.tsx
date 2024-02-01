'use client';
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLazyCreateMnemoQuery } from '@/store/apiSlice';
import { initMnemonics } from '@/store/mnemonicsSlice';

const sanitizeInput = (i: string) => {
  return i.trim()
}

const Input = () => {
  const dispatch = useDispatch()
  const [fetchMnemo, { data, error, isLoading }] = useLazyCreateMnemoQuery();
  const [input, setInput] = useState("");
  const [holdMyHand, setHoldMyHand] = useState('');

  useEffect(() => {
    if (data) {
      const dataWithStatus = data.map((d: any) => ({...d, status: null}))
      dispatch(initMnemonics(dataWithStatus));
    }
  }, [dispatch, data])

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const sanitizedInput = sanitizeInput(input)

    if (sanitizedInput.length < 3) {
      setHoldMyHand('Come on... you could learn a 2 letter acronym, try it harder....')
      return;
    }
    if (sanitizedInput.length > 7) {
      setHoldMyHand('Whatta... An acronym more than 7 char long? I give up, and you should do the same! Run!!!')
      return;
    }

    setHoldMyHand('')
    fetchMnemo(sanitizedInput);
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
