'use client';
import PageTemplate from '@/components/layout/PageTemplate';
import PageBody from '@/components/layout/PageBody';
import CategoriesMenu from '@/components/layout/CategoriesMenu';
import PageTitle from '@/components/layout/PageTitle';
import { BsBox, BsBoxArrowLeft, BsChevronDown, BsCreditCard2Back, BsGear, BsTruck } from 'react-icons/bs';
import { useState } from 'react';
import { motion } from 'framer-motion';

type Expandable = {
  category: string;
  index: number;
}

function Page() {
  const [expanded, setExpanded] = useState<Expandable[]>([]);

  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
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
                { category.questions.map((question, index2) => (
                  <div key={ index2 } className="w-full flex flex-col items-start justify-start gap-5">
                    <div className="w-full flex justify-between items-center bg-[#FBFBFB] p-5 cursor-pointer shadow-sm rounded-sm"
                      onClick={ () => {
                        if (expanded.some((item) => item.category === category.category && item.index === index2)) {
                          setExpanded(expanded.filter((item) => item.category !== category.category || item.index !== index2));
                        } else {
                          const newExpanded = expanded.filter((item) => item.category !== category.category);
                          setExpanded([...newExpanded, { category: category.category, index: index2 }]);
                        }
                      } }

                    >
                      <h1 className="text-base font-medium">{ question.question }</h1>
                      <BsChevronDown className="text-2xl" />
                    </div>
                    { expanded.some((item) => item.category === category.category && item.index === index2) && (
                      <motion.p
                        initial={ { height: 0 } }
                        animate={ { height: 'auto' } }
                        transition={ { duration: 0.3 } }
                        exit={ { height: 0 } }
                        className="text-base font-light px-5 overflow-hidden">{ question.answer }</motion.p>
                    ) }
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
