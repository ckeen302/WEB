'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PawPrint } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
            <PawPrint className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-primary">VelciPet</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="text-gray-600 hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-blue-600">About Us</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-blue-600">Services</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            <li><a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a></li>
          </ul>
        </nav>
        <Link href="/appointment">
          <Button>Make an Appointment</Button>
        </Link>
      </div>
    </header>
  );
}

