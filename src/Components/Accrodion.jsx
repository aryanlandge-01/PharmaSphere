import  { useState } from 'react';

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: 'Welcome to MedConnect - Your Trusted Online Pharmacy',
      content: 
        <p className="text-lg mb-6">
          At MedConnect, we're committed to providing accessible, reliable, and convenient healthcare solutions tailored to meet your needs. As a leading online pharmacy, we strive to revolutionize the way you access medication and healthcare products, ensuring a seamless and secure experience for every customer.
        </p>

    },
      
    {
      title: 'Our Mission: Bridging Health and Convenience',
      content:  <p className="mb-6">
      Our mission is to bridge the gap between quality healthcare and accessibility. We understand the importance of easily accessible medicines and healthcare essentials, especially in today's fast-paced world. MedConnect offers a comprehensive range of pharmaceutical products, from over-the-counter medications to specialized prescriptions, all with the ease and comfort of online ordering.
    </p>
  
    },
    {
      title: 'Why Choose MedConnect?',
      content: (
        <ul className="list-disc ml-6 mb-6">
          <li className="mb-2"><strong>Quality Assurance:</strong> We source our products from trusted and certified suppliers to ensure the highest quality.</li>
          <li className="mb-2"><strong>Convenience:</strong> Our user-friendly platform is designed to make your shopping experience effortless and secure.</li>
          <li className="mb-2"><strong>Customer Care:</strong> We value your health and satisfaction, offering reliable customer support and timely delivery services.</li>
        </ul>
      ),
                   
    },
    {
      title : "Our Commitment to You",
      content: (
        <><p className="mb-6">
          At MedConnect, your well-being is our priority. We prioritize customer satisfaction, ensuring that every product and service meets the highest standards. Whether you're managing a chronic condition, seeking general wellness products, or simply need a refill, MedConnect is here to simplify your healthcare journey.
        </p><p className="text-lg mb-6">
            Thank you for choosing MedConnect as your healthcare partner. We look forward to serving you and contributing to a healthier, happier community.
          </p><p className="text-lg mb-6">
            For any inquiries or assistance, please don't hesitate to <a href="#" className="text-blue-500">contact us</a> — we're here for you.
          </p></>
      ),
    },
  ];

  return (
    <div className="mx-24">
      {accordionData.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className="bg-blue-300 p-4 cursor-pointer rounded-lg"
            onClick={() => handleClick(index)}
          >
            <h2 className="text-2xl text-center font-bold">{item.title}</h2>
          </div>
          {activeAccordion === index && (
            <div className="bg-white p-6">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;