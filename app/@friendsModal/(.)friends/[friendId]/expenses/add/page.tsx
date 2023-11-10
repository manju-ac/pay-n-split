'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import AddExpense from '@/app/friends/_components/add-expense';
import Modal from '@/components/ui/modal';

const AddExpenseModal = ({
  params: { friendId }
}: {
  params: { friendId: string };
}) => {
  const router = useRouter();

  return (
    <Modal
      onClose={() => {
        router.back();
      }}
    >
      <AddExpense friendId={friendId} />
    </Modal>
  );
};

export default AddExpenseModal;
