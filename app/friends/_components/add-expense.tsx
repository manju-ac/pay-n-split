'use client';

import { notFound } from 'next/navigation';

import AddExpenseForm from './add-expense-form';
import useStore from '@/hooks/use-store';

type AddExpenseProps = {
  friendId: string;
};

const AddExpense: React.FC<AddExpenseProps> = ({ friendId }) => {
  const friends = useStore(state => state.friends);
  const friend = friends.find(friend => friend.id === friendId)!;

  if (!friend) {
    return notFound();
  }

  return (
    <>
      <h2 className='text-xl font-bold'>Add Expense for {friend.name}</h2>
      <AddExpenseForm friend={friend} />
    </>
  );
};

export default AddExpense;
