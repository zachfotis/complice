import CategoriesMenu from '@/components/layout/CategoriesMenu';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';

function Page() {
  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
        <PageTitle title="Shipping Policy" />
        <div className="w-full max-w-[1000px] flex flex-col items-start justify-start gap-5">
          {shippingData.map((item, index) => (
            <div key={index} className="flex flex-col items-start justify-start gap-2 text-justify">
              <h1 className="text-h4 font-custom">{item.title}</h1>
              <p className="text-base text-secondary">{item.text}</p>
            </div>
          ))}
          <div className="w-full flex justify-center items-center">
            <h3 className="mt-20 mb-10 text-lg font-medium w-full max-w-[1000px] text-center">
              If you have any questions or concerns about our shipping policy, please do not hesitate to contact our
              customer service. Thank you!
            </h3>
          </div>
        </div>
      </PageBody>
    </PageTemplate>
  );
}

export default Page;

const shippingData = [
  {
    title: '',
    text: `At Complice, we are dedicated to delivering your orders promptly and efficiently. Please review our shipping policy below for all the necessary information regarding shipping methods, delivery times, and related details:`,
  },
  {
    title: 'Shipping Methods',
    text: `We offer reliable shipping methods for domestic and international orders. The available options will be displayed during the checkout process, allowing you to choose the one that best suits your needs.`,
  },
  {
    title: 'Processing Time',
    text: `Once your order is placed, we will process it within 1-3 business days. During peak seasons or holidays, processing times may vary, but we will always strive to get your order ready for shipment as quickly as possible.`,
  },
  {
    title: 'Shipping Time',
    text: `Shipping time depends on your location and the selected shipping method. Estimated delivery times will be provided during the checkout process. Please note that international orders may be subject to customs clearance procedures, which can add to the delivery time.`,
  },
  {
    title: 'Shipping Costs',
    text: `Shipping costs are calculated based on the destination, weight, and dimensions of the package. You can view the shipping costs during the checkout process before finalizing your order.`,
  },
  {
    title: 'Order Tracking',
    text: `For most shipping methods, we provide order tracking information. You will receive a tracking number via email once your order has been shipped, allowing you to monitor the status and estimated delivery date.`,
  },
  {
    title: 'Customs and Duties',
    text: `For international orders, customs duties, taxes, and fees may apply upon arrival in your country. These charges are the responsibility of the recipient and are not included in the order total. Please check with your local customs office for more information on potential fees.`,
  },
  {
    title: 'Shipping Address',
    text: `Please ensure that the shipping address provided during checkout is accurate and complete. We cannot be held responsible for orders delivered to incorrect or incomplete addresses.`,
  },
  {
    title: 'Lost or Damaged Shipments',
    text: `In the rare event that your shipment is lost or arrives damaged, please contact our customer service immediately. We will work diligently to resolve the issue and ensure your satisfaction.`,
  },
];
