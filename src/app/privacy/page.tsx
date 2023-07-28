import PageTemplate from '@/components/layout/PageTemplate';
import PageBody from '@/components/layout/PageBody';
import Categories from '@/components/layout/Categories';
import PageTitle from '@/components/layout/PageTitle';

function Page() {
  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        <PageTitle title="Privacy Policy" />
      </PageBody>
    </PageTemplate>
  );
}

export default Page;

const privacyData = [
  {
    title: 'Personal Information',
    text: ['If you use the services of Complice, you provide certain personal data to Complice yourself, or personal data is obtained from you in the context of the agreement. Personal data refers to all information related to an identified or identifiable natural person.']
  },
  {
    title: 'Complice is capable of collecting personal data in the following situations:',
    text: [
      'When you visit a website of Complice.',
      'When you contact Complice by phone or email.',
      'When you fill in or leave your details.',
      'When you apply for a position offered by Complice.',
      'When you offer your services to Complice.',
      'When you enter the premises where Complice offices are located.'
    ]
  },
  {
    title: 'Categories of Personal Data'
  }
];
