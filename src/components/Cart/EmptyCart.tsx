import { BsCartX } from 'react-icons/bs';

export function EmptyCart() {
  return (
    <div className="flex-auto min-h-full flex flex-col justify-center items-center gap-5">
      <BsCartX className="text-5xl text-primary" />
      <h1 className="text-h3 font-custom">Your cart is empty</h1>
    </div>
  );
}
