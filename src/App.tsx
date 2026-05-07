import { motion, useScroll, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, Menu, X, Star, Instagram, Linkedin, Twitter, Facebook, Mail, Phone, MapPin, ChevronDown } from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDestDropdownOpen, setIsDestDropdownOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeChildMenu, setActiveChildMenu] = useState<string | null>(null);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 100);
    });
  }, [scrollY]);

  const handleDestLeave = () => {
    setIsDestDropdownOpen(false);
    setActiveSubMenu(null);
    setActiveChildMenu(null);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12 py-6 flex justify-between items-center text-[16px] ${isScrolled ? 'bg-luxury-ivory/95 backdrop-blur-md border-b border-luxury-charcoal/5 py-4' : 'bg-transparent text-white'}`}
      id="navbar"
    >
      <div className="flex-1 hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.3em] font-medium">
        <div 
          className="relative group"
          onMouseEnter={() => setIsDestDropdownOpen(true)}
          onMouseLeave={handleDestLeave}
        >
          <button className="flex items-center gap-2 hover:text-luxury-gold transition-colors cursor-pointer outline-none uppercase font-black">
            DESTINATIONS <ChevronDown size={10} className={`transition-transform duration-500 ${isDestDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {isDestDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-full left-0 mt-4 w-72 bg-white/95 backdrop-blur-xl border border-luxury-charcoal/5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-visible p-2 z-50"
              >
                <div className="flex flex-col relative">
                  {/* Indian Weddings Level 1 */}
                  <div 
                    className="relative"
                    onMouseEnter={() => { setActiveSubMenu('indian'); setActiveChildMenu(null); }}
                  >
                    <div className="px-6 py-4 hover:bg-luxury-gold/5 rounded-xl transition-all group/item flex justify-between items-center cursor-pointer">
                      <span className={`text-luxury-charcoal tracking-[0.2em] uppercase transition-colors ${activeSubMenu === 'indian' ? 'text-luxury-gold' : ''}`}>Indian Weddings</span>
                      <ChevronRight size={12} className={`text-luxury-gold transition-all ${activeSubMenu === 'indian' ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                    </div>

                    {/* Indian Sub-Categories Level 2 */}
                    <AnimatePresence>
                      {activeSubMenu === 'indian' && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="absolute top-0 left-full ml-2 w-64 bg-white/95 backdrop-blur-xl border border-luxury-charcoal/5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-2"
                        >
                          <div 
                            className="relative"
                            onMouseEnter={() => setActiveChildMenu('rajasthan')}
                          >
                            <div className="px-6 py-4 hover:bg-luxury-gold/5 rounded-xl transition-all group/subitem flex justify-between items-center cursor-pointer">
                              <span className={`text-luxury-charcoal tracking-[0.1em] uppercase text-[10px] ${activeChildMenu === 'rajasthan' ? 'text-luxury-gold' : ''}`}>Rajasthan</span>
                              <ChevronRight size={10} className={`text-luxury-gold transition-all ${activeChildMenu === 'rajasthan' ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                            </div>
                            
                            {/* Rajasthan Child Level 3 */}
                            <AnimatePresence>
                              {activeChildMenu === 'rajasthan' && (
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -10 }}
                                  className="absolute top-0 left-full ml-2 w-48 bg-white/95 backdrop-blur-xl border border-luxury-charcoal/5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-2"
                                >
                                  <a href="#destinations" className="px-6 py-3 hover:bg-luxury-gold/5 rounded-lg block text-luxury-charcoal/70 hover:text-luxury-gold uppercase text-[9px] tracking-widest transition-colors font-bold">Jaipur</a>
                                  <a href="#destinations" className="px-6 py-3 hover:bg-luxury-gold/5 rounded-lg block text-luxury-charcoal/70 hover:text-luxury-gold uppercase text-[9px] tracking-widest transition-colors font-bold">Udaipur</a>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          
                          <div onMouseEnter={() => setActiveChildMenu(null)}>
                            <a href="#destinations" className="px-6 py-4 hover:bg-luxury-gold/5 rounded-xl block text-luxury-charcoal/70 hover:text-luxury-gold uppercase text-[10px] tracking-[0.1em] transition-colors">Goa</a>
                            <a href="#destinations" className="px-6 py-4 hover:bg-luxury-gold/5 rounded-xl block text-luxury-charcoal/70 hover:text-luxury-gold uppercase text-[10px] tracking-[0.1em] transition-colors">Kerala</a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* International Weddings Level 1 */}
                  <div 
                    className="relative"
                    onMouseEnter={() => { setActiveSubMenu('international'); setActiveChildMenu(null); }}
                  >
                    <div className="px-6 py-4 hover:bg-luxury-gold/5 rounded-xl transition-all group/item flex justify-between items-center cursor-pointer">
                      <span className={`text-luxury-charcoal tracking-[0.2em] uppercase transition-colors ${activeSubMenu === 'international' ? 'text-luxury-gold' : ''}`}>International Weddings</span>
                      <ChevronRight size={12} className={`text-luxury-gold transition-all ${activeSubMenu === 'international' ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                    </div>

                    {/* International Sub-Categories Level 2 */}
                    <AnimatePresence>
                      {activeSubMenu === 'international' && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="absolute top-0 left-full ml-2 w-64 bg-white/95 backdrop-blur-xl border border-luxury-charcoal/5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-2"
                        >
                          <div 
                            className="relative"
                            onMouseEnter={() => setActiveChildMenu('uae')}
                          >
                            <div className="px-6 py-4 hover:bg-luxury-gold/5 rounded-xl transition-all group/subitem flex justify-between items-center cursor-pointer">
                              <span className={`text-luxury-charcoal tracking-[0.1em] uppercase text-[10px] ${activeChildMenu === 'uae' ? 'text-luxury-gold' : ''}`}>UAE</span>
                              <ChevronRight size={10} className={`text-luxury-gold transition-all ${activeChildMenu === 'uae' ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                            </div>
                            
                            {/* UAE Child Level 3 */}
                            <AnimatePresence>
                              {activeChildMenu === 'uae' && (
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -10 }}
                                  className="absolute top-0 left-full ml-2 w-48 bg-white/95 backdrop-blur-xl border border-luxury-charcoal/5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-2"
                                >
                                  <a href="#destinations" className="px-6 py-3 hover:bg-luxury-gold/5 rounded-lg block text-luxury-charcoal/70 hover:text-luxury-gold uppercase text-[9px] tracking-widest transition-colors font-bold">Dubai</a>
                                  <a href="#destinations" className="px-6 py-3 hover:bg-luxury-gold/5 rounded-lg block text-luxury-charcoal/70 hover:text-luxury-gold uppercase text-[9px] tracking-widest transition-colors font-bold">Abu Dhabi</a>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          
                          <div onMouseEnter={() => setActiveChildMenu(null)}>
                            <a href="#destinations" className="px-6 py-4 hover:bg-luxury-gold/5 rounded-xl block text-luxury-charcoal/70 hover:text-luxury-gold uppercase text-[10px] tracking-[0.1em] transition-colors">Italy</a>
                            <a href="#destinations" className="px-6 py-4 hover:bg-luxury-gold/5 rounded-xl block text-luxury-charcoal/70 hover:text-luxury-gold uppercase text-[10px] tracking-[0.1em] transition-colors">USA</a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <a href="#experience" className="hover:text-luxury-gold transition-colors">The Process</a>
      </div>
      
      <div className="flex-shrink-0 text-center">
        <h1 className={`font-serif text-xl md:text-3xl tracking-tight transition-colors ${isScrolled ? 'text-luxury-charcoal' : 'text-white'}`}>
          ETHEREAL <span className="italic font-light">Celebrare</span>
        </h1>
      </div>

      <div className="flex-1 flex justify-end items-center gap-8">
        <div className={`hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.3em] font-medium transition-colors ${isScrolled ? 'text-luxury-charcoal' : 'text-white'}`}>
          <a href="#testimonials" className="hover:text-luxury-gold transition-colors">Testimonials</a>
          <a href="#inquiry" className="bg-luxury-gold/90 hover:bg-luxury-gold text-white px-6 py-3 rounded-full transition-all tracking-widest text-[10px]">Begin Your Experience</a>
        </div>
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-luxury-charcoal text-white z-[-1] flex flex-col items-center justify-center gap-8 text-xl font-serif">
          <a href="#destinations" onClick={() => setIsMenuOpen(false)}>DESTINATIONS</a>
          <a href="#signature" onClick={() => setIsMenuOpen(false)}>Celebrations</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>The Process</a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <a href="#inquiry" onClick={() => setIsMenuOpen(false)} className="text-luxury-gold italic">Begin Your Experience</a>
        </div>
      )}
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center" id="hero">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=2000" 
          alt="Luxury Wedding Setting"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-white/70 uppercase tracking-[0.5em] text-[10px] mb-2.5 block font-medium">Designers of Legacy Moments</span>
          <h2 className="font-serif text-5xl md:text-[95px] text-white leading-[1.1] mb-10 tracking-tighter">
            For couples who want their wedding to feel <br className="hidden md:block" />
            <span className="italic font-light text-white/90">unforgettable</span>, not expected.
          </h2>
          <p className="hidden md:block text-white/80 text-base md:text-[18px] max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
            The Event Designer is an elite destination planning house specializing in cinematic, ultra-luxury experiences across the world's most breathtaking landscapes.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.a 
              href="#inquiry"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-luxury-ivory text-luxury-charcoal px-10 py-5 rounded-full text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-luxury-gold hover:text-white transition-all shadow-2xl"
            >
              Begin Your Experience
            </motion.a>
            <motion.a 
              href="#signature"
              whileHover={{ x: 5 }}
              className="text-white flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-medium group"
            >
              View Celebrations <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform text-white/50" />
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-[1px] h-12 bg-white/20 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const publications = [
    { name: "Vogue", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Vogue_Logo.svg" },
    { name: "The Lane", logo: "https://thelane.com/wp-content/themes/the-lane/assets/images/logo.svg" },
    { name: "Harper's Bazaar", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Harper%27s_Bazaar_logo.svg" },
    { name: "Martha Stewart", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Martha_Stewart_Living_Logo.svg" },
    { name: "Elle Decor", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Elle_logo.svg" }
  ];

  return (
    <div className="bg-luxury-ivory border-y border-luxury-charcoal/5 py-16">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h4 className="text-luxury-charcoal/40 uppercase tracking-[0.3em] text-[9px] font-bold mb-8 text-center md:text-left">Featured Publication Presence</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-10 md:gap-20 items-center opacity-60">
              {publications.map(pub => (
                <div key={pub.name} className="h-4 md:h-6 flex items-center grayscale hover:grayscale-0 transition-all duration-700 hover:opacity-100 opacity-70 cursor-default">
                   <img 
                    src={pub.logo} 
                    alt={pub.name} 
                    className="h-full w-auto object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="hidden font-serif italic text-lg text-luxury-charcoal whitespace-nowrap">{pub.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-16 text-center border-l border-luxury-charcoal/10 pl-12 hidden lg:flex">
             <div>
                <span className="block font-serif text-3xl text-luxury-gold">12</span>
                <span className="text-[9px] uppercase tracking-widest text-luxury-charcoal/40 font-bold">Countries</span>
             </div>
             <div>
                <span className="block font-serif text-3xl text-luxury-gold">150+</span>
                <span className="text-[9px] uppercase tracking-widest text-luxury-charcoal/40 font-bold">Unforgettable</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DestinationSection = () => {
  const destinations = [
    { name: "Amalfi Coast", country: "Italy", img: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=800" },
    { name: "Oia, Santorini", country: "Greece", img: "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&q=80&w=800" },
    { name: "Uluwatu", country: "Bali", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800" },
    { name: "Paris", country: "France", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section className="py-32 px-12 bg-luxury-cream" id="destinations">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-[620px]">
            <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">The Collection</span>
            <h2 className="font-serif text-5xl md:text-7xl text-luxury-charcoal leading-[1.1] tracking-tight md:w-[620px]">
              Iconic landscapes <br /> for your <span className="italic font-light text-luxury-gold/70">legacy moment.</span>
            </h2>
          </div>
          <p className="text-left md:text-right text-luxury-charcoal/60 max-w-sm text-sm leading-relaxed font-light tracking-wide mb-[50px]">
            We specialize in exclusive buyouts of historic villas, private islands, and dramatic cliffside estates across the globe. Each destination is chosen for its cinematic potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, i) => (
            <motion.div 
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="relative group h-[550px] overflow-hidden rounded-3xl cursor-pointer"
            >
              <img 
                src={dest.img} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/90 via-transparent to-transparent flex flex-col justify-end p-10 transition-all duration-700 group-hover:via-luxury-charcoal/20">
                <span className="text-white/50 uppercase tracking-[0.2em] text-[9px] font-bold mb-2">{dest.country}</span>
                <h3 className="text-white font-serif text-3xl tracking-wide group-hover:text-luxury-gold transition-colors">{dest.name}</h3>
                <div className="h-0 group-hover:h-12 overflow-hidden transition-all duration-700 mt-4 opacity-0 group-hover:opacity-100">
                  <span className="text-white/70 text-[10px] uppercase tracking-widest font-medium flex items-center gap-3">Explore Venue <ChevronRight size={12} /></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const celebrations = [
    {
      title: "The Bloom of Eternity",
      location: "Villa d'Este, Lake Como",
      desc: "A three-day affair for 120 guests, transforming a historic 16th-century estate into an ethereal garden. Our focus was on sensory immersion bespoke perfumes and dawn-blooming floral architecture.",
      img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1600",
      detailImg: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
      stats: { atmosphere: "Ethereal Romance", budget: "Ultra-Premium" }
    },
    {
      title: "Cliffside Serenade",
      location: "Ravello, Amalfi Coast",
      desc: "Defying gravity on the Ravello cliffs, we engineered a suspended glass aisle that gave the illusion of walking on the Mediterranean. A celebration of architecture and light.",
      img: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1600",
      detailImg: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=600",
      stats: { atmosphere: "Modern Architectural", focus: "Architecture & Light" }
    }
  ];

  return (
    <section className="py-[110px] bg-luxury-charcoal text-luxury-cream selection:bg-luxury-gold overflow-hidden" id="signature">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-24 md:mb-40 gap-8">
          <div>
            <span className="text-luxury-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-6 px-1">Selected Works</span>
            <h2 className="font-serif text-6xl md:text-9xl leading-none tracking-tighter">Signature <br /><span className="italic font-light text-luxury-gold/70">Celebrations.</span></h2>
          </div>
          <div className="max-w-xs pt-4 md:pt-14 text-right">
            <p className="text-left md:text-right text-white/40 text-[10px] uppercase tracking-[0.3em] font-medium leading-relaxed">
              Curating moments that resonate through generations. Each event is a unique architectural feat of emotion.
            </p>
          </div>
        </div>
        
        <div className="space-y-24 md:space-y-64">
          {celebrations.map((item, i) => (
            <div key={item.title} className="relative">
              {/* Vertical Title background text */}
              <div className={`absolute -top-20 ${i % 2 === 0 ? '-right-10' : '-left-10'} vertical-text text-[120px] font-serif italic text-white/5 select-none pointer-events-none hidden xl:block uppercase tracking-widest`}>
                {item.location.split(',')[1]}
              </div>

              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-32 items-center`}>
                {/* Main Image Frame */}
                <div className="w-full lg:w-[65%] relative">
                  <motion.div 
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="relative aspect-[4/5] md:aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl"
                  >
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 2 }}
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  
                  {/* Floating Detail Overlay */}
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    viewport={{ once: true }}
                    className={`absolute -bottom-20 ${i % 2 === 0 ? '-left-10' : '-right-10'} w-48 md:w-80 aspect-[3/4] rounded-xl overflow-hidden border-[8px] border-luxury-charcoal shadow-2xl hidden md:block z-20`}
                  >
                    <img src={item.detailImg} alt="Detail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </motion.div>
                </div>

                {/* Content Block */}
                <div className={`w-full lg:w-[35%] flex flex-col pt-4 lg:pt-0 ${i === 0 ? 'lg:mt-[-60px]' : i === 1 ? 'lg:mt-[-145px]' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-luxury-gold font-serif text-3xl italic mb-6 block">{item.location}</span>
                    <h3 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight tracking-tight">{item.title}</h3>
                    
                    <div className="w-12 h-[1px] bg-luxury-gold/50 mb-10"></div>
                    
                    <p className="text-white/60 font-light text-base md:text-lg leading-relaxed mb-16 tracking-wide italic">
                      "{item.desc}"
                    </p>

                    <div className="grid grid-cols-2 gap-8 md:gap-12 pb-8 md:pb-16">
                      {Object.entries(item.stats).map(([k, v]) => (
                        <div key={k}>
                          <span className="block text-luxury-gold/50 uppercase tracking-[0.2em] text-[9px] mb-3 font-bold">{k}</span>
                          <span className="text-xs uppercase tracking-widest text-white/90 font-medium">{v}</span>
                        </div>
                      ))}
                    </div>

                    <motion.button 
                      whileHover={{ letterSpacing: "0.5em" }}
                      className="flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold group transition-all"
                    >
                      Explore Celebration <ArrowRight size={16} />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-[80px] text-center">
           <motion.a 
            href="#inquiry"
            whileHover={{ scale: 1.05 }}
            className="inline-block border border-white/10 hover:border-luxury-gold px-10 py-5 rounded-full text-[10px] uppercase tracking-[0.5em] font-bold text-white transition-all"
           >
            View Full Archive
           </motion.a>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { title: "The Discovery", desc: "Understanding the subtle nuances of your vision and your history together." },
    { title: "Creative Concept", desc: "Creating a cinematic visual narrative, from architectural sketches to lighting scores." },
    { title: "Refined Execution", desc: "Seamless global coordination, managing elite vendors and private transport." },
    { title: "Legacy Celebration", desc: "Flawless on-site execution where you and your guests are the primary focus." }
  ];

  return (
    <section className="py-32 bg-luxury-cream overflow-hidden" id="experience">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="hidden lg:block relative order-2 lg:order-1">
            <div className="aspect-[3/4] overflow-hidden rounded-[100px] border-[15px] border-luxury-gold/30 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" 
                alt="Process Visual"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-luxury-gold/10 rounded-full blur-[80px] -z-0"></div>
            <div className="absolute top-1/2 -left-24 vertical-text text-[9px] uppercase tracking-[1em] font-bold text-luxury-gold/40 select-none">
              EXPERIENCE ARCHITECTURE & DESIGN
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-6">The Methodology</span>
            <h2 className="font-serif text-5xl md:text-7xl mb-16 text-luxury-charcoal leading-tight tracking-tight">The Path to <br /><span className="italic font-light text-luxury-gold/70">Perfection.</span></h2>
            
            <div className="space-y-16">
              {steps.map((step, i) => (
                <div key={step.title} className="flex gap-10 group">
                  <span className="font-serif text-4xl italic text-luxury-gold group-hover:text-luxury-gold transition-all duration-700 select-none">0{i+1}.</span>
                  <div>
                    <h4 className="text-xl font-serif text-luxury-charcoal mb-3 group-hover:text-luxury-gold transition-colors">{step.title}</h4>
                    <p className="text-luxury-charcoal/50 font-light leading-loose max-w-sm text-sm tracking-wide">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "The Event Designer didn't just plan a wedding; they curated an experience that felt like a film. Every frame of our weekend in Ravello was perfect. Absolute architectural brilliance.",
      author: "Alexandra & Julian",
      type: "Destination Wedding",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=400"
    },
    {
      quote: "The level of hospitality and the sheer scale of the production was something our guests are still talking about. Absolutely flawless execution and discretion.",
      author: "The Windsors",
      type: "Private Estate Gala",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400"
    },
    {
      quote: "Meticulous planning and artistic vision. They transformed a historic villa into a surreal dreamscape that left every guest speechless. Truly elite service.",
      author: "Sanjana & Vikram",
      type: "Signature Celebration",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=400"
    },
    {
      quote: "Professionalism at its peak. Managing a three-day international celebration with such grace is a rare talent. They are the architects of memory.",
      author: "James & Marcus",
      type: "Legacy Union",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section className="pt-[110px] pb-[120px] bg-luxury-ivory border-t border-luxury-charcoal/5 relative overflow-hidden" id="testimonials">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #8b7355 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20 items-start">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:sticky lg:top-32">
            <h2 className="font-serif text-5xl md:text-7xl text-luxury-charcoal leading-[0.95] mb-8 lg:-mt-3">
              Whispers of <br />
              <span className="italic font-light text-luxury-gold/70">Legacy.</span>
            </h2>
            <div className="w-16 h-[2px] bg-luxury-gold mb-10"></div>
            <p className="text-luxury-charcoal/50 font-light leading-relaxed max-w-sm text-sm tracking-wide mb-8">
              What our clients say about their experience with The Event Designer. We pride ourselves on absolute devotion to every detail.
            </p>
            <div className="flex gap-1.5 text-luxury-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
          </div>

          {/* Right Column: Grid of Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white p-12 lg:p-14 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-luxury-charcoal/5 flex flex-col h-full group hover:shadow-2xl hover:shadow-luxury-gold/5 transition-[box-shadow,background-color,border-color] duration-700"
              >
                <p className="font-serif text-lg text-luxury-charcoal/70 leading-relaxed italic mb-10 flex-grow">
                  "{t.quote}"
                </p>
                
                <div className="h-[1px] w-full bg-luxury-charcoal/5 mb-10"></div>
                
                <div>
                  <h4 className="font-serif text-xl text-luxury-charcoal mb-2 group-hover:text-luxury-gold transition-colors">{t.author}</h4>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-luxury-charcoal/40 font-bold block">{t.type}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const InquirySection = () => {
  return (
    <section className="py-32 bg-luxury-charcoal text-luxury-cream" id="inquiry">
      <div className="max-w-4xl mx-auto px-12 text-center">
        <div className="mb-20">
          <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-6">Now Accepting Commissions for 2026/27</span>
          <h2 className="font-serif text-5xl md:text-8xl mb-8 tracking-tighter text-white">Apply for your <span className="italic font-light text-luxury-gold/70">experience.</span></h2>
          <p className="text-white/40 font-light max-w-xl mx-auto leading-loose text-sm tracking-widest">
            We accept a limited number of clients per year to ensure absolute devotion to every detail.
          </p>
        </div>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 text-left">
          <div className="flex flex-col gap-4 group">
            <label className="text-[9px] uppercase tracking-widest font-black text-luxury-gold px-1">Your Full Names</label>
            <input type="text" placeholder="Elena & James" className="bg-white/5 border-b border-white/10 focus:border-luxury-gold outline-none p-4 font-serif text-xl transition-all duration-500 placeholder:text-white/30 text-white" />
          </div>
          <div className="flex flex-col gap-4 group">
            <label className="text-[9px] uppercase tracking-widest font-black text-luxury-gold px-1">Identity (Email)</label>
            <input type="email" placeholder="private@residence.com" className="bg-white/5 border-b border-white/10 focus:border-luxury-gold outline-none p-4 font-serif text-xl transition-all duration-500 placeholder:text-white/30 text-white" />
          </div>
          <div className="flex flex-col gap-4 group">
            <label className="text-[9px] uppercase tracking-widest font-black text-luxury-gold px-1">Desired Coastline</label>
            <input type="text" placeholder="Lake Como, Italy" className="bg-white/5 border-b border-white/10 focus:border-luxury-gold outline-none p-4 font-serif text-xl transition-all duration-500 placeholder:text-white/30 text-white" />
          </div>
          <div className="flex flex-col gap-4 group">
            <label className="text-[9px] uppercase tracking-widest font-black text-luxury-gold px-1">Intended Scale</label>
            <select className="bg-white/5 border-b border-white/10 focus:border-luxury-gold outline-none py-4 px-3 font-serif text-xl transition-all duration-500 appearance-none cursor-pointer text-white">
              <option className="bg-luxury-charcoal">Intimate (Under 50)</option>
              <option className="bg-luxury-charcoal">Signature (50 - 150)</option>
              <option className="bg-luxury-charcoal">Grand (150+)</option>
            </select>
          </div>
          <div className="flex flex-col gap-4 md:col-span-2 group">
            <label className="text-[9px] uppercase tracking-widest font-black text-luxury-gold px-1">The Dream / Your Vision</label>
            <textarea rows={4} placeholder="Describe the atmosphere you wish to evoke..." className="bg-white/5 border-b border-white/10 focus:border-luxury-gold outline-none p-4 font-serif text-xl transition-all duration-500 resize-none placeholder:text-white/30 text-white"></textarea>
          </div>
          
          <div className="md:col-span-2 mt-[35px] flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-luxury-charcoal px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-luxury-gold hover:text-white transition-all duration-500 shadow-2xl"
            >
              Request Access
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-luxury-charcoal text-white/50 py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <div className="group cursor-pointer">
              <h2 className="font-serif text-3xl text-white tracking-widest mb-2 transition-colors group-hover:text-luxury-gold">ETHEREAL <span className="italic font-light text-white/70">Celebrare</span></h2>
              <span className="text-[8px] uppercase tracking-[0.5em] font-extrabold text-white/40 block">Global Prestige Wedding Architecture</span>
            </div>
            <p className="text-sm font-light leading-relaxed max-w-xs italic text-white/30">
              Curating cinematic narratives of love across the world's most iconic landscapes with absolute discretion and architectural precision.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-luxury-gold transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-white/40 hover:text-luxury-gold transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-white/40 hover:text-luxury-gold transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="text-white/40 hover:text-luxury-gold transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-luxury-gold uppercase tracking-[0.3em] text-[9px] font-black underline underline-offset-8 mb-2">Connect Directly</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:concierge@etherealcelebrare.com" className="flex items-center gap-4 text-xs font-medium text-white/70 hover:text-luxury-gold transition-colors">
                <Mail size={14} className="text-luxury-gold/50" /> concierge@etherealcelebrare.com
              </a>
              <div className="grid grid-cols-1 gap-4 mt-2">
                <div className="flex flex-col gap-2">
                  <span className="text-[8px] uppercase tracking-widest text-white/20 font-bold">EMEA (London)</span>
                  <a href="tel:+442079460123" className="flex items-center gap-3 text-xs font-mono text-white/60 hover:text-white transition-colors">
                    <Phone size={12} className="text-luxury-gold/30" /> +44 20 7946 0123
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[8px] uppercase tracking-widest text-white/20 font-bold">Southern Europe (Milan)</span>
                  <a href="tel:+390212345678" className="flex items-center gap-3 text-xs font-mono text-white/60 hover:text-white transition-colors">
                    <Phone size={12} className="text-luxury-gold/30" /> +39 02 1234 5678
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[8px] uppercase tracking-widest text-white/20 font-bold">South Asia (Mumbai)</span>
                  <a href="tel:+912212345678" className="flex items-center gap-3 text-xs font-mono text-white/60 hover:text-white transition-colors">
                    <Phone size={12} className="text-luxury-gold/30" /> +91 22 1234 5678
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[8px] uppercase tracking-widest text-white/20 font-bold">Middle East (Dubai)</span>
                  <a href="tel:+97141234567" className="flex items-center gap-3 text-xs font-mono text-white/60 hover:text-white transition-colors">
                    <Phone size={12} className="text-luxury-gold/30" /> +971 4 123 4567
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* India Studio */}
          <div className="flex flex-col gap-6">
            <h4 className="text-luxury-gold uppercase tracking-[0.3em] text-[9px] font-black underline underline-offset-8 mb-2">India Studio</h4>
            <div className="flex gap-4 items-start">
              <MapPin size={16} className="text-luxury-gold/40 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-white/70 font-medium leading-relaxed">
                  The Oberoi, Nariman Point <br />
                  Mumbai, Maharashtra 400021 <br />
                  India
                </p>
                <button className="text-[9px] uppercase tracking-[0.2em] text-luxury-gold font-bold mt-4 border-b border-luxury-gold/20 hover:border-luxury-gold transition-all">Private Parking & Entrance</button>
              </div>
            </div>
          </div>

          {/* UAE Studio */}
          <div className="flex flex-col gap-6">
            <h4 className="text-luxury-gold uppercase tracking-[0.3em] text-[9px] font-black underline underline-offset-8 mb-2">UAE Studio</h4>
            <div className="flex gap-4 items-start">
              <MapPin size={16} className="text-luxury-gold/40 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-white/70 font-medium leading-relaxed">
                  Boulevard Plaza, Tower 1 <br />
                  Burj Khalifa District, Downtown <br />
                  Dubai, UAE
                </p>
                <button className="text-[9px] uppercase tracking-[0.2em] text-luxury-gold font-bold mt-4 border-b border-luxury-gold/20 hover:border-luxury-gold transition-all">Heliport Access Available</button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/5 mb-12"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] uppercase tracking-[0.3em] font-medium text-white/20">
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Concierge</a>
            <a href="#" className="hover:text-white transition-colors">Legal Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          <span>© 2026 The Event Designer. Masters of Global Celebration.</span>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative min-h-screen bg-luxury-cream text-luxury-charcoal selection:bg-luxury-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <DestinationSection />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialSection />
        <InquirySection />
      </main>
      <Footer />
    </div>
  );
}
