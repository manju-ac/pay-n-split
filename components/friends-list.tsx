'use client';

import Friend from './friend';
import useStore from '@/hooks/use-store';

const FriendsList: React.FC = () => {
  const friends = useStore(state => state.friends);

  return friends.length > 0 ? (
    <ul>
      {friends.map(friend => (
        <Friend key={friend.id} data={friend} />
      ))}
    </ul>
  ) : (
    <p className='text-center font-semibold mt-16'>
      Your friends/expense list is empty. Please add by clicking on the button
      above.
    </p>
  );
};

export default FriendsList;
