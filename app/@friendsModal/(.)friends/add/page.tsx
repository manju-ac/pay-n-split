'use client';

import { useRouter } from 'next/navigation';

import AddFriend from '@/app/friends/_components/add-friend';
import Modal from '@/components/ui/modal';

const AddFriendModal = () => {
  const router = useRouter();

  return (
    <Modal
      onClose={() => {
        router.back();
      }}
    >
      <AddFriend />
    </Modal>
  );
};

export default AddFriendModal;
