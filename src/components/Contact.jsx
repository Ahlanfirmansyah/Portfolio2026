import React, { useState, useEffect } from 'react';

function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const socials = [
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/ahlln.n?igsh=MXhwdDRtemNhMDMyMg==',
      color: '#E4405F',
      icon: () => (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm4.5-8.5a1 1 0 110-2 1 1 0 010 2z"/>
        </svg>
      )
    },
    { 
      name: 'Email', 
      url: 'mohahlanfirmansya@example.com',
      color: '#EA4335',
      isEmail: true,
      icon: () => (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    },
    { 
      name: 'WhatsApp', 
      url: 'https://wa.me/6285888526072',
      color: '#25D366',
      icon: () => (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zm-.03 15.17c-1.49 0-2.94-.4-4.2-1.16l-.3-.18-3.12.82.83-3.04-.2-.31c-.8-1.29-1.22-2.78-1.22-4.29 0-4.46 3.63-8.09 8.09-8.09 2.16 0 4.19.84 5.72 2.37 1.53 1.53 2.37 3.56 2.37 5.72 0 4.46-3.63 8.09-8.09 8.09z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/moh-ahlan-firmansyah-4b8a49352/',
      color: '#0A66C2',
      icon: () => (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
        </svg>
      )
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/ahlan',
      color: '#333333',
      icon: () => (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
        </svg>
      )
    }
  ];

  const handleClick = (e, social) => {
    if (social.isEmail) {
      e.preventDefault();
      navigator.clipboard.writeText(social.url);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <section id="contact" style={styles.section}>
      {/* Toast Notification */}
      {showToast && (
        <div style={styles.toast}>
          📧 Email copied to clipboard!
        </div>
      )}
      
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.iconBackground}>
            <svg style={styles.headerIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9"/>
            </svg>
          </div>
          <h2 style={styles.title}>Let's Connect</h2>
          <p style={styles.subtitle}>Find me on these platforms</p>
        </div>

        <div style={styles.grid}>
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target={social.isEmail ? "_self" : "_blank"}
              rel="noopener noreferrer"
              style={{
                ...styles.card,
                ...(hoveredIndex === i && styles.cardHover),
                borderColor: hoveredIndex === i ? social.color : '#e2e8f0'
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={(e) => handleClick(e, social)}
            >
              <div style={{
                ...styles.iconWrapper,
                background: hoveredIndex === i ? social.color : '#f1f5f9',
                color: hoveredIndex === i ? 'white' : social.color,
                transform: hoveredIndex === i ? 'scale(1.1)' : 'scale(1)'
              }}>
                {social.icon()}
              </div>
              <span style={styles.name}>{social.name}</span>
            </a>
          ))}
        </div>
        
        <div style={styles.footer}>
          <div style={styles.divider}>
            <span style={styles.dividerLine}></span>
            <span style={styles.dividerIcon}>✨</span>
            <span style={styles.dividerLine}></span>
          </div>
          <p style={styles.greeting}>
            Thanks for visiting my portfolio! 🚀
          </p>
          <p style={styles.quote}>
            "Diam bukan berarti limbad"
          </p>
        </div>
      </div>

      {/* Add styles to document head */}
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .card-animation {
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0;
        }
        
        .card-animation:nth-child(1) { animation-delay: 0.1s; }
        .card-animation:nth-child(2) { animation-delay: 0.2s; }
        .card-animation:nth-child(3) { animation-delay: 0.3s; }
        .card-animation:nth-child(4) { animation-delay: 0.4s; }
        .card-animation:nth-child(5) { animation-delay: 0.5s; }
        
        @media (max-width: 768px) {
          .card-animation {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 0',
    background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)',
    position: 'relative',
    overflow: 'hidden'
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 2
  },
  header: {
    textAlign: 'center',
    marginBottom: '48px'
  },
  iconBackground: {
    width: '70px',
    height: '70px',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.2)'
  },
  headerIcon: {
    width: '35px',
    height: '35px',
    color: 'white'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #1e293b, #3b82f6)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '12px'
  },
  subtitle: {
    fontSize: '1rem',
    color: '#64748b',
    marginBottom: '0'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '20px',
    marginBottom: '60px'
  },
  card: {
    background: 'white',
    padding: '24px 16px',
    borderRadius: '16px',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '2px solid #e2e8f0',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px'
  },
  cardHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 25px -12px rgba(0, 0, 0, 0.15)'
  },
  iconWrapper: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    marginBottom: '4px'
  },
  name: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#1e293b',
    letterSpacing: '0.3px'
  },
  footer: {
    textAlign: 'center',
    paddingTop: '20px'
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '24px'
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #cbd5e1, transparent)',
    maxWidth: '100px'
  },
  dividerIcon: {
    fontSize: '1.2rem',
    color: '#3b82f6'
  },
  greeting: {
    fontSize: '1rem',
    color: '#475569',
    marginBottom: '12px',
    fontWeight: 500
  },
  quote: {
    fontSize: '0.95rem',
    color: '#64748b',
    fontStyle: 'italic',
    marginBottom: '0'
  },
  toast: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    background: '#1e293b',
    color: 'white',
    padding: '12px 20px',
    borderRadius: '12px',
    fontSize: '0.875rem',
    fontWeight: 500,
    zIndex: 1000,
    animation: 'slideIn 0.3s ease',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  }
};

export default Contact;