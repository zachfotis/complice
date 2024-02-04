import { SingleOrder } from '@/components/Account/SingleOrder';
import { useEffect, useState } from 'react';
import { BsCartX } from 'react-icons/bs';
import { OrderType } from '../../../typings';
import Loader from '../common/Loader';

interface Props {
  userId: string;
}

export function Orders({ userId }: Props) {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/orders/get-user-orders`, {
          method: 'GET',
          credentials: 'include',
          cache: 'no-store',
        });
        const data = await response.json();

        if (data) {
          setOrders(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchOrders();
    }
  }, []);

  return orders.length > 0 ? (
    <div className="flex-auto min-h-[300px] flex flex-col justify-center items-center gap-3">
      {orders.map((order) => (
        <SingleOrder order={order} key={order.id} />
      ))}
    </div>
  ) : isLoading ? (
    <div className="flex-1 w-full min-h-[500px] flex justify-center items-center">
      <Loader />
    </div>
  ) : (
    <div className="flex-auto min-h-[300px] flex flex-col justify-center items-center gap-3">
      <BsCartX className="text-3xl text-primary" />
      <h1 className="text-lg font-custom">You have no orders</h1>
    </div>
  );
}
