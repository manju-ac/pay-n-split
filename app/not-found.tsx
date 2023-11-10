import Link from 'next/link';

//custom not-found page
const NotFoundPage = () => {
  return (
    <div className='py-16 grid place-items-center'>
      <div className='border border-zinc-400 rounded-md p-4'>
        <p className='text-center font-semibold'>404: Page Not found</p>
        <Link
          href='/'
          replace
          className='inline-block border border-zinc-600 p-2 mt-4 rounded-md text-zinc-700 hover:opacity-70 transition-opacity'
        >
          Go back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
