'use client';

import { useState, ChangeEventHandler, FormEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidV4 } from 'uuid';

import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import useStore from '@/hooks/use-store';
import { Friend } from '@/types';

const AddFriendForm = () => {
  const [data, setData] = useState<Omit<Friend, 'id' | 'balance'>>(() => ({
    name: '',
    imageUrl: `https://i.pravatar.cc/150?u=${uuidV4()}`
  }));

  const router = useRouter();

  const addFriend = useStore(state => state.addFriend);

  //update form data state
  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //submit form to add a friend
  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    addFriend({ name: data.name.trim(), imageUrl: data.imageUrl.trim() });
    router.back();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name='name'
        label='Name'
        value={data.name}
        onChange={handleChange}
        required
      />
      <Input
        name='imageUrl'
        label='Image URL'
        value={data.imageUrl}
        onChange={handleChange}
        required
      />
      <div className='text-center md:text-start mt-6'>
        <Button
          variant='filled'
          className='w-full md:w-5/12 px-8 py-1'
          disabled={!data.name.trim() || !data.imageUrl}
        >
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddFriendForm;
