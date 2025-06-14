import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-uno text-white rounded-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden bg-uno w-64 z-40 transition-transform duration-300 ease-in-out`}
      >
        <Navigation className="flex-col pt-16" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-uno text-white">
        <Navigation className="flex justify-evenly" />
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-quad">
        {children}
      </main>

      {/* Footer */}
      <footer className="text-center bg-uno text-white py-4">
        <div className="flex justify-center">
          <a
            rel="license"
            href="https://opensource.org/licenses/MIT/"
            className="hover:text-quad"
          >
            MIT License
          </a>
          . Copyright © {new Date().getFullYear()} Subhramit Basu Bhowmick
        </div>
      </footer>
    </div>
  );
}