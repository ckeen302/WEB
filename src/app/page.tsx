'use client';

import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      {/* Header Section */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <section id="services" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Preventative Care', icon: '🩺', description: 'Regular check-ups and vaccinations to keep your pet healthy.' },
                { title: 'Surgery', icon: '🏥', description: 'State-of-the-art surgical procedures for your pet\'s needs.' },
                { title: 'Emergency Services', icon: '🚑', description: '24/7 emergency care for your peace of mind.' },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-50 py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  name: 'Dr. Jane Smith', 
                  title: 'Senior Veterinarian', 
                  image: '/Image/injection.jpg', 
                  description: 'Dr. Smith has over 15 years of experience in veterinary medicine, specializing in small animal care.' 
                },
                { 
                  name: 'Dr. John Doe', 
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
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full mx-auto mb-4 w-32 h-32"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
                  <p className="text-gray-600 text-center mb-2">{member.title}</p>
                  <p className="text-gray-600 text-center">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
