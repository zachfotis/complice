'use client';
import PageTemplate from '@/components/layout/PageTemplate';
import PageBody from '@/components/layout/PageBody';
import Categories from '@/components/layout/Categories';
import PageTitle from '@/components/layout/PageTitle';
import { BsBox, BsBoxArrowLeft, BsCreditCard2Back, BsGear, BsTruck } from 'react-icons/bs';

function Page() {
  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        <PageTitle title="FAQ Topics" />
        {/*  Make an accordion for each category */ }
        <div className="w-full max-w-[1000px] flex flex-col items-start justify-start gap-10">
          { faqData.map((category, index) => (
            <div key={ index } className="w-full flex flex-col items-start justify-start gap-5">
              <div className="w-full flex items-center justify-start gap-3">
                { category.icon }
                <h1 className="text-h3 font-custom">{ category.category }</h1>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-5">
                { category.questions.map((question, index) => (
                  <div key={ index } className="w-full flex flex-col items-start justify-start gap-5">
                    <h1 className="text-base font-medium">{ question.question }</h1>
                    <p className="text-base font-light">{ question.answer }</p>
                  </div>
                )) }
              </div>
            </div>
          )) }
        </div>
      </PageBody>
    </PageTemplate>
  );
}

export default Page;

const faqData = [
  {
    category: 'Delivery',
    icon: <BsTruck className="text-2xl" />,
    questions: [
      {
        question: 'How can I return an item from an EU country?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      },
      {
        question: 'Have you received the items I returned?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      },
      {
        question: 'Where is my order currently located?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      },
      {
        question: 'How can I obtain a new return slip?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      }
    ]
  },
  {
    category: 'Orders',
    icon: <BsBox className="text-2xl" />,
    questions: [
      {
        question: 'How can I return an item from an EU country?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      },
      {
        question: 'Have you received the items I returned?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      },
      {
        question: 'Where is my order currently located?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      },
      {
        question: 'How can I obtain a new return slip?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      }
    ]
  },
  {
    category: 'Payment & Promotions',
    icon: <BsCreditCard2Back className="text-2xl" />,
    questions: [
      {
        question: 'How can I return an item from an EU country?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      },
      {
        question: 'Have you received the items I returned?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      },
      {
        question: 'Where is my order currently located?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      },
      {
        question: 'How can I obtain a new return slip?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      }
    ]
  },
  {
    category: 'Technical',
    icon: <BsGear className="text-2xl" />,
    questions: [
      {
        question: 'How can I return an item from an EU country?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      },
      {
        question: 'Have you received the items I returned?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      },
      {
        question: 'Where is my order currently located?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      },
      {
        question: 'How can I obtain a new return slip?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      }
    ]
  },
  {
    category: 'Returns & Refunds',
    icon: <BsBoxArrowLeft className="text-2xl" />,
    questions: [
      {
        question: 'How can I return an item from an EU country?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      },
      {
        question: 'Have you received the items I returned?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      },
      {
        question: 'Where is my order currently located?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      },
      {
        question: 'How can I obtain a new return slip?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan`
      }
    ]
  }
];
