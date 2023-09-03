import Image from 'next/image';
import Logo from '../../assets/logo.png';

function Cover() {
  return (
    <div className="w-full bg-whiteGrey p-20 flex justify-center items-center">
      <Image src={ Logo } alt="logo" width={ 400 } height={ 200 } />
    </div>
  );
}

export default Cover;
