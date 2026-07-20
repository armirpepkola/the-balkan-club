// src/components/SignatureSpaces.tsx
import React, { useState } from 'react';

// Strict typing for our data model
interface Space {
  id: string;
  name: string;
  description: string;
  features: string[];
}

// Data Array - Easily extendable for Phase 2 Database Integration
const spaces: Space[] = [
  {
    id: 'grand-bar',
    name: 'The Grand Bar',
    description: 'The epicenter of energy. Crafted cocktails poured over hand-carved ice, surrounded by dark mahogany and brilliant gold accents.',
    features: ['Signature Mixology', 'Premium Spirits', 'Open Seating'],
  },
  {
    id: 'vip-lounge',
    name: 'VIP Lounge',
    description: 'Exclusive and untamed. Featuring our signature leopard motif, dedicated elite hosts, and total privacy for high-profile guests.',
    features: ['Dedicated Host', 'Bottle Service', 'Private Security'],
  },
  {
    id: 'sunset-lounge',
    name: 'The Sunset Lounge',
    description: 'A sophisticated transition space. Perfect for early evening networking and intimate conversation before the night escalates.',
    features: ['Ambient Lighting', 'Lounge Seating', 'Acoustic Sets'],
  },
  {
    id: 'main-club',
    name: 'The Main Club',
    description: 'Where the night comes alive. State-of-the-art acoustics, immersive fragmented lighting, and unforgettable international DJ sets.',
    features: ['International DJs', 'Immersive Lighting', 'Dance Floor'],
  }
];

export default function SignatureSpaces() {
  const [activeSpace, setActiveSpace] = useState<string>(spaces[0].id);

  const currentSpace = spaces.find(s => s.id === activeSpace) || spaces[0];

  return (
    <section id="spaces" className="py-32 px-4 bg-obsidian text-white relative z-20 border-t border-gold-metallic/10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-4">
            Signature <span className="text-gradient-gold">Spaces</span>
          </h2>
          <p className="text-gray-400 font-sans font-light max-w-2xl mx-auto text-lg">
            Explore the distinct environments curated for your ultimate nightlife experience.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Interactive Navigation List */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {spaces.map((space) => (
              <button
                key={space.id}
                onClick={() => setActiveSpace(space.id)}
                className={`text-left px-6 py-5 font-serif uppercase tracking-wider transition-all duration-300 border-l-2 ${
                  activeSpace === space.id
                    ? 'border-gold-metallic bg-gold-metallic/10 text-gold-metallic shadow-inner'
                    : 'border-white/5 text-gray-500 hover:text-gray-300 hover:bg-white/5'
                }`}
              >
                {space.name}
              </button>
            ))}
          </div>

          {/* Dynamic Display Area */}
          <div className="lg:w-2/3 glass-panel p-8 md:p-12 relative overflow-hidden min-h-105 flex flex-col justify-center border border-white/5 shadow-2xl">
            
            {/* Phase 1: High-End Texture Placeholder */}
            <div className="absolute inset-0 z-0 bg-linear-to-br from-crimson-dark/20 via-black to-obsidian opacity-80 pointer-events-none"></div>
            
            {/* 
              Architect's Note for Phase 2: 
              Once high-res images are approved, map the selected state to an actual <img/> or Astro <Image/> tag here. 
              Because this is a React component, we will pass optimized image URLs as props from the parent Astro file to maintain Vite build optimizations.
            */}
            
            {/* Content Container (Key changes force re-render for CSS animation) */}
            <div className="relative z-10" key={currentSpace.id}>
              <div className="animate-fade-in-up">
                <h3 className="text-3xl md:text-4xl font-serif mb-6 text-gold-light tracking-wide">
                  {currentSpace.name}
                </h3>
                
                <p className="text-gray-300 font-sans font-light leading-relaxed mb-10 text-lg md:text-xl">
                  {currentSpace.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {currentSpace.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 border border-gold-metallic/30 text-xs md:text-sm uppercase tracking-widest text-gray-300 bg-black/50 backdrop-blur-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}