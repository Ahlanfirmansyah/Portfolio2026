import React, { useState } from 'react';

function Contact() {
  const [hovered, setHovered] = useState(null);

  const socials = [
    { name: 'Instagram', url: 'https://www.instagram.com/ahlln.n?igsh=MXhwdDRtemNhMDMyMg==' },
    { name: 'Email', url: 'mohahlanfirmansya@example.com' },
    { name: 'WhatsApp', url: 'https://wa.me/6285888526072' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/moh-ahlan-firmansyah-4b8a49352/' },
    { name: 'GitHub', url: 'https://github.com/ahlan' }
  ];

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.left}>
          <div style={styles.stickyContent}>
            <span style={styles.label}>Social</span>
            <h2 style={styles.title}>Connect<br />with me</h2>
            <div style={styles.line}></div>
          </div>
        </div>

        <div style={styles.right}>
          <div style={styles.links}>
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.link,
                  ...(hovered === i && styles.linkHover)
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span style={styles.linkBg}>{(i + 1).toString().padStart(2, '0')}</span>
                <span style={styles.linkText}>{social.name}</span>
                <span style={styles.linkArrow}>↗</span>
              </a>
            ))}
          </div>
          
          <div style={styles.footer}>
            <p style={styles.quote}>"diam bukan berarti limbad"</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .link-item {
          animation: slideUp 0.6s ease forwards;
          opacity: 0;
        }
        
        .link-item:nth-child(1) { animation-delay: 0.1s; }
        .link-item:nth-child(2) { animation-delay: 0.2s; }
        .link-item:nth-child(3) { animation-delay: 0.3s; }
        .link-item:nth-child(4) { animation-delay: 0.4s; }
        .link-item:nth-child(5) { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    padding: '120px 0',
    background: '#fff'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px',
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    gap: '60px'
  },
  left: {
    position: 'relative'
  },
  stickyContent: {
    position: 'sticky',
    top: '100px'
  },
  label: {
    fontSize: '0.7rem',
    color: '#999',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    display: 'block',
    marginBottom: '16px'
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '500',
    color: '#1a1a1a',
    margin: '0 0 24px 0',
    lineHeight: '1.2',
    letterSpacing: '-1px'
  },
  line: {
    width: '40px',
    height: '2px',
    background: '#e0e0e0'
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: '60px'
  },
  links: {
    display: 'flex',
    flexDirection: 'column'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    textDecoration: 'none',
    padding: '24px 0',
    borderBottom: '1px solid #f0f0f0',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  linkHover: {
    paddingLeft: '20px',
    borderBottomColor: '#d0d0d0'
  },
  linkBg: {
    fontSize: '0.8rem',
    color: '#ccc',
    minWidth: '40px',
    fontFamily: 'monospace'
  },
  linkText: {
    fontSize: '1.1rem',
    color: '#333',
    flex: 1,
    fontWeight: '400',
    letterSpacing: '-0.2px'
  },
  linkArrow: {
    fontSize: '0.9rem',
    color: '#ddd',
    transition: 'transform 0.3s ease'
  },
  footer: {
    textAlign: 'right'
  },
  quote: {
    fontSize: '0.85rem',
    color: '#aaa',
    fontStyle: 'italic',
    margin: 0
  }
};

export default Contact;