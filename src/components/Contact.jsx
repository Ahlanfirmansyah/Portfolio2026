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
        <div style={styles.header}>
          <span style={styles.label}>04.</span>
          <h2 style={styles.title}>Get in touch</h2>
        </div>
        
        <div style={styles.content}>
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
              <span style={styles.linkNumber}>0{i + 1}.</span>
              <span style={styles.linkName}>{social.name}</span>
              <span style={styles.linkArrow}>→</span>
            </a>
          ))}
        </div>
        
        <div style={styles.footer}>
          <p style={styles.quote}>"diam bukan berarti limbad"</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    background: '#ffffff'
  },
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '0 24px'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '48px'
  },
  label: {
    fontSize: '0.8rem',
    color: '#666',
    letterSpacing: '1px'
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: '400',
    color: '#111',
    letterSpacing: '0.5px',
    margin: 0
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '80px'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    textDecoration: 'none',
    color: '#333',
    padding: '12px 0',
    borderBottom: '1px solid #eee',
    transition: 'all 0.2s ease'
  },
  linkHover: {
    color: '#000',
    borderBottomColor: '#ccc',
    paddingLeft: '8px'
  },
  linkNumber: {
    fontSize: '0.7rem',
    color: '#999',
    width: '30px'
  },
  linkName: {
    fontSize: '0.9rem',
    flex: 1
  },
  linkArrow: {
    fontSize: '0.8rem',
    opacity: 0,
    transition: '0.2s',
    ...(hovered && { opacity: 1 })
  },
  footer: {
    textAlign: 'center',
    paddingTop: '40px'
  },
  quote: {
    fontSize: '0.8rem',
    color: '#aaa',
    fontStyle: 'italic',
    margin: 0,
    letterSpacing: '0.3px'
  }
};

export default Contact;