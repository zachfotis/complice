import {BsFacebook, BsInstagram, BsPinterest} from 'react-icons/bs';

interface Props {
  color?: string;
  size?: string;
  gap?: string;
}

function SocialMedia({ color = 'text-white', size = 'text-2xl', gap = 'gap-5' }: Props) {
  return (
    <div className={`flex justify-center items-center ${gap}`}>
      <BsFacebook
        className={`${size} ${color} hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer`}
      />
      <BsPinterest
        className={`${size} ${color} hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer`}
      />
      <BsInstagram
        className={`${size} ${color} hover:text-pink-500 transition-all duration-300 ease-in-out cursor-pointer`}
      />
    </div>
  );
}

export default SocialMedia;
