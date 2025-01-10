'use client';

export default function OurTeamSection() {
  return (
    <section id="about" className="bg-gray-50 py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Us</h2>
        <p className="text-xl text-center mb-12">
          VelciPet is a veterinary clinic aiming to provide compassionate and professional care to pets. 
          We’ve been helping keep pets healthy for over 20 years.
        </p>
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: 'Dr. Richard Smith', 
              title: 'Senior Veterinarian', 
              image: '/Image/injection.jpg', 
              description: 'Dr. Smith has over 15 years of experience in veterinary medicine, specializing in small animal care.' 
            },
            { 
              name: 'Dr. Jimmy Doe', 
              title: 'Veterinary Surgeon', 
              image: '/Image/veterinarian-hugging-and-malamute.JPG', 
              description: 'Dr. Doe is our expert surgeon, with a focus on orthopedic and soft tissue procedures.' 
            },
            { 
              name: 'Sarah Johnson', 
              title: 'Veterinary Technician', 
              image: '/Image/x-ray-image-of-puppy.jpg', 
              description: 'Sarah ensures our patients receive the best care and comfort during their visits.' 
            },
          ].map((member, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md"
              style={{ width: '400px', height: '550px', margin: '0 auto' }} // Adjusted card size
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full mx-auto mb-6"
                style={{ width: '220px', height: '220px' }} // Increased image size
              />
              <h3 className="text-2xl font-semibold mb-4 text-center">{member.name}</h3>
              <p className="text-gray-600 text-center mb-2">{member.title}</p>
              <p className="text-gray-600 text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
