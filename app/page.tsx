import Link from 'next/link';
import { UserPlusIcon } from 'lucide-react';

import FriendsList from '@/components/friends-list';

export default function Home() {
  return (
    <>
      <div className='text-end mb-4'>
        <Link
          href='/friends/add'
          scroll={false}
          className='inline-block hover:opacity-70 transition-opacity'
        >
          <UserPlusIcon className='stroke-1 w-7' />
        </Link>
      </div>
      <FriendsList />
    </>
  );
}
