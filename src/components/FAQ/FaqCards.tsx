'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { BsBox, BsBoxArrowLeft, BsChevronDown, BsCreditCard2Back, BsGear, BsTruck } from 'react-icons/bs';

type Expandable = {
  category: string;
  index: number;
};

function FaqCards() {
  const [expanded, setExpanded] = useState<Expandable[]>([]);

  return (
    <div className="w-full max-w-[1000px] flex flex-col items-start justify-start gap-10">
      {faqData.map((category, index) => (
        <div key={index} className="w-full flex flex-col items-start justify-start gap-5">
          <div className="w-full flex items-center justify-start gap-3">
            {category.icon}
            <h1 className="text-h3 font-custom">{category.category}</h1>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-5">
            {category.questions.map((question, index2) => (
              <div key={index2} className="w-full flex flex-col items-start justify-start gap-5">
                <div
                  className="w-full flex justify-between items-center bg-[#FBFBFB] p-5 cursor-pointer shadow-sm rounded-sm"
                  onClick={() => {
                    if (expanded.some((item) => item.category === category.category && item.index === index2)) {
                      setExpanded(
                        expanded.filter((item) => item.category !== category.category || item.index !== index2)
                      );
                    } else {
                      const newExpanded = expanded.filter((item) => item.category !== category.category);
                      setExpanded([...newExpanded, { category: category.category, index: index2 }]);
                    }
                  }}
                >
                  <h1 className="text-base font-medium">{question.question}</h1>
                  <BsChevronDown className="text-2xl" />
                </div>
                {expanded.some((item) => item.category === category.category && item.index === index2) && (
                  <motion.p
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    exit={{ height: 0 }}
                    className="text-base font-light px-5 overflow-hidden"
                  >
                    {question.answer}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaqCards;

type Question = {
  question: string;
  answer: string;
};

const deliveryQuestions: Question[] = [
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we offer international shipping. Check shipping details during checkout.',
  },
  {
    question: 'What is the estimated delivery time for my order?',
    answer:
      'The estimated delivery time depends on your location and the shipping method you choose at checkout. Generally, orders within Greece take 3-5 business days, while international orders can take 7-14 business days. You can track your order using the tracking number provided in your confirmation email.',
  },
];
const orderQuestions: Question[] = [
  {
    question: 'How can I place an order?',
    answer: 'Visit our website, browse products, and click "Add to Cart." Follow the checkout process.',
  },
  {
    question: "Can I modify or cancel my order after it's been placed?",
    answer: "You can't cancel the order once it has been placed, but you can return the order after it is delivered.",
  },
  {
    question: 'How can I track my order?',
    answer: "You'll receive a tracking number via email to monitor your order's status.",
  },
  {
    question: 'How do I check the status of my order?',
    answer:
      'If you have an account, check the status from your account; otherwise, use the tracking number sent to your email.',
  },
  {
    question: 'Do you offer price adjustments if an item goes on sale after I purchase it?',
    answer: 'No, we do not offer price adjustments once an order is placed.',
  },
  {
    question: 'How do I care for and wash the products I purchase?',
    answer: "Care instructions can be found on the product's label or description.",
  },
  {
    question: 'Can I change my shipping address after placing an order?',
    answer: 'Unfortunately, we cannot change the shipping address once an order is confirmed.',
  },
];
const paymentQuestions: Question[] = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit/debit cards, PayPal, Apple Pay, Google Pay, American Express, and Pay by Link.',
  },
  {
    question: 'Is it safe to use my credit card on your website?',
    answer: 'Yes, we use secure encryption to protect your payment information, provided by Stripe.',
  },
];

const technicalQuestions: Question[] = [
  {
    question: 'How do I subscribe to your newsletter?',
    answer:
      'To subscribe to our newsletter, enter your email address in the subscription box found at the bottom of our homepage and click "Subscribe." You\'ll receive updates on new arrivals, sales, and special offers.',
  },
  {
    question: 'How do I unsubscribe from your newsletter?',
    answer:
      'To unsubscribe from our newsletter, click the "Unsubscribe" link at the bottom of any newsletter email. You will be removed from our mailing list immediately.',
  },
  {
    question: 'How do I contact customer support?',
    answer:
      'You can contact our customer support team by emailing support@compliceteam.com. Our support hours are Monday to Friday, 9 AM to 5 PM.',
  },
  {
    question: 'What is your privacy policy?',
    answer:
      'Our privacy policy outlines how we collect, use, and protect your personal information. You can read the full policy by visiting our Privacy Policy page.',
  },
  {
    question: 'Do you offer gift cards?',
    answer: "No, we don't offer a gift card at the moment.",
  },
  {
    question: 'What should I do if I forget my password?',
    answer:
      'If you forget your password, click the "Forgot Password" link on the login page. Enter your email address, and we\'ll send you instructions to reset your password.',
  },
  {
    question: 'What security measures do you have in place to protect customer information?',
    answer: 'We use industry-standard security protocols to safeguard customer information.',
  },
];

const returnQuestions: Question[] = [
  {
    question: 'What is your return policy?',
    answer: 'Check our return policy for details on returns and exchanges.',
  },
  {
    question: 'Can I return an item?',
    answer:
      'Yes, you can return an item. After a quality control check to ensure the item is not damaged, you can return it and get credited the amount.',
  },
  {
    question: 'How do I return a faulty or damaged item?',
    answer:
      'Contact us, and we will perform a quality check. If the item is damaged or faulty, you will get your money back, and shipping is free.',
  },
  {
    question: 'What do I do if I receive the wrong item or a defective product?',
    answer: "Contact our customer support with details, and we'll assist you promptly.",
  },
];

const faqData = [
  {
    category: 'Delivery',
    icon: <BsTruck className="text-2xl" />,
    questions: deliveryQuestions,
  },
  {
    category: 'Orders',
    icon: <BsBox className="text-2xl" />,
    questions: orderQuestions,
  },
  {
    category: 'Payment & Promotions',
    icon: <BsCreditCard2Back className="text-2xl" />,
    questions: paymentQuestions,
  },
  {
    category: 'Technical',
    icon: <BsGear className="text-2xl" />,
    questions: technicalQuestions,
  },
  {
    category: 'Returns & Refunds',
    icon: <BsBoxArrowLeft className="text-2xl" />,
    questions: returnQuestions,
  },
];
