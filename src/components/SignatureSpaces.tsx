// src/components/SignatureSpaces.tsx
import React, { useState } from 'react';

interface Space {
  id: string;
  name: string;
  description: string;
  features: string[];
}

interface SignatureSpacesProps {
  grandBarImage: string;
  vipLoungeImage: string;
  boilerRoomImage: string;
  mainClubImage: string;
}

export default function SignatureSpaces({
  grandBarImage,
  vipLoungeImage,
  boilerRoomImage,
  mainClubImage,
}: SignatureSpacesProps) {
  const [activeSpace, setActiveSpace] = useState<string>('grand-bar');

  // Map each space ID to its corresponding background image prop
  const spaceImages: Record<string, string> = {
    'grand-bar': grandBarImage,
    'vip-lounge': vipLoungeImage,
    'sunset-lounge': boilerRoomImage,
    'main-club': mainClubImage,
  };

  const spaces: Space[] = [
    {
      id: 'grand-bar',
      name: 'The Grand Bar',
      description: 'The epicenter of energy. Crafted cocktails poured over hand-carved ice, surrounded by dark mahogany and brilliant gold accents.',
      features: ['Signature Mixology', 'Premium Spirits', 'Open Seating'],
    },
    {
      id: 'vip-lounge',
      name: 'VIP Room',
      description: 'Exclusive and untamed. Featuring our signature leopard motif, dedicated elite hosts, and total privacy for high-profile guests.',
      features: ['Dedicated Host', 'Bottle Service', 'Private Security'],
    },
    {
      id: 'sunset-lounge',
      name: 'Boiler Room',
      description: 'A sophisticated transition space. Perfect for more privacy and intimate conversation before the night escalates.',
      features: ['Ambient Lighting', 'Lounge Seating', 'Acoustic Sets'],
    },
    {
      id: 'main-club',
      name: 'The Main Club',
      description: 'Where the night comes alive. State-of-the-art acoustics, immersive fragmented lighting, and unforgettable international DJ sets.',
      features: ['International DJs', 'Immersive Lighting', 'Dance Floor'],
    }
  ];

  const currentSpace = spaces.find(s => s.id === activeSpace) || spaces[0];
  const currentBg = spaceImages[activeSpace] || grandBarImage;

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

          {/* Dynamic Display Area with Background Image */}
          <div className="lg:w-2/3 glass-panel p-8 md:p-12 relative overflow-hidden min-h-105 flex flex-col justify-center border border-white/10 shadow-2xl">
            
            {/* Background Image Layer */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 scale-105"
              style={{ backgroundImage: `url(${currentBg})` }}
            ></div>

            {/* Dark Readability Gradient Overlay */}
            <div className="absolute inset-0 z-1 bg-linear-to-t from-black/95 via-black/80 to-black/40"></div>
            
            {/* Content Container */}
            <div className="relative z-10" key={currentSpace.id}>
              <div className="animate-fade-in-up">
                <h3 className="text-3xl md:text-4xl font-serif mb-6 text-gold-light tracking-wide">
                  {currentSpace.name}
                </h3>
                
                <p className="text-gray-200 font-sans font-light leading-relaxed mb-10 text-lg md:text-xl">
                  {currentSpace.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {currentSpace.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 border border-gold-metallic/30 text-xs md:text-sm uppercase tracking-widest text-gray-200 bg-black/70 backdrop-blur-md"
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