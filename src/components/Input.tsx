'use client';
import React, { FC, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { initMnemonics } from '@/store/mnemonicsSlice';
import Button from '@/components/ui/Button';
import { getMnemos } from './use-server/fetch-mnemos';

const sanitizeInput = (i: string) => {
  return i.trim()
}

const Input: FC = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [holdMyHand, setHoldMyHand] = useState('');

  const handleChange = (e: { target: { value: string; }; }) => {
    const sanitizedInput = sanitizeInput(e.target.value)
    setInput(sanitizedInput)
    if (e.target.value.length > 2 && e.target.value.length < 7) {
      setHoldMyHand('')
    }
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    console.log('input: ', input)
    e.preventDefault();
    if (input.length < 3) {
      setHoldMyHand('Come on... you could learn a 2 letter acronym, try it harder....')
      return;
    }
    if (input.length > 7) {
      setHoldMyHand('Whatta... An acronym more than 7 char long? I give up, and you should do the same! Run!!!')
      return;
    }
    try {
      setIsLoading(true);
      setHoldMyHand('');
      const newMnemos = await getMnemos(input);
      dispatch(initMnemonics({ data: newMnemos.data, acronyms: newMnemos.acronyms }));
    } catch (e) {
      setError(e);
      console.error('error: ', e);
    } finally {
      setIsLoading(false);
      setError(null)
    }
  };

  return (
    <>
      <input
        className="mt-8 border-4 rounded-2xl border-green-500 p-4 font-bevan text-xl w-full md:w-1/3 text-center tracking-wide"
        type="text"
        placeholder="Enter the stubborn acronym !!"
        value={input}
        onChange={handleChange}
      />
      <Button
        onclickhandler={handleSubmit}>
        give me some ideas
      </Button>
      {isLoading && (<div>Loading...</div>)}
      {error && (<div>there is an error: {JSON.stringify(error)}</div>)}
      <div>{holdMyHand}</div>
    </>
  )
}

export default Input
