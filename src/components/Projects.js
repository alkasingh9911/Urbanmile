import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Structure and Interior Works of R1 & R2 Blocks",
      client: "Ashoka University",
      value: "₹33,06,858.00 + GST",
      description: "Complete structure and interior renovation works for R1 & R2 blocks at Ashoka University campus.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop"
    },
    {
      title: "Structure and Interior Works of A1 Tower",
      client: "Ashoka University", 
      value: "₹47,90,682.00 + GST",
      description: "Comprehensive structural and interior design implementation for A1 Tower building.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop"
    },
    {
      title: "Interior Works of Lobbies for Tower No 16 & 17",
      client: "ORRIS INFRASTRUCTURE PVT.LTD",
      value: "₹32,34,091.00 + GST",
      description: "Premium lobby interior works for residential towers 16 & 17.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Projects</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Urban Mile Construction is committed to delivering excellence in every aspect of its operations, 
            from initial design to final execution, ensuring client satisfaction and project success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[60px]">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Client:</span> {project.client}
                  </p>
                  <p className="text-orange-600 font-bold text-lg">
                    {project.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Manpower Ready to Deploy</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">18</div>
              <p className="text-gray-600 mt-2">POP Workers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">20</div>
              <p className="text-gray-600 mt-2">Tile Work</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">8</div>
              <p className="text-gray-600 mt-2">IPS Flooring</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">12</div>
              <p className="text-gray-600 mt-2">Painters</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">4</div>
              <p className="text-gray-600 mt-2">Labour</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;