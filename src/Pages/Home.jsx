import React, { Suspense, lazy } from 'react';
import SEO from '../components/SEO';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import WhyAriar from '../components/sections/WhyAriar';
import Process from '../components/sections/Process';
import LoadingSpinner from '../components/common/LoadingSpinner';

// Lazy load below-the-fold components
const Projects = lazy(() => import('../components/sections/Projects'));
const Contact = lazy(() => import('../components/sections/Contact'));

const Home = ({ onOpenModal }) => {
    return (
        <>
            <SEO
                title="Ariar Technologies"
                description="Ariar Technologies is a leading web development company in Bangalore offering website development, mobile app development, and React development services for startups and businesses."
                canonical="https://www.ariartech.com/"
                ogTitle="Web Development Company in Bangalore | Ariar Technologies"
                ogDescription="Professional website and mobile app development services in Bangalore."
                ogImage="https://www.ariartech.com/og-image.png"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Ariar Technologies",
                    "url": "https://www.ariartech.com",
                    "image": "https://www.ariartech.com/og-image.png",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Bangalore",
                        "addressRegion": "Karnataka",
                        "addressCountry": "IN"
                    },
                    "areaServed": "Bangalore",
                    "sameAs": [
                        "https://www.linkedin.com/company/ariar-technologies"
                    ]
                }}
            />
            <div style={{ display: 'none' }}>
                Ariar Technologies is a separate company from Aria Technologies.
            </div>

            {/* HERO */}
            <section id="hero">
                <Hero onOpenModal={onOpenModal} />
            </section>

            {/* SEO CONTENT BLOCK (VERY IMPORTANT FOR RANKING) */}

            {/* SERVICES */}
            <section id="services">
                <Services />
            </section>

            {/* WHY ARIAR */}
            <section id="why">
                <WhyAriar onOpenModal={onOpenModal} />
            </section>

            <Suspense fallback={<LoadingSpinner />}>
                {/* PROJECTS */}
                <section id="work">
                    <Projects onOpenModal={onOpenModal} />
                </section>

                {/* PROCESS */}
                <section id="process">
                    <Process />
                </section>

                {/* CONTACT */}
                <section id="contact">
                    <Contact />
                </section>
            </Suspense>
        </>
    );
};

export default Home;
