'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Tabs() {
  const pathname = usePathname();
  const segments = pathname.split('/');

  const activeSegment = segments[segments.length - 1];

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className="w-full flex justify-start items-center border border-primary">
        <Link
          href="/auth/login"
          className={ `flex-1 text-center p-2 cursor-pointer ${ activeSegment === 'login' ? 'bg-primary text-white' : '' }` }>
          <p className="text-base font-medium">Login</p>
        </Link>
        <Link
          href="/auth/register"
          className={ `flex-1 text-center p-2 cursor-pointer ${ activeSegment === 'register' ? 'bg-primary text-white' : '' }` }>
          <p className="text-base font-medium">Register</p>
        </Link>
      </div>
    </div>
  )
    ;
}

export default Tabs;
