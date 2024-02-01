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

const s = {
  hoverIcon: "hover:scale-125 hover:-rotate-6 transform transition-all duration-200",
  noState: "h-6 w-6 hover:text-gray-600 text-gray-300 ml-4 mr-4",
}

const TableActions: FC<Props> = ({ id, status }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (status: StatusOfResponse) => {
    dispatch(updateMnemonics({ id, status }))
  };

  return (
    <span>
      <button
        className={s.hoverIcon}
        onClick={() => handleStatusChange(StatusOfResponse.liked)}
      >
        {status === StatusOfResponse.liked ? (
          <HandUpSolid className="h-6 w-6 text-pink-400 ml-4 mr-4" />
        ) : (
          <HandThumbUpIcon className={s.noState} />
        )}
      </button>

      <button
        className={s.hoverIcon}
        onClick={() => handleStatusChange(StatusOfResponse.disliked)}
      >
        {status === StatusOfResponse.disliked ? (
          <HandDownSolid className="h-6 w-6 text-gray-700 ml-4 mr-4" />
        ) : (
          <HandThumbDownIcon className={s.noState} />
        )}
      </button>

      <button
        className={s.hoverIcon}
        onClick={() => handleStatusChange(StatusOfResponse.fav)}
      >
        {status === StatusOfResponse.fav ? (
          <HeartSolid className="h-6 w-6 text-purple-600 ml-4 mr-4" />
        ) : (
          <HeartIcon className={s.noState} />
        )}
      </button>
    </span >
  );
}

export default TableActions