import Link from 'next/link';
import { BsFacebook, BsFillThreadsFill, BsInstagram } from 'react-icons/bs';

interface Props {
  color?: string;
  size?: string;
  gap?: string;
}

function SocialMedia({ color = 'text-white', size = 'text-2xl', gap = 'gap-5' }: Props) {
  return (
    <div className={`flex justify-center items-center ${gap}`}>
      <Link href="https://www.facebook.com/profile.php?id=61561132305435">
        <BsFacebook
          className={`${size} ${color} hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer`}
        />
      </Link>
      <Link href="https://www.instagram.com/compliceteam">
        <BsInstagram
          className={`${size} ${color} hover:text-pink-500 transition-all duration-300 ease-in-out cursor-pointer`}
        />
      </Link>
      <Link href="https://www.threads.net/@compliceteam">
        <BsFillThreadsFill
          className={`${size} ${color} hover:text-pink-700 transition-all duration-300 ease-in-out cursor-pointer`}
        />
      </Link>
    </div>
  );
}

export default SocialMedia;
