'use client';

import { useId, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Input: React.FC<InputProps> = ({ label, ...inputProps }) => {
  const id = useId();

  return (
    <div className='flex flex-col md:flex-row md:gap-x-4 my-4'>
      <label htmlFor={id} className='md:flex-1 font-semibold'>
        {label}:
      </label>
      <input
        id={id}
        {...inputProps}
        className='inline-block md:flex-1 h-8 p-1 rounded-md border border-zinc-300 focus:outline-none focus:border-zinc-700 disabled:bg-zinc-100'
      />
    </div>
  );
};

export default Input;
