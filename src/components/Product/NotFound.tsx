import { CiWarning } from 'react-icons/ci';

function NotFound() {
  return <div className="flex-auto min-h-full flex flex-col justify-center items-center gap-2">
    <CiWarning className="text-5xl text-primary" />
    <h1 className="text-h3 font-custom">Product not found</h1>
  </div>
}

export default NotFound;
