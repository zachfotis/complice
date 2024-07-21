import Loader from '@/components/common/Loader';

export default function Loading() {
  return (
    <div className="flex-1 min-h-screen w-full flex justify-center items-center">
      <Loader />
    </div>
  );
}
