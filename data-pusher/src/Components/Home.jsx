import React from "react";
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center py-16 md:py-24">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Seamless Data Delivery
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Push your valuable data to multiple destinations with reliability,
              speed, and security.
            </p>
            <button className="flex items-center bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 text-lg rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
              Get Started 
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
