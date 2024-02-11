import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { FaShippingFast } from 'react-icons/fa';
import { GrCompliance } from 'react-icons/gr';
import { MdPendingActions } from 'react-icons/md';
import { OrderType } from '../../../typings';
import { TfiReceipt } from 'react-icons/tfi';
import { toast } from 'react-toastify';

interface Props {
  order: OrderType;
}

export function SingleOrder({ order }: Props) {

  const fetchCharge = async () => {
    if (!order) return;

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${ baseUrl }/orders/get-receipt/${ order.id }`, {
        method: 'GET',
        credentials: 'include',
        cache: 'no-store',
      });
      const data = await response.json();

      if (data?.receiptUrl) {
        window.open(data.receiptUrl, '_blank');
      } else {
        toast.error('Receipt not found');
      }
    } catch (error) {
      console.error(error);
    }
  };

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
    <div className="relative w-full flex flex-col justify-stretch items-start gap-3 rounded-sm shadow-md p-5">
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
      <div className="grid grid-cols-[auto_auto] gap-5 text-sm sm:text-base font-normal">
        { order.trackingNumber && (
          <>
            <Link href={ `https://www.taxydromiki.com/en/track/${ order.trackingNumber }` } passHref>
              <strong>Tracking Number:</strong>
            </Link>
            <p>{ order.trackingNumber }</p>
          </>
        ) }
        <p><strong>Order:</strong></p>
        <p>{ order.id }</p>
        <p><strong>Date:</strong></p>
        <p>{ format(new Date(order.createdAt), 'LLLL d, yyyy - HH:mm') }</p>
        <p><strong>Total:</strong></p>
        <p>{ order.totalCost }€</p>
        <div className="w-full col-span-2 text-sm sm:text-base font-normal flex flex-col md:flex-row justify-center items-start md:items-center md:gap-5">
          <strong>Items</strong>
          <div className="w-full flex justify-start items-start gap-3 flex-wrap">
            { order.products.map(
              (product) => (
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
                </div>
              )) }
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-5 right-5 flex justify-center items-center gap-2 cursor-pointer rounded-md p-2 hover:bg-primary hover:text-white"
        onClick={ fetchCharge }>
        <p><strong>Receipt</strong></p>
        <TfiReceipt className="text-2xl" />
        </div>
      </div>
  )
    ;
}
