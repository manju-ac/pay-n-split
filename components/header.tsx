import Link from 'next/link';

const Header = () => {
  return (
    <div className='py-4 mb-8 text-center text-white bg-zinc-900'>
      <Link href='/' className='text-3xl font-bold'>
        Pay &apos;n Split
      </Link>
    </div>
  );
};

export default Header;
