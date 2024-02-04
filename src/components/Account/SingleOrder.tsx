import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { FaShippingFast } from 'react-icons/fa';
import { GrCompliance } from 'react-icons/gr';
import { MdPendingActions } from 'react-icons/md';
import { OrderType } from '../../../typings';

interface Props {
  order: OrderType;
}

export function SingleOrder({ order }: Props) {
  let statusIcon = null;
  switch (order.deliveryStatus) {
    case 'pending':
      statusIcon = <MdPendingActions className="text-lg text-primary" />;
      break;
    case 'shipped':
      statusIcon = <FaShippingFast className="text-lg text-primary" />;
      break;
    case 'delivered':
      statusIcon = <GrCompliance className="text-lg text-primary" />;
      break;
    default:
      statusIcon = null;
  }
  return (
    <div className="w-full flex justify-between items-stretch gap-10 rounded-sm shadow-md p-5">
      <div className="w-[300px] flex flex-col justify-center items-center">
        <Image
          src={order.products[0].imagesURL.image1}
          alt={order.products[0].title}
          width={150}
          height={150}
          className="w-[150px] h-[150px] object-cover"
        />
        <div className="w-full flex justify-center items-start gap-3">
          {order.products.map(
            (product, index) =>
              index > 0 && (
                <Image
                  key={product.id}
                  src={product.imagesURL.image1}
                  alt={product.title}
                  width={80}
                  height={80}
                  className="w-[80px] h-[80px] object-contain"
                />
              )
          )}
        </div>
      </div>
      <div className="w-full flex flex-col justify-stretch items-start gap-3">
        <div className="text-lg font-bold flex justify-center items-center gap-3">
          <p>{order.deliveryStatus.charAt(0).toUpperCase() + order.deliveryStatus.slice(1)}</p>
          {statusIcon}
        </div>
        {order.trackingNumber && (
          <Link
            href={`https://www.taxydromiki.com/en/track/${order.trackingNumber}`}
            passHref
            className="text-base font-normal"
          >
            <strong>Tracking Number:</strong> {order.trackingNumber}
          </Link>
        )}
        <p className="text-base font-normal">
          <strong>Order:</strong> {order.id}
        </p>
        <p className="text-base font-normal">
          <strong>Date:</strong> {format(new Date(order.createdAt), 'LLLL d, yyyy - HH:mm')}
        </p>
        <p className="text-base font-normal">
          <strong>Total:</strong> {order.totalCost}€
        </p>
        <p className="text-base font-normal">
          {order.products.reduce((acc, product) => acc + product.quantity, 0)} item
          {order.products.reduce((acc, product) => acc + product.quantity, 0) > 1 && 's'}
        </p>
      </div>
    </div>
  );
}
