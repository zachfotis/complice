import { OrderType } from '../../../typings';
import { BsCartX } from 'react-icons/bs';
import { SingleOrder } from '@/components/Account/SingleOrder';

interface Props {
  orders: OrderType[];
}

export function Orders({ orders }: Props) {
  return orders.length > 0 ? (
    <div className="flex-auto min-h-[300px] flex flex-col justify-center items-center gap-3">
      { orders.map((order) => (
        <SingleOrder order={ order } key={ order.id } />
      )) }
    </div>
  ) : (
    <div className="flex-auto min-h-[300px] flex flex-col justify-center items-center gap-3">
      <BsCartX className="text-3xl text-primary" />
      <h1 className="text-lg font-custom">You have no orders</h1>
    </div>
  );
}
