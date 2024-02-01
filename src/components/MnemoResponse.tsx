'use client'
import { getMnemonics } from '@/store/mnemonicsSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import TableActions from './TableActions'

const MnemoResponse = () => {
  const mnemonicsData = useSelector(getMnemonics)
  console.log('mnemonicsdata in table: ', mnemonicsData)
  return (<>
    {
      mnemonicsData.length > 0 && (
        <table className="w-full md:w-1/2 mt-16 font-bevan text-4xl text-center text-gray-700">
          <tbody>
            {mnemonicsData.map(({text, id, status}) => {
              return (
                <tr
                  key={id}
                  className="border-b-2 hover:text-green-500"
                >
                  <td className="px-8 py-4">
                    {text}
                    {' '}
                    <TableActions id={id} status={status}/>
                    </td>
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