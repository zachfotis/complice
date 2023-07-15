import PageTemplate from '@/components/layout/PageTemplate';
import PageBody from '@/components/layout/PageBody';
import CartPage from '@/components/Cart/CartPage';

function page() {

  return (
    <PageTemplate>
      <PageBody>
        {/* Runs on client */ }
        <CartPage />
      </PageBody>
    </PageTemplate>
  );
}

export default page;
