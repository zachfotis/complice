import { BsChevronDoubleRight } from 'react-icons/bs';
import { GrCompliance } from 'react-icons/gr';
import { MdPendingActions } from 'react-icons/md';
import { OrderType } from '../../../typings';

interface Props {
  order: OrderType;
}

export function SingleOrder({ order }: Props) {
  let statusIcon = null;
  switch (order.status) {
    case 'pending':
      statusIcon = <MdPendingActions className="text-lg text-primary" />;
      break;
    case 'completed':
      statusIcon = <GrCompliance className="text-lg text-primary" />;
      break;
    default:
      statusIcon = null;
  }
  return (
    <div className="w-full flex justify-between items-center gap-10 rounded-sm shadow-lg border border-primary p-5">
      <div className="w-full flex flex-col justify-center items-start gap-3">
        <p className="text-lg font-medium">Order #{ order.id }</p>
        <p className="text-base font-normal">Date: { new Date(order.date).toLocaleDateString() }</p>
        <p className="text-base font-normal">Total: { order.total }€</p>
        <p className="text-base font-normal">{ order.products.length } items</p>
        <p className="text-base font-normal flex justify-center items-start gap-3">Status: { order.status.charAt(0).toUpperCase() + order.status.slice(1) } { statusIcon }</p>
      </div>
      <button className="flex flex-col justify-center items-center gap-2">
        <BsChevronDoubleRight className="text-2xl text-primary" />
        <p className="text-sm font-medium">Details</p>
      </button>
    </div>
  );
}
