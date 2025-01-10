'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, PawPrint } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Get In Touch Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="h-6 w-6 mb-2 text-gray-600" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-6 w-6 mb-2 text-gray-600" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">contact@velcipet.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-6 w-6 mb-2 text-gray-600" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-600">123 Pet Care Lane</p>
            </div>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">VelciPet</span>
            </Link>
            <p className="text-gray-600">Compassionate care for your beloved pets.</p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-primary">Services</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-primary">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
              <li><Link href="/appointment" className="text-gray-600 hover:text-primary">Make an Appointment</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">Preventative Care</li>
              <li className="text-gray-600">Surgery</li>
              <li className="text-gray-600">Emergency Services</li>
              <li className="text-gray-600">Pet Grooming</li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex justify-between items-center max-w-[120px]">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

