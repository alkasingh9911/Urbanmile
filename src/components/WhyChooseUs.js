import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      number: "01",
      title: "Unique Selling Proposition",
      description: "Our unique blend of extensive international experience and local expertise allows us to deliver innovative and high-quality construction and interior solutions."
    },
    {
      number: "02",
      title: "Comprehensive Services",
      description: "We offer a complete range of construction and interior services, delivering solutions that exceed client expectations."
    },
    {
      number: "03",
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and are committed to delivering projects on time, without compromising on quality."
    },
    {
      number: "04",
      title: "Expert Project Management",
      description: "Our directors bring extensive experience in project management, ensuring every project is executed with precision and efficiency."
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-6 p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{reason.number}</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
          <p className="text-lg max-w-4xl mx-auto">
            We pride ourselves on our ability to manage complex projects efficiently and effectively, 
            ensuring timely delivery and exceptional results. Our efficient project management and execution 
            strategies ensure that we meet our timelines, keeping our clients' schedules on track.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
