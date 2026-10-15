
import React from 'react';
import { TALKS } from '../constants';

const Talks: React.FC = () => {
  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto animate-in fade-in duration-700">
      {/* Featured Talk */}
      <section className="mb-20">
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer shadow-2xl border border-white/10">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `linear-gradient(to top, #000 0%, transparent 80%), url('https://images.unsplash.com/photo-1540575861501-7ad058a292f3?q=80&w=1200&auto=format&fit=crop')` }}
          ></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3 z-10">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">Featured Talk</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight uppercase text-glow">The Architecture of Silence: Finding Quiet in a Loud World</h2>
            <p className="text-lg text-slate-300 mb-6 max-w-xl font-light">Architect Elena Rossi explores how physical spaces shape our internal peace and why we must design for stillness.</p>
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition-all uppercase tracking-widest">
              <span className="material-symbols-outlined">play_arrow</span>
              Watch Now
            </button>
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-2xl font-bold border-l-4 border-primary pl-4 uppercase tracking-tight">Past Talks Library</h3>
          <div className="flex items-center gap-2 text-slate-500">
            <span className="text-sm">Sort by:</span>
            <select className="bg-transparent border-none text-white text-sm font-medium focus:ring-0 cursor-pointer">
              <option>Most Recent</option>
              <option>Most Viewed</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {TALKS.map(talk => (
            <div key={talk.id} className="group flex flex-col gap-4">
              <div className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-white/5">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                  src={talk.thumbnailUrl} 
                  alt={talk.title}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-primary/40">
                    <span className="material-symbols-outlined text-4xl text-white">play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded">{talk.duration}</div>
              </div>
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{talk.speaker}</p>
                <h4 className="text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors cursor-pointer uppercase tracking-tight">{talk.title}</h4>
                <p className="text-slate-500 text-sm mt-2 line-clamp-2 leading-relaxed font-light">{talk.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4">
          <button className="bg-white/5 hover:bg-primary/20 text-white font-bold py-4 px-12 rounded-lg transition-all border border-white/10 hover:border-primary/50 uppercase tracking-widest text-sm">
            Load More Talks
          </button>
          <p className="text-slate-600 text-sm">Showing 3 of 142 talks</p>
        </div>
      </section>
    </div>
  );
};

export default Talks;
