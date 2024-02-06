'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { StatusOfResponse, getMnemonics } from '@/store/mnemonicsSlice'
import TableActions from './TableActions'
import Button from '@/components/ui/Button'

const MnemoResponse = () => {
  const { data, acronyms } = useSelector(getMnemonics)
  console.log('mnemonicsdata in table: ', acronyms)
  console.log('mnemonicsdata in table: ', data)

  const favSelected = data.find(mnemo => mnemo.status === StatusOfResponse.fav);
  const allEvaulated = data.every(mnemo => mnemo.status);

  const handleSubmit = () => {
    console.log('submit', acronyms, data)
  }

  return (<>
    {
      data.length > 0 && (
        <>
          <table className="w-full md:w-1/2 lg:w-2/3 mt-4 font-bevan text-4xl text-center text-gray-700">
            <tbody>
              {data.map(({ text, id, status }) => {
                return (
                  <tr
                    key={id}
                    className="border-b-2 hover:text-gray-500"
                  >
                    <td className="px-8 py-4">
                      {text}
                      {' '}
                      <TableActions id={id} status={status} />
                    </td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>
          <p className={`w-full md:w-1/2 lg:w-2/3 mt-16 font-bevan text-xl text-center ${allEvaulated && favSelected ? 'text-gray-400' : 'text-green-500'} `}>
            Please evaulate ALL the responses. You can choose only one favorite
          </p>
          <Button
            variant={allEvaulated && favSelected ? 'primary' : 'disabled'}
            onclickhandler={handleSubmit}
          >
            I am ok
          </Button>
        </>
      )
    }
    {acronyms && data.length === 0 && (<div>uhm... sorry no mnemonics created. It is a hard stuff...</div>)}
  </>)
}

export default MnemoResponse