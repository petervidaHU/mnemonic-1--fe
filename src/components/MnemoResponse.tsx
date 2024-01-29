import React from 'react'

const MnemoResponse = () => {
  return (
    <table className="w-full md:w-1/2 mt-16 font-bevan text-4xl text-center text-gray-700">
      <tbody>
        <tr className="border-b-2 hover:text-green-500">
          <td className="px-8 py-4">Item 1</td>
        </tr>
        <tr className="border-b-2 hover:text-green-500">
          <td className="px-8 py-4">Item 3</td>
        </tr>
        <tr className="last:border-b-0 hover:text-green-500">
          <td className="px-8 py-4">Item 5</td>
        </tr>
      </tbody>
    </table>
  )
}

export default MnemoResponse