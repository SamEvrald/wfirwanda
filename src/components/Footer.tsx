const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Organization Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">WFI Rwanda</h3>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                Breaking the cycle of intergenerational poverty through holistic family well-being programs since 2019.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Our Programs
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Our Impact
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
              <p className="text-white/80 mb-2 text-sm sm:text-base">
                <a href="mailto:rwandawfi@gmail.com" className="hover:text-white transition-colors">
                  rwandawfi@gmail.com
                </a>
              </p>
              <p className="text-white/80 text-sm sm:text-base">
                Kigali, Rwanda
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-white/60 text-xs sm:text-sm">
              © 2025 Whole Family Initiative Rwanda (WFI Rwanda). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;