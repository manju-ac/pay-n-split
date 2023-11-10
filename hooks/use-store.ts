import { create } from 'zustand';
import { v4 as uuidV4 } from 'uuid';

import { Friend } from '@/types';

//random data
const FRIENDS: Friend[] = [
  {
    id: '89540d08-f1eb-4d01-9cbe-72fe9869c3ca',
    name: 'Joe',
    imageUrl: 'https://i.pravatar.cc/320?u=11111',
    balance: 10.0
  },
  {
    id: 'ff9a7887-91ab-413a-94c9-7195f65f4813',
    name: 'Alexa',
    imageUrl: 'https://i.pravatar.cc/320?u=11118',
    balance: -5.0
  },
  {
    id: 'a1440385-0865-4234-8909-6c68eab2ecf7',
    name: 'David',
    imageUrl: 'https://i.pravatar.cc/320?u=11119',
    balance: 0.0
  },
  {
    id: 'c9165f57-4ebb-4036-91d8-3af644e3f0dc',
    name: 'Emma',
    imageUrl: 'https://i.pravatar.cc/320?u=11120',
    balance: -9.5
  },
  {
    id: '821933ae-3fd4-4ff0-819a-19da5bf49c24',
    name: 'Kelly',
    imageUrl: 'https://i.pravatar.cc/320?u=11121',
    balance: 0.0
  }
];

type State = {
  friends: Friend[];
  addFriend: (friend: Omit<Friend, 'id' | 'balance'>) => void;
  addExpense: (friendId: string, balance: number) => void;
  clearExpense: (friendId: string) => void;
};

const useStore = create<State>(set => ({
  friends: FRIENDS,
  addFriend: friend => {
    set(state => ({
      friends: [...state.friends, { id: uuidV4(), ...friend, balance: 0 }]
    }));
  },
  addExpense: (friendId, balance) => {
    set(state => ({
      friends: state.friends.map(friend => {
        if (friend.id === friendId) {
          return {
            ...friend,
            balance: +(friend.balance + balance).toFixed(2)
          };
        }
        return friend;
      })
    }));
  },
  clearExpense: friendId => {
    set(state => ({
      friends: state.friends.map(friend => {
        if (friend.id === friendId) {
          return { ...friend, balance: 0 };
        }
        return friend;
      })
    }));
  }
}));

export default useStore;
