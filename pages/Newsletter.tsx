
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Newsletter Subscription:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-48 pb-32 px-6 flex flex-col items-center justify-center animate-in zoom-in duration-500">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20">
          <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-center">Welcome to the <br/><span className="text-primary italic">Inside Circle</span></h1>
        <p className="text-neutral-400 text-center max-w-md font-light mb-10">
          Thank you for subscribing, {formData.firstName}. You'll be the first to know about speaker announcements, ticket drops, and exclusive event updates.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-primary text-xs font-bold uppercase tracking-[0.3em] hover:underline"
        >
          Back to Newsletter
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 px-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-16 space-y-4">
        <span className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase block mb-2">Stay Updated</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
          Beyond <span className="text-primary italic">Letters.</span>
        </h1>
        <p className="text-neutral-400 text-lg font-light max-w-lg mx-auto leading-relaxed">
          Join our global community and get exclusive insights into the ideas shaping our collective future.
        </p>
      </div>

      <div className="glass-effect p-8 md:p-12 rounded-2xl border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block font-bold transition-colors group-focus-within:text-primary">First Name</label>
              <input 
                required
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-5 py-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-neutral-800"
                placeholder="John"
              />
            </div>
            <div className="group">
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block font-bold transition-colors group-focus-within:text-primary">Last Name</label>
              <input 
                required
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-5 py-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-neutral-800"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="group">
            <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block font-bold transition-colors group-focus-within:text-primary">Email Address</label>
            <input 
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-5 py-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-neutral-800"
              placeholder="john.doe@example.com"
            />
          </div>

          <div className="group">
            <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block font-bold transition-colors group-focus-within:text-primary">Gender</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['Male', 'Female', 'Non-binary', 'Prefer not to say'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFormData({...formData, gender: option})}
                  className={`px-4 py-3 rounded-lg border text-[10px] font-bold uppercase tracking-tighter transition-all ${
                    formData.gender === option 
                    ? 'bg-primary border-primary text-white' 
                    : 'bg-black/20 border-white/10 text-neutral-500 hover:border-white/30'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-red-700 py-5 rounded-lg text-white font-bold tracking-[0.2em] uppercase transition-all shadow-[0_0_20px_rgba(242,13,13,0.3)] hover:shadow-[0_0_30px_rgba(242,13,13,0.5)] active:scale-[0.98] flex items-center justify-center gap-3"
            >
              Subscribe Now
              <span className="material-symbols-outlined text-sm">notifications_active</span>
            </button>
          </div>

          <p className="text-[9px] text-neutral-600 text-center uppercase tracking-widest leading-relaxed">
            By subscribing, you agree to receive communications regarding TEDx Deree ACG events. You can unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
