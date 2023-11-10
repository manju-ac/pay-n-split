import Link from 'next/link';

import AnimatedImage from './ui/animated-image';
import { Friend } from '@/types';

type FriendProps = {
  data: Friend;
};

const Friend: React.FC<FriendProps> = ({ data }) => {
  return (
    <li className='border-b rounded-md hover:bg-zinc-100 transition-colors'>
      <Link
        href={`/friends/${data.id}/expenses/add`}
        scroll={false}
        className='flex items-center gap-x-4 p-2 '
      >
        <div className='relative w-12 aspect-square rounded-full overflow-hidden'>
          <AnimatedImage
            src={data.imageUrl}
            alt={data.name}
            fill
            sizes='30vw, (min-width: 42rem) 20vw'
          />
        </div>
        <div>
          <h3 className='text-base font-semibold'>{data.name}</h3>
          <p
            className={`text-xs ${
              data.balance < 0
                ? 'text-green-500'
                : data.balance > 0
                ? 'text-orange-500'
                : 'text-zinc-500'
            }`}
          >
            {data.balance < 0 ? (
              <>
                {`${data.name} owes you `}{' '}
                <b className='font-semibold'>{`$${Math.abs(data.balance)}`}</b>
              </>
            ) : data.balance > 0 ? (
              <>
                {`You owe ${data.name} `}
                <b className='font-semibold'>{`$${data.balance}`}</b>
              </>
            ) : (
              'Select to add an expense'
            )}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default Friend;
