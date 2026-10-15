
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="block">
              <img 
                src="https://storage.googleapis.com/tagger-bucket/tagger-upload-1740417970897-tedx_deree_logo.png" 
                alt="TEDx Deree ACG" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-white/40 text-sm max-w-xs text-center md:text-left uppercase tracking-widest leading-relaxed mt-2">
              Exploring horizons through ideas worth spreading in the heart of Athens.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <Link to="/newsletter" className="group flex items-center gap-2 text-white/70 hover:text-primary transition-colors uppercase tracking-[0.2em] text-xs font-bold">
              <span className="material-symbols-outlined text-sm transition-transform group-hover:scale-125">mail</span>
              Subscribe to Newsletter
            </Link>
            <div className="flex gap-8">
              {['Instagram', 'Twitter', 'LinkedIn'].map((platform) => (
                <a 
                  key={platform} 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:border-primary/50 transition-colors group"
                >
                  <span className="material-symbols-outlined text-white/70 group-hover:text-primary">
                    {platform === 'Instagram' ? 'photo_camera' : platform === 'Twitter' ? 'share' : 'alternate_email'}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-10 text-center">
          <p className="text-white/20 text-xs uppercase tracking-widest leading-loose max-w-2xl mx-auto">
            This TEDx event is independently organized by Deree ACG students and faculty under license from TED. © 2026 TEDx Deree ACG. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
