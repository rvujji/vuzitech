import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// --- SVG Icon Components ---
const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 7L12 12M12 22V12M22 7L12 12M17 4.5L7 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);
const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>);
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.4 1.4-2.8 2.1c.5 1.4 1.1 3.2 1.1 3.2s-2.1 1.1-3.5 1.1c-1.1 0-2.1-.5-3.5-1.4 0 0-.8 1.1-2.1 1.1-1.4 0-2.8-.8-3.5-1.4 0 0-1.4-1.8-2.8-3.5 0 0-2.1-4.2-2.8-5.6 0 0-1.4-1.4-2.8-2.1 0 0 .5-1.1 1.4-2.1 0 0 1.1-.8 2.1-.8 2.1 0 2.8.8 3.5 1.1 1.1 1.1 2.1 2.1 2.8 2.1H22z"/></svg>);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>);
const VisionIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const AnalyticsIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 20V10M18 20V4M6 20V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const MaintenanceIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.7 6.3C14.7 6.3 14.3 6.7 14.3 8.5C14.3 9.7 15.1 11.2 16.5 11.7C17.5 12.1 18.5 12.2 19.5 12.2C20.3 12.2 21 12.1 21.7 11.8C21.7 11.8 22.1 11.4 22.1 9.6C22.1 8.4 21.3 6.9 19.9 6.4C18.9 6 17.9 5.9 16.9 5.9C16.1 5.9 15.4 6 14.7 6.3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.7 11.3C9.7 11.3 9.3 11.7 9.3 13.5C9.3 14.7 10.1 16.2 11.5 16.7C12.5 17.1 13.5 17.2 14.5 17.2C15.3 17.2 16 17.1 16.7 16.8C16.7 16.8 17.1 16.4 17.1 14.6C17.1 13.4 16.3 11.9 14.9 11.4C13.9 11 12.9 10.9 11.9 10.9C11.1 10.9 10.4 11 9.7 11.3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.7 16.3C4.7 16.3 4.3 16.7 4.3 18.5C4.3 19.7 5.1 21.2 6.5 21.7C7.5 22.1 8.5 22.2 9.5 22.2C10.3 22.2 11 22.1 11.7 21.8C11.7 21.8 12.1 21.4 12.1 19.6C12.1 18.4 11.3 16.9 9.9 16.4C8.9 16 7.9 15.9 6.9 15.9C6.1 15.9 5.4 16 4.7 16.3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const ReportingIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 12h8M8 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);

// --- Page Sections ---
const Header = () => (
    <header className="header">
        <div className="header-content">
            <a href="#" className="logo">
                <LogoIcon />
                <span>VuziTech</span>
            </a>
            <nav className="nav-links">
                <a href="#features" className="nav-link">Platform</a>
                <a href="#why-us" className="nav-link">Why Us</a>
                <a href="#contact" className="nav-link">Contact</a>
            </nav>
            <a href="#contact" className="cta-button">Request a Demo</a>
        </div>
    </header>
);

const HeroSection = () => (
    <section className="hero">
        <div className="main-container">
            <div className="hero-content">
                <h1>The AI platform for critical infrastructure industries</h1>
                <p>VuziTech provides an end-to-end AI platform that empowers the world’s most critical infrastructure industries to predict failures and enhance safety.</p>
                <a href="#contact" className="cta-button" style={{padding: '1rem 2rem', fontSize: '1.1rem'}}>Request a Demo</a>
            </div>
        </div>
    </section>
);

const TrustedBy = () => (
    <section className="trusted-by">
        <div className="main-container">
            <p>TRUSTED BY THE WORLD'S LEADING INFRASTRUCTURE COMPANIES</p>
            <div className="logos-container">
                <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="10" y="25" fontFamily="Arial, sans-serif" fontSize="16" fill="currentColor">InfraGrid</text></svg>
                <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="10" y="25" fontFamily="Arial, sans-serif" fontSize="16" fill="currentColor">Apex Energy</text></svg>
                <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="10" y="25" fontFamily="Arial, sans-serif" fontSize="16" fill="currentColor">RailCorp</text></svg>
                <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="10" y="25" fontFamily="Arial, sans-serif" fontSize="16" fill="currentColor">Quantum INC</text></svg>
            </div>
        </div>
    </section>
);

