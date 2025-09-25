import React, { useState } from 'react';

const faqData = [
  {
    question: "How do I find a freelancer?",
    answer: "You can browse our talent directory, search by skill or service, or post a project and let freelancers bid on it."
  },
  {
    question: "How do I post a project?",
    answer: "After creating an account, navigate to the 'Post a Project' page. Fill out the details of your project, including budget and deadline, and submit it for freelancers to view and apply."
  },
  {
    question: "How does the payment process work?",
    answer: "We use a secure escrow system. The client deposits the payment upfront, which is held securely until the project is completed and approved. Once you are satisfied, the payment is released to the freelancer."
  },
  {
    question: "What if I am not satisfied with the work?",
    answer: "Our platform offers a dispute resolution service. If you are not happy with the work, you can raise a dispute, and our team will mediate to find a fair solution."
  },
  {
    question: "Is there a fee for using the platform?",
    answer: "Yes, we charge a small service fee on all transactions to cover the costs of running the platform and providing secure payment services. The fee percentage varies based on the project value."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-lg font-semibold cursor-pointer focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <span>{item.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-6 border-t border-gray-300 dark:border-gray-700">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;