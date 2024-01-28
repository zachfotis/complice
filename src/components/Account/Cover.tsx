'use client';

import Button from '@/components/common/Button';
import { UserType } from '../../../typings';
import { Trophy } from '@/components/Account/Trophy';

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
    <div className="w-full max-w-[1000px] flex flex-col justify-stretch items-center gap-5 shadow-sm border-2 border-primary p-5">
      <div className="w-full flex flex-col justify-between items-center gap-7 md:flex-row">
        <div className="flex flex-col justify-start items-center gap-5 md:flex-row">
          <Trophy rankingName={ currentUser.ranking.name } />
          <div className="flex flex-col justify-start items-center md:items-start">
            <h2 className="text-h4 font-medium capitalize">{ currentUser.firstName } { currentUser.lastName }</h2>
            <p className="text-base font-normal">{ currentUser.email }</p>
            <p className="text-base font-normal">{ currentUser.ranking.name } Member</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-1 md:items-start">
          <Button text="Logout" variant="sm-black" onClick={ handleLogout } />
        </div>
      </div>
    </div>
  );
}

export default Cover;