const FeaturesSection = () => (
    <section id="features" className="section">
        <div className="main-container">
            <h2 className="section-title">Platform</h2>
            <p className="section-subtitle">Our end-to-end platform is built to solve the most complex operational challenges in critical infrastructure industries.</p>
            <div className="features-grid">
                <div className="feature-card">
                    <VisionIcon className="feature-icon" />
                    <h3>Computer Vision</h3>
                    <p>Leverage our state-of-the-art computer vision models to automate inspection and monitoring for your most critical assets.</p>
                </div>
                <div className="feature-card">
                    <AnalyticsIcon className="feature-icon" />
                    <h3>Data Integration & Analytics</h3>
                    <p>Our platform integrates seamlessly with your existing data sources to unlock powerful insights and drive operational efficiency.</p>
                </div>
                <div className="feature-card">
                    <MaintenanceIcon className="feature-icon" />
                    <h3>Predictive Maintenance</h3>
                    <p>Predict asset failures before they happen with our advanced machine learning models, minimizing downtime and reducing maintenance costs.</p>
                </div>
                <div className="feature-card">
                    <ReportingIcon className="feature-icon" />
                    <h3>Reporting & Compliance</h3>
                    <p>Automate reporting and ensure compliance with industry regulations using our customizable and auditable reporting tools.</p>
                </div>
            </div>
        </div>
    </section>
);

const WhyUsSection = () => (
    <section id="why-us" className="section">
        <div className="main-container">
            <div className="why-us-content">
                <div className="why-us-image">
                     <img src="https://images.unsplash.com/photo-1621947081720-86970823b77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Industrial robotic arm in action" />
                </div>
                <div className="why-us-text">
                    <h2>Why VuziTech</h2>
                    <p>Our team of AI experts and industry veterans have built the world’s most advanced AI platform for critical infrastructure. We are committed to delivering measurable results and a rapid return on investment for our customers.</p>
                    <a href="#contact" className="cta-button">Learn More</a>
                </div>
            </div>
        </div>
    </section>
);


const ContactSection = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="main-container">
                <h2 className="section-title">Contact Us</h2>
                <p className="section-subtitle">We'd love to hear from you. Reach out to schedule a demo or to learn more about our platform.</p>
                <div className="card">
                    <section className="contact-info">
                        <h3 className="heading">Contact Information</h3>
                        <p className="subheading">Our team is ready to assist. Reach out via phone, email, or visit our office.</p>
                        <div className="info-item"><PhoneIcon className="info-icon" /><span>+1 (555) 123-4567</span></div>
                        <div className="info-item"><MailIcon className="info-icon" /><span>contact@vuzitech.com</span></div>
                        <div className="info-item"><MapPinIcon className="info-icon" /><span>123 Innovation Drive, Tech City</span></div>
                        <div className="socials">
                            <a href="#" aria-label="Github" className="social-icon"><GithubIcon /></a>
                            <a href="#" aria-label="Twitter" className="social-icon"><TwitterIcon /></a>
                            <a href="#" aria-label="LinkedIn" className="social-icon"><LinkedinIcon /></a>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-column">
                <a href="#" className="logo">
                    <LogoIcon />
                    <span>VuziTech</span>
                </a>
                <p>The AI platform for critical infrastructure industries.</p>
            </div>
            <div className="footer-column">
                <h4>Company</h4>
                <ul className="footer-links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Platform</h4>
                <ul className="footer-links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">Integrations</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Connect</h4>
                <div className="socials" style={{marginTop: 0}}>
                    <a href="#" aria-label="Github" className="social-icon"><GithubIcon /></a>
                    <a href="#" aria-label="Twitter" className="social-icon"><TwitterIcon /></a>
                    <a href="#" aria-label="LinkedIn" className="social-icon"><LinkedinIcon /></a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} VuziTech Inc. All rights reserved.</p>
        </div>
    </footer>
)

// --- Main App Component ---
const App = () => {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <TrustedBy />
                <FeaturesSection />
                <WhyUsSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
