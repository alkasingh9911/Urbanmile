import React from 'react';

const Directors = () => {
  const directors = [
    {
      name: "Abhimanyu Singh",
      qualification: "B.E in Civil Engineering",
      experience: "35 years total (20+ years in Dubai and 15 years in India)",
      specialization: "Extensive experience in civil engineering and Interior works with a strong background in both international and domestic projects.",
      email: "Abhimanyu.singh@urbanmile.in",
      phone: "9873009679",
      image: "/images/abhimanyu-singh.png"
    },
    {
      name: "Nikhil Rathor",
      qualification: "",
      experience: "20 years",
      specialization: "Expertise in construction, interior works, MEP (Mechanical, Electrical, and Plumbing) execution, and project management Procurement. Successfully executed projects across various sectors, including hotel buildings, IT buildings, residential buildings, and educational buildings.",
      email: "Nikhil.rathor@urbanmile.in",
      phone: "9818711131 & 9818267004",
      image: "/images/nikhil-rathor.png"
    }
  ];

  return (
    <section id="directors" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Directors</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Led by highly experienced directors with decades of expertise in construction and interior works
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {directors.map((director, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-orange-500">
                  <img 
                    src={director.image} 
                    alt={director.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="w-full h-full bg-orange-500 flex items-center justify-center"><span class="text-5xl text-white font-bold">${director.name.charAt(0)}</span></div>`;
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">{director.name}</h3>
                <p className="text-orange-400 mt-2">Director</p>
              </div>
              
              <div className="p-6 space-y-4">
                {director.qualification && (
                  <div>
                    <h4 className="font-semibold text-gray-900">Qualification:</h4>
                    <p className="text-gray-600">{director.qualification}</p>
                  </div>
                )}
                
                <div>
                  <h4 className="font-semibold text-gray-900">Experience:</h4>
                  <p className="text-gray-600">{director.experience}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">Specialization:</h4>
                  <p className="text-gray-600">{director.specialization}</p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${director.email}`} className="text-orange-600 hover:text-orange-700">
                      {director.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${director.phone.split('&')[0].trim()}`} className="text-orange-600 hover:text-orange-700">
                      {director.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directors;
