'use client';

import UserLogo from '@/assets/user.png';
import Image from 'next/image';
import { UserType } from '../../../typings';

interface Props {
  currentUser: UserType;
}

function Cover({ currentUser }: Props) {

  return (
    <div className="w-full flex flex-col justify-start items-center gap-7 mt-5">
      <h2 className="text-h3 font-medium uppercase">My Account</h2>
      <Image src={ UserLogo } width={ 300 } height={ 300 } alt="Avatar" className="w-[150px] h-[150px] object-cover object-center" />
      <div className="w-full flex flex-col justify-start items-center gap-3">
        <h2 className="text-h4 font-medium capitalize">{ currentUser.firstName } { currentUser.lastName }</h2>
        <p className="text-lg font-normal">{ currentUser.email }</p>
      </div>
    </div>
  );
}

export default Cover;
