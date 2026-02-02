import React, { useState, useEffect } from 'react';
import Button from '../../common/Button';
import MobileMenu from './MobileMenu';
import '../../../styles/components.css';

const Header = ({ onOpenModal }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const navItems = [
        { id: 'work', label: 'Work' },
        { id: 'process', label: 'Process' },
        { id: 'why', label: 'Why Us' },
        { id: 'services', label: 'Services' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'contact', label: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            
            // Update active section based on scroll position
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;
            
            for (let i = sections.length - 1; i >= 0; i--) {
                if (sections[i] && scrollPosition >= sections[i].offsetTop) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerHeight = 70;
            const elementPosition = element.offsetTop - headerHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
                    : 'bg-transparent py-5'
            }`}>
                <div className="container flex items-center justify-between">
                    {/* Logo */}
                    <a 
                        href="#" 
                        className="flex items-center gap-2 group"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        <div className="relative">
                            <span className="font-space font-bold text-2xl text-primary">
                                AriarTech
                            </span>
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`nav-link text-sm font-medium transition-all duration-300 ${
                                    activeSection === item.id 
                                        ? 'text-accent scale-105' 
                                        : 'text-text hover:text-accent'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <Button 
                            variant="primary"
                            size="sm"
                            onClick={onOpenModal}
                            className="ml-4"
                        >
                            Get Free Quote
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn lg:hidden flex flex-col justify-center items-center w-10 h-10 relative"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                            isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                        }`} />
                        <span className={`block w-6 h-0.5 bg-primary my-1.5 transition-all duration-300 ${
                            isMenuOpen ? 'opacity-0' : ''
                        }`} />
                        <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                            isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                        }`} />
                    </button>
                </div>
            </header>

            <MobileMenu 
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                onOpenModal={onOpenModal}
                navItems={navItems}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
            />
        </>
    );
};

export default Header;