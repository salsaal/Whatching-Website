import React, { useEffect, useRef, useState } from "react";

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "Is Whatching an Official WhatsApp Marketing Software?",
      answer:
        "Yes, Whatching is an official Meta Tech Provider built on the WhatsApp Business API, ensuring secure, compliant, and reliable communication."
    },
    {
      question: "Does Whatching offer a FREE account?",
      answer:
        "Whatching offers a 7-day free trial, allowing businesses to explore the platform and evaluate whether it fits their workflows before subscribing."
    },
    {
      question: "Is there any WhatsApp Business API setup fee?",
      answer:
        "No. There is absolutely no setup fee. Whatching does not charge anything to set up the WhatsApp Business API — you only pay a subscription fee."
    },
    {
      question: "Is it difficult to set up WhatsApp API?",
      answer:
        "Not at all. You don’t need any technical knowledge. The setup process is simple, and most businesses are up and running within 15 minutes."
    },
    {
      question: "How quickly can I start sending messages?",
      answer:
        "You can start within a day. Our fast onboarding allows you to begin engaging customers immediately, with message template approvals handled through Meta's review process."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Absolutely. There are no long-term contracts or hidden charges — you can cancel your subscription anytime."
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-20 max-sm:py-10 bg-white">
      <div className="container-wide max-w-4xl grid grid-cols-2 gap-10 max-md:grid-cols-1 max-md:gap-0">
        {/* Header */}
        <div
          className={`text-left mb-12 max-w-xl ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="heading-2 mb-4 ">Frequently Asked Questions</h2>
          <p
            className="body-large max-w-md"
            style={{ color: "var(--text-secondary)" }}
          >
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please chat to our friendly
            team.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`border  rounded-xl px-6 transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ borderColor: "var(--border-light)" }}
              >
                {/* Trigger */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center py-4 text-left cursor-pointer"
                >
                  <span
                    className="font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    style={{ color: "var(--accent-primary)" }}
                  >
                    +
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="" style={{ color: "var(--text-secondary)" }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`text-left mt-12 ${
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}
        >
          <p
            className="body-medium mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            Still have questions?
          </p>
          <a href="#cta">
            <button className="btn-secondary">Contact Support</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
