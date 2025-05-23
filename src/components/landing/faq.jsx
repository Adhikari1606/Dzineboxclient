import React from "react";

const FAQ = () => {
  const [faqs, setFaqs] = React.useState([
    {
      question: "How long does it take to complete an interior project?",
      answer:
        "Dzine box Projects typically completes a standard office interiors project in 45 days. However, for larger projects, the timeline may extend slightly to ensure the highest quality and attention to detail.",
      isOpen: false,
    },
    {
      question: "What is the starting cost for Dzine box projects interiors?",
      answer: "The starting cost for Dzine box projects interiors is INR 50 Lakh.",
      isOpen: false,
    },
    {
      question: "How can I get a quote for my project?",
      answer:
        "To get a quote for your project, you can use the contact us button on our website to fill out a form.",
      isOpen: false,
    },
    {
      question: "What types of spaces can Dzine box design?",
      answer:
        "Dzine box  projects designs a wide range of spaces including restaurant interiors, retail stores designs, office interior designs, hotel designs, educational institutions and cafeteria interiors.",
      isOpen: false,
    },
    {
      question: "Can Dzine box projects handle renovation projects?",
      answer:
        "Absolutely! Dzine Box excels in renovation projects, seamlessly transforming existing corporate spaces into stunning, functional, and aesthetically refined interiors.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div className=" px-8 max-w-5xl mx-auto flex gap-12 flex-col">
      <div className="flex text-center flex-col justify-center items-center px-6 sm:px-10 lg:px-16 py-0 md:pt-10">
        <h2 className="text-4xl py-2 md:text-6xl font-bold text-[#486284]">
          Frequently Asked Questions
        </h2>
        <p className="text-md text-[#9795B5] py-2 md:text-lg w-full md:max-w-[70%]">
          Providing clarity and insights into our process, services, and
          commitment to excellence.
        </p>
      </div>
      <ul className="basis-1/2">
        {faqs.map((faq, index) => (
          <li key={index}>
            <button
              className="relative flex gap-2 items-center w-full py-10 text-base font-semibold text-left border-t md:text-lg border-base-content/10 "
              aria-expanded={faq.isOpen}
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1 text-[#486284] text-base-content">
                {faq.question}
              </span>
              <svg
                className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transition-transform duration-200 ${
                  faq.isOpen ? "transform rotate-45" : ""
                }`}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  class="transform origin-center transition duration-200 ease-out false"
                ></rect>
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  class="transform origin-center rotate-90 transition duration-200 ease-out false"
                ></rect>
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                faq.isOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 text-[#9795B5] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
