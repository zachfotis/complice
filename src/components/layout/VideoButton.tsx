import { MdOutlineSlowMotionVideo } from 'react-icons/md';

interface VideoButtonProps {
  isVideoOpen: boolean;
  setIsVideoOpen: (value: boolean) => void;
}

export function VideoButton({ isVideoOpen, setIsVideoOpen }: VideoButtonProps) {

  return <MdOutlineSlowMotionVideo className="cursor-pointer text-2xl" onClick={() => setIsVideoOpen(!isVideoOpen)} />;
}
