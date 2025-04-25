import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'What is Living Doll PH?',
    answer: 'Living Doll PH is a fashion-forward e-commerce brand offering trendy and timeless pieces designed for the modern Filipina.'
  },
  {
    question: 'Is it safe to order?',
    answer: 'Yes! We use secure payment gateways and encrypted checkout processes to keep your information safe.'
  },
  {
    question: 'Where is the fabric from?',
    answer: 'Our fabrics are thoughtfully sourced from trusted local and international suppliers focused on quality and sustainability.'
  },
  {
    question: 'How long is the shipping?',
    answer: 'Orders typically ship within 2–5 business days depending on your location. You’ll receive tracking updates via email.'
  },
  {
    question: 'What is our mission?',
    answer: 'Our mission is to empower confidence through beautiful clothing that celebrates individuality and timeless style.'
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section" id='faq-section'>
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <hr className="faq-divider" />
      <div className="faq-container">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAnswer(index)}
          >
            <div className="faq-question">{item.question}</div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
