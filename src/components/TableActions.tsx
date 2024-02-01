'use client';
import React, { FC } from 'react'
import { HandThumbUpIcon, HandThumbDownIcon, HeartIcon } from '@heroicons/react/24/outline'
import {
  HandThumbUpIcon as HandUpSolid,
  HandThumbDownIcon as HandDownSolid,
  HeartIcon as HeartSolid,
} from '@heroicons/react/24/solid'
import { StatusOfResponse, updateMnemonics } from '@/store/mnemonicsSlice';
import { useDispatch } from 'react-redux';

interface Props {
  id: string,
  status: StatusOfResponse | null,
}

const TableActions: FC<Props> = ({ id, status }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (status: StatusOfResponse) => {
    dispatch(updateMnemonics({ id, status }))
  };

  const handleFavChange = () => {
    dispatch(updateMnemonics({ id, status }))
  };

  return (
    <span>
      <button
        className="hover:scale-125 hover:-rotate-6 transform transition-all duration-200"
        onClick={() => handleStatusChange(StatusOfResponse.liked)}
      >
        {status === StatusOfResponse.liked ? (
          <HandUpSolid className="h-6 w-6 text-green-600  ml-4 mr-4" />
        ) : (
          <HandThumbUpIcon className="h-6 w-6 text-gray-600 ml-4 mr-4" />
        )}
      </button>

      <button
        className="hover:scale-125 hover:-rotate-6 transform transition-all duration-200"
        onClick={() => handleStatusChange(StatusOfResponse.disliked)}
      >
        {status === StatusOfResponse.disliked ? (
          <HandDownSolid className="h-6 w-6 text-red-600  ml-4 mr-4" />
        ) : (
          <HandThumbDownIcon className="h-6 w-6 text-gray-600 ml-4 mr-4" />
        )}
      </button>

      <button
        className="hover:scale-125 hover:-rotate-6 transform transition-all duration-200"
        onClick={() => handleStatusChange(StatusOfResponse.fav)}
      >
        {status === StatusOfResponse.fav ? (
          <HeartSolid className="h-6 w-6 text-purple-800  ml-4 mr-4" />
        ) : (
          <HeartIcon className="h-6 w-6 text-gray-600 ml-4 mr-4" />
        )}
      </button>
    </span >
  );
}

export default TableActions