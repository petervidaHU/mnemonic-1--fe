import { ButtonVariants } from '@/types/UITypes';
import React, { FC, ReactNode } from 'react';

interface Props {
  onclickhandler: any,
  children: ReactNode, 
  variant?: ButtonVariants
}

const buttonVariants: Record<ButtonVariants, string> = {
  primary: "bg-green-500 hover:bg-green-700 text-white mt-8 font-bold py-2 px-4 rounded-full",
  disabled: "bg-gray-400 text-white mt-8 font-bold py-2 px-4 rounded-full",
}

const Button: FC<Props> = ({onclickhandler, children, variant = 'primary'}) => {
  return (
    <button
    className={buttonVariants[variant]}
    onClick={!(variant === 'disabled') ? onclickhandler : null}
  >
    {children}
  </button>
  )
}

export default Button