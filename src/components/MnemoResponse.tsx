'use client'
import { getMnemonics } from '@/store/mnemonicsSlice'
import React from 'react'
import { useSelector } from 'react-redux'

const MnemoResponse = () => {
  const mnemonicsData = useSelector(getMnemonics)
  const answers = Object.values(mnemonicsData)
  console.log('mnemonicsdata in table: ', answers)
  return (<>
    {
      answers.length > 0 && (
        <table className="w-full md:w-1/2 mt-16 font-bevan text-4xl text-center text-gray-700">
          <tbody>
            {answers.map(answer => {
              const mnemoText = answer.join(' ');
              return (
                <tr
                  key={mnemoText}
                  className="border-b-2 hover:text-green-500"
                >
                  <td className="px-8 py-4">{mnemoText}</td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      )
    }
  </>)
}

export default MnemoResponse