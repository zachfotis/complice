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
    <div className="w-full flex flex-col justify-stretch items-start gap-3 rounded-sm shadow-md p-5">
      <div
        className={ `text-base sm:text-lg font-bold flex justify-center items-center gap-3
          ${
          order.deliveryStatus === 'delivered'
            ? 'text-green-600'
            : order.deliveryStatus === 'shipped'
              ? 'text-blue-400'
              : 'text-yellow-600'
        }
        ` }
      >
        <p>{ order.deliveryStatus.charAt(0).toUpperCase() + order.deliveryStatus.slice(1) }</p>
        { statusIcon }
      </div>
      { order.trackingNumber && (
        <Link
          href={ `https://www.taxydromiki.com/en/track/${ order.trackingNumber }` }
          passHref
          className="text-sm sm:text-base font-normal"
        >
          <strong>Tracking Number:</strong> { order.trackingNumber }
        </Link>
      ) }
      <p className="text-sm sm:text-base font-normal">
        <strong>Order:</strong> { order.id }
      </p>
      <p className="text-sm sm:text-base font-normal">
        <strong>Date:</strong> { format(new Date(order.createdAt), 'LLLL d, yyyy - HH:mm') }
      </p>
      <p className="text-sm sm:text-base font-normal">
        <strong>Total:</strong> { order.totalCost }€
      </p>
      <div className="w-full text-sm sm:text-base font-normal flex flex-col md:flex-row justify-center items-start md:items-center md:gap-5">
        <strong>Items</strong>
        <div className="w-full flex justify-start items-start gap-3 flex-wrap">
          { order.products.map(
            (product) =>
              <div key={ product.id + product.size + product.quantity } className="relative" title={ product.title + ' - ' + product.size }>
                <Image
                  src={ product.imagesURL?.image1 || '' }
                  alt={ product.title }
                  width={ 80 }
                  height={ 80 }
                  className="object-contain w-[80px] h-[80px]"
                />
                { product.quantity > 1 && (
                  <p className="absolute bottom-2 right-2 text-xs font-medium font-custom bg-primary text-white px-1 rounded-md">x{ product.quantity } </p>
                ) }
              </div>,
          ) }
        </div>
      </div>
    </div>
  );
}
