import PageTemplate from '@/components/layout/PageTemplate';
import PageBody from '@/components/layout/PageBody';
import PageTitle from '@/components/layout/PageTitle';
import Categories from '@/components/layout/Categories';

function Page() {
  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        <PageTitle title="Shipping Policy" />
        <div className="w-full max-w-[1000px] flex flex-col items-start justify-start gap-5">
          { shippingData.map((item, index) => (
            <div key={ index } className="flex flex-col items-start justify-start gap-5 text-justify">
              <h1 className="text-h4 font-custom">{ item.title }</h1>
              <p className="text-base text-secondary">{ item.text }</p>
            </div>
          )) }
          <div className="w-full flex justify-center items-center">
            <h3 className="mt-20 mb-10 text-lg font-medium w-full max-w-[1000px] text-center">If you have any questions or concerns about our shipping policy, please do not
              hesitate
              to
              contact our
              customer service.
              Thank you!</h3>
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
    text: `At Complice, we make sure your orders reach you quickly and smoothly. Here's everything you need to know about how we send your orders:`
  },
  {
    title: 'How We Send Your Orders',
    text: `We have reliable ways to send both local and international orders. You'll see these options when you're paying for your order, so you can pick the one that works best for you.`
  },
  {
    title: 'Getting Your Order Ready',
    text: `After you place your order, we'll get it ready to send off within 1-3 days. If it's a busy time like a holiday, it might take a bit longer, but we always aim to be as quick as possible.`
  },
  {
    title: 'How Long It Takes',
    text: `How long your order takes to reach you depends on where you live and which delivery option you picked. We'll give you an estimate when you're checking out. Remember, if you're ordering from another country, customs might hold onto your order for a bit, which can make it take longer.`
  },
  {
    title: 'What It Costs',
    text: `The cost of sending your order depends on where it's going, how much it weighs, and how big it is. You'll see this cost when you're checking out, before you pay for your order.`
  },
  {
    title: 'Keeping Track of Your Order',
    text: `For most delivery options, we'll give you a tracking number by email once your order's on its way. This lets you check where your order is and when it's likely to arrive.`
  },
  {
    title: 'Extra Charges for International Orders',
    text: `If you're ordering from another country, you might have to pay customs duties, taxes, and fees when your order arrives. These charges aren't included in your order total and are your responsibility. Check with your local customs office to find out about any potential fees.`
  },
  {
    title: 'Your Delivery Address',
    text: `Make sure the delivery address you give us when you're checking out is correct and complete. We can't take responsibility for orders that go to the wrong or incomplete addresses.`
  },
  {
    title: 'If Something Goes Wrong',
    text: `If your order gets lost or damaged in transit, get in touch with our customer service right away. We'll do everything we can to sort out the problem and make sure you're happy.`
  }
];



