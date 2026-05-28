import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    },
    navLinks: {
      display: 'flex',
      gap: '28px',
      listStyle: 'none',
      alignItems: 'center'
    },
    menuIcon: {
      display: isMobile ? 'block' : 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: '#1a1a1a',
      background: 'none',
      border: 'none'
    },
    mobileMenu: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '70px',
      left: 0,
      right: 0,
      background: 'white',
      padding: '20px',
      gap: '16px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    },
    link: {
      color: '#1a1a1a',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.logo} onClick={() => scrollToSection('home')}>
          portofolio
        </div>

        <button style={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>

        {!isMobile ? (
          <ul style={styles.navLinks}>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} style={styles.link}>beranda</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} style={styles.link}>tentang</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} style={styles.link}>skill</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} style={styles.link}>proyek</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} style={styles.link}>kontak</a></li>
            <li><a href="#certificate" onClick={(e) => { e.preventDefault(); scrollToSection('certificate'); }} style={styles.link}>sertifikat</a></li>
          </ul>
        ) : (
          isOpen && (
            <ul style={styles.mobileMenu}>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} style={styles.link}>beranda</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} style={styles.link}>tentang</a></li>
              <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} style={styles.link}>skill</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} style={styles.link}>proyek</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} style={styles.link}>kontak</a></li>
              <li><a href="#certificate" onClick={(e) => { e.preventDefault(); scrollToSection('certificate'); }} style={styles.link}>sertifikat</a></li>
            </ul>
          )
        )}
      </div>
    </nav>
  );
}

export default Navbar;