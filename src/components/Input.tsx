'use client';
import React, { FC, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLazyCreateMnemoQuery } from '@/store/apiSlice';
import { initMnemonics } from '@/store/mnemonicsSlice';

const sanitizeInput = (i: string) => {
  return i.trim()
}

const Input: FC = () => {
  const dispatch = useDispatch()
  const [fetchMnemo, { data, error, isLoading }] = useLazyCreateMnemoQuery();
  const [input, setInput] = useState("");
  const [holdMyHand, setHoldMyHand] = useState('');

  useEffect(() => {
    if (data) {
      const dataWithStatus = data.data.map((d: any) => ({ ...d, status: null }))
      dispatch(initMnemonics({data: dataWithStatus, acronyms: data.acronyms}));
    }
  }, [dispatch, data])

  const handleChange = (e: { target: { value: string; }; }) => {
    const sanitizedInput = sanitizeInput(e.target.value)
    setInput(sanitizedInput)
    if (e.target.value.length > 2 && e.target.value.length < 7) {
      setHoldMyHand('')
    }
  }

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
    fetchMnemo(input);
  }

  return (<>
    <input
      className="mt-8 border-4 rounded-2xl border-green-500 p-4 font-bevan text-xl w-full md:w-1/3 text-center tracking-wide"
      type="text"
      placeholder="Enter the stubborn acronym !!"
      value={input}
      onChange={handleChange}
    />
    <button
      className="mt-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={handleSubmit}
    >
      Get some idea
    </button>
    {isLoading && (<div>Loading...</div>)}
    {error && (<div>there is an error: {JSON.stringify(error)}</div>)}
    <div>{holdMyHand}</div>
  </>
  )
}

export default Input
