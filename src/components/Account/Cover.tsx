'use client';

import UserLogo from '@/assets/user.png';
import Image from 'next/image';
import Button from '@/components/common/Button';

interface Props {
  currentUser: UserType;
}

function Cover({ currentUser }: Props) {

  const handleLogout = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      await fetch(`${ baseUrl }/auth/signout`, {
        method: 'POST',
        credentials: 'include',
        cache: 'no-store',
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-[1000px] flex flex-col justify-stretch items-center gap-5 shadow-sm px-5 pb-5">
      <div className="flex flex-col justify-between items-center gap-7 md:flex-row">
        <Image src={ UserLogo } width={ 300 } height={ 300 } alt="Avatar" className="w-[130px] h-[130px] object-cover object-center" />
        <div className="flex flex-col justify-start items-center gap-2 md:items-start">
          <h2 className="text-h4 font-medium capitalize">{ currentUser?.firstName } { currentUser?.lastName }</h2>
          <p className="text-base font-normal mb-3">{ currentUser?.email }</p>
          <Button text="Logout" variant="sm-black" onClick={ handleLogout } />
        </div>
      </div>
    </div>
  );
}

export default Cover;
