'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="bg-blue-50 py-20 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Compassionate Care for Your Pets</h1>
            <p className="text-xl mb-6">At VelciPet, we provide professional and loving care for your furry family members.</p>
            <Link href="/appointment">
              <Button size="lg">Schedule an Appointment</Button>
            </Link>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-blue-50 rounded-lg filter blur-xl transform scale-105"></div>
            <Image 
              src="/Image/hero.jpg" 
              alt="Happy pets" 
              width={650}  // Updated width from 600 to 650
              height={400} 
              className="rounded-lg shadow-md relative z-10" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
