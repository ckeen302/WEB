'use client';

import { Trophy } from 'lucide-react';

export default function StatsSection() {
  return (
    <section id="stats" className="bg-white py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold">Voted Pets Magazine's Clinic of the Year 2023</h2>
        </div>
      </div>
    </section>
  );
}
