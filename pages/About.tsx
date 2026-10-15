
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="text-center mb-24">
        <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">About TEDx Deree ACG</span>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
          Ideas Worth <br />
          <span className="text-primary italic">Spreading.</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
          Bringing the global TED mission to The American College of Greece. A platform for innovation, inspiration, and local impact.
        </p>
      </header>

      <div className="space-y-32">
        {/* TED Section */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs">The Movement</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight uppercase">What is TED?</h2>
            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed font-light">
              <p>
                TED is a nonprofit organization devoted to <span className="text-white font-medium">Ideas Worth Spreading</span>, often in the form of short talks delivered by leading thinkers and doers.
              </p>
              <p>
                Many of these talks are given at TED's annual conference in Vancouver, British Columbia, and made available, free, at TED.com.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <div className="p-4 bg-background-card border border-white/10 rounded-lg">
                <span className="text-primary text-3xl font-bold block mb-1">3k+</span>
                <span className="text-xs uppercase text-neutral-500 font-bold">Free Talks</span>
              </div>
              <div className="p-4 bg-background-card border border-white/10 rounded-lg">
                <span className="text-primary text-3xl font-bold block mb-1">100+</span>
                <span className="text-xs uppercase text-neutral-500 font-bold">Languages</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 rounded-xl overflow-hidden border border-white/10 aspect-square group">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop" 
              alt="TED Speaker"
            />
          </div>
        </section>

        {/* TEDx Section */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-xl overflow-hidden border border-white/10 aspect-[4/3] group">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop" 
              alt="Collaboration"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs">Independently Organized</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight uppercase">What is TED<span className="text-primary">x</span>?</h2>
            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed font-light">
              <p>In the spirit of ideas worth spreading, <span className="text-white font-medium">TEDx</span> is a program of local, self-organized events that bring people together to share a TED-like experience.</p>
              <p>At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These events are branded TEDx, where <span className="text-primary italic">x = independently organized TED event</span>.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
