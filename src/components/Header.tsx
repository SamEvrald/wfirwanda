import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.jpeg" 
              alt="WFI Rwanda Logo" 
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain rounded-md"
            />
            <h1 className="text-lg sm:text-xl font-bold text-navy-deep">WFI Rwanda</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-navy-medium hover:text-navy-deep transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('mission')}
              className="text-navy-medium hover:text-navy-deep transition-colors duration-200"
            >
              Mission & Values
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="text-navy-medium hover:text-navy-deep transition-colors duration-200"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className="text-navy-medium hover:text-navy-deep transition-colors duration-200"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-navy-medium hover:text-navy-deep transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white/95 backdrop-blur-sm animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-navy-medium hover:text-navy-deep transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('mission')}
                className="text-left text-navy-medium hover:text-navy-deep transition-colors duration-200"
              >
                Mission & Values
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="text-left text-navy-medium hover:text-navy-deep transition-colors duration-200"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className="text-left text-navy-medium hover:text-navy-deep transition-colors duration-200"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-navy-medium hover:text-navy-deep transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;