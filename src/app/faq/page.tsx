import FaqCards from '@/components/FAQ/FaqCards';
import CategoriesMenu from '@/components/layout/CategoriesMenu';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';

function FaqPage() {
  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
        <PageTitle title="FAQ Topics" />
        <FaqCards />
      </PageBody>
    </PageTemplate>
  );
}

export default FaqPage;
