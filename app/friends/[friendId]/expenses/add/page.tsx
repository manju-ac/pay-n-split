import React from 'react';

import AddExpense from '@/app/friends/_components/add-expense';

const AddExpensePage = ({
  params: { friendId }
}: {
  params: { friendId: string };
}) => {
  return <AddExpense friendId={friendId} />;
};

export default AddExpensePage;
