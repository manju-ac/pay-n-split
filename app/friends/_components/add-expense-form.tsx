'use client';

import { useState, MouseEventHandler, ChangeEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { TrashIcon } from 'lucide-react';

import Input from '@/components/ui/input';
import { Friend } from '@/types';
import Button from '@/components/ui/button';
import useStore from '@/hooks/use-store';

type AddExpenseFormProps = {
  friend: Friend;
};

const AddExpenseForm: React.FC<AddExpenseFormProps> = ({ friend }) => {
  const { addExpense, clearExpense } = useStore(state => ({
    addExpense: state.addExpense,
    clearExpense: state.clearExpense
  }));

  const router = useRouter();

  const [expense, setExpense] = useState({
    billValue: '',
    yourExpense: '',
    friendsExpense: '',
    billPayer: 'you'
  });

  //update expense state
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = e => {
    switch (e.target.name as keyof typeof expense) {
      case 'billValue':
        setExpense(expense => ({
          ...expense,
          billValue: e.target.value,
          yourExpense: e.target.value ? `${+e.target.value}` : '',
          friendsExpense: e.target.value ? '0' : ''
        }));
        break;

      case 'yourExpense':
        if (+e.target.value > +expense.billValue) {
          return;
        }

        setExpense(expense => ({
          ...expense,
          yourExpense: e.target.value,
          friendsExpense:
            e.target.value === ''
              ? ''
              : `${(+expense.billValue - +e.target.value).toFixed(2)}`
        }));
        break;

      case 'friendsExpense':
        if (+e.target.value > +expense.billValue) {
          return;
        }

        setExpense(expense => ({
          ...expense,
          yourExpense:
            e.target.value === ''
              ? ''
              : `${(+expense.billValue - +e.target.value).toFixed(2)}`,
          friendsExpense: e.target.value
        }));
        break;

      case 'billPayer':
        setExpense(expense => ({
          ...expense,
          billPayer: e.target.value
        }));
    }
  };

  //add expense to friend, it's not a form submit event to prevent submitting the form on pressing Enter key
  const handleSubmit: MouseEventHandler<HTMLButtonElement> = e => {
    let balance = 0;

    if (expense.billPayer === 'you') {
      balance = +expense.yourExpense - +expense.billValue;
    } else {
      balance = +expense.billValue - +expense.friendsExpense;
    }

    addExpense(friend.id, balance);
    router.back();
  };

  const handleClearExpense = () => {
    clearExpense(friend.id);
    router.back();
  };

  return (
    <form className='mt-8'>
      <Input
        label='Bill value ($)'
        name='billValue'
        type='number'
        value={expense.billValue}
        min={0}
        onChange={handleChange}
        required
      />
      <Input
        label='Your expense ($)'
        name='yourExpense'
        type='number'
        value={expense.yourExpense}
        onChange={handleChange}
        min={0}
        disabled={!+expense.billValue}
        required
      />
      <Input
        label={`${friend.name}'s expense ($)`}
        name='friendsExpense'
        type='number'
        value={expense.friendsExpense}
        onChange={handleChange}
        min={0}
        disabled={!+expense.billValue}
        required
      />
      <div className='flex flex-col md:flex-row md:gap-x-4 my-4'>
        <label htmlFor='bill-payer' className='md:flex-1 font-semibold'>
          Who&apos;s paying the bill:
        </label>
        <select
          id='bill-payer'
          name='billPayer'
          className='inline-block md:flex-1 h-8 p-1 rounded-md border border-zinc-300 focus:outline-none focus:border-zinc-700 bg-transparent disabled:bg-zinc-100'
          value={expense.billPayer}
          onChange={handleChange}
          disabled={!+expense.billValue}
          required
        >
          <option value='you'>You</option>
          <option value={friend.id}>{friend.name}</option>
        </select>
      </div>
      <div className='flex flex-col max-md:gap-y-4 md:flex-row md:justify-between mt-6'>
        <Button
          variant='filled'
          type='button'
          className='w-full md:w-5/12 px-8 py-1'
          onClick={handleSubmit}
          disabled={
            !+expense.billValue ||
            (!expense.yourExpense && !expense.friendsExpense) ||
            +expense.billValue <= 0
          }
        >
          Split Bill
        </Button>
        <Button
          variant='outline'
          type='button'
          className='flex items-center justify-center w-full md:w-5/12 px-8 py-1 text-orange-600 border-orange-600'
          onClick={handleClearExpense}
          disabled={!friend.balance}
        >
          Clear Expense
          <TrashIcon width={18} className='inline-block stroke-1 ml-2' />
        </Button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
