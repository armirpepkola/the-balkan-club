import { useState, useEffect } from 'react';

const spaces = [
  {
    id: 'main-club',
    name: 'The Main Club',
    desc: 'The beating heart of The Balkan Club. State-of-the-art acoustics, immersive lighting, and an atmosphere charged with pure adrenaline.'
  },
  {
    id: 'vip-lounge',
    name: 'VIP Lounge',
    desc: 'Elevated above the main floor, offering panoramic views of the energy below while maintaining absolute exclusivity and luxury.'
  },
  {
    id: 'grand-bar',
    name: 'The Grand Bar',
    desc: 'A masterpiece of mixology and design. Dark obsidian marble meets pure gold accents under the soft glow of crystal chandeliers.'
  },
  {
    id: 'sunset-lounge',
    name: 'The Sunset Lounge',
    desc: 'A slightly more intimate affair. Dark glassmorphism, subtle leopard prints, and velvet seating for deep conversations.'
  }
];

export default function SignatureSpaces() {
  const [activeSpace, setActiveSpace] = useState(spaces[0]);

  // DIAGNOSTIC HOOK: This will ONLY run if React successfully hydrates on the client
  useEffect(() => {
    console.log("🚀 REACT HYDRATION SUCCESSFUL: Signature Spaces is interactive.");
  }, []);

  return (
    <section className="py-24 px-4 bg-obsidian relative border-t border-white/5 z-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-white mb-4 tracking-wide uppercase">
            Signature Spaces
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex lg:flex-col overflow-x-auto gap-4 lg:w-1/3 pb-4 lg:pb-0 scrollbar-hide">
            {spaces.map((space) => (
              <button
                key={space.id}
                onClick={() => {
                  console.log(`Clicked: ${space.name}`); // DIAGNOSTIC LOG
                  setActiveSpace(space);
                }}
                className={`whitespace-nowrap text-left px-6 py-4 border-l-2 transition-all duration-300 font-sans tracking-wide uppercase text-sm ${
                  activeSpace.id === space.id
                    ? 'border-gold text-gold bg-white/5'
                    : 'border-white/10 text-gray-500 hover:text-white hover:border-white/30 hover:bg-white/5'
                }`}
              >
                {space.name}
              </button>
            ))}
          </div>

          <div className="lg:w-2/3 h-100 relative rounded-sm overflow-hidden border border-white/10 bg-linear-to-br from-obsidian via-[#2a0000] to-obsidian flex items-end p-8 transition-all duration-500">
            <div className="absolute inset-0 bg-black/40 z-0"></div>
            <div className="relative z-10 animate-fade-in-up" key={activeSpace.id}>
              <h3 className="text-2xl font-display text-gold mb-3 drop-shadow-md">
                {activeSpace.name}
              </h3>
              <p className="text-gray-300 font-sans text-sm md:text-base max-w-lg leading-relaxed">
                {activeSpace.desc}
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}