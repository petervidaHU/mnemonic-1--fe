'use client'
import { getMnemonics } from '@/store/mnemonicsSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import TableActions from './TableActions'

const MnemoResponse = () => {
  const { data, acronym } = useSelector(getMnemonics)
  console.log('mnemonicsdata in table: ', data)
  return (<>
    {
      data.length > 0 && (
        <table className="w-full md:w-1/2 lg:w-2/3 mt-16 font-bevan text-4xl text-center text-gray-700">
          <tbody>
            {data.map(({text, id, status}) => {
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
    {acronym && data.length === 0 && (<div>uhm... sorry no mnemonics created. It is a hard stuff...</div>)}
  </>)
}

export default MnemoResponse