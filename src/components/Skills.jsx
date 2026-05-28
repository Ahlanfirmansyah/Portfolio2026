import React, { useState } from 'react';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('programmer');
  
  // Data untuk programmer
  const languages = [
    { name: 'JavaScript' },
    { name: 'PHP' },
    { name: 'Dart' },
    { name: 'HTML' }
  ];
  
  const frameworks = [
    { name: 'React' },
    { name: 'Laravel' },
    { name: 'Flutter' },
    { name: 'Node.js' },
    { name: 'Express' },
    { name: 'Tailwind CSS' },
    { name: 'Bootstrap' },
    { name: 'CSS' }
  ];
  
  const databases = [
    { name: 'MySQL' },
    { name: 'PostgreSQL' },
    { name: 'MongoDB' }
  ];
  
  const tools = [
    { name: 'Figma' },
    { name: 'Postman' },
    { name: 'VS Code' }
  ];
  
  // Data untuk illustrator
  const designTools = [
    { name: 'Illustrator' },
    { name: 'IbistPaint X' },
    { name: 'Clip Studio Paint' },
    { name: 'Canva' }
  ];
  
  const artSkills = [
    { name: 'Menggambar Digital' },
    { name: 'Membuat Komik' },
    { name: 'Desain Karakter' },
    { name: 'Keychain Custom' },
    { name: 'Stiker' },
    { name: 'Webtoon' }
  ];

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          <span style={styles.titleDash}></span>
          My Skills
          <span style={styles.titleDash}></span>
        </h2>
        
        <div style={styles.header}>
          <button 
            onClick={() => setActiveCategory('programmer')}
            style={{
              ...styles.btn,
              ...(activeCategory === 'programmer' && styles.btnActive),
              borderColor: activeCategory === 'programmer' ? '#3b82f6' : '#e2e8f0'
            }}
          >
            <span style={{...styles.btnDot, background: '#3b82f6'}}></span>
            Programmer
          </button>
          
          <button 
            onClick={() => setActiveCategory('illustrator')}
            style={{
              ...styles.btn,
              ...(activeCategory === 'illustrator' && styles.btnActive),
              borderColor: activeCategory === 'illustrator' ? '#8b5cf6' : '#e2e8f0'
            }}
          >
            <span style={{...styles.btnDot, background: '#8b5cf6'}}></span>
            Ilustrator
          </button>
        </div>
        
        {/* Programmer Skills */}
        {activeCategory === 'programmer' && (
          <div style={styles.skillContainer}>
            {/* Languages */}
            <div style={styles.categoryGroup}>
              <h3 style={styles.categoryTitle}>Languages</h3>
              <div style={styles.skillGrid}>
                {languages.map((skill, i) => (
                  <div key={i} style={styles.skillCard}>
                    <span style={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Frameworks & Libraries */}
            <div style={styles.categoryGroup}>
              <h3 style={styles.categoryTitle}>Frameworks & Libraries</h3>
              <div style={styles.skillGrid}>
                {frameworks.map((skill, i) => (
                  <div key={i} style={styles.skillCard}>
                    <span style={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Databases */}
            <div style={styles.categoryGroup}>
              <h3 style={styles.categoryTitle}>Databases</h3>
              <div style={styles.skillGrid}>
                {databases.map((skill, i) => (
                  <div key={i} style={styles.skillCard}>
                    <span style={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools & Platforms */}
            <div style={styles.categoryGroup}>
              <h3 style={styles.categoryTitle}>Tools & Platforms</h3>
              <div style={styles.skillGrid}>
                {tools.map((skill, i) => (
                  <div key={i} style={styles.skillCard}>
                    <span style={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Illustrator Skills */}
        {activeCategory === 'illustrator' && (
          <div style={styles.skillContainer}>
            {/* Design Tools */}
            <div style={styles.categoryGroup}>
              <h3 style={styles.categoryTitle}>Design Tools</h3>
              <div style={styles.skillGrid}>
                {designTools.map((skill, i) => (
                  <div key={i} style={styles.skillCard}>
                    <span style={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Art Skills */}
            <div style={styles.categoryGroup}>
              <h3 style={styles.categoryTitle}>Art Skills</h3>
              <div style={styles.skillGrid}>
                {artSkills.map((skill, i) => (
                  <div key={i} style={styles.skillCard}>
                    <span style={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <p style={styles.footer}>click to switch category</p>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    background: '#ffffff',
    padding: '70px 0'
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 24px'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '48px',
    color: '#1e293b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px'
  },
  titleDash: {
    width: '40px',
    height: '2px',
    background: '#cbd5e1'
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '32px'
  },
  btn: {
    padding: '12px 28px',
    borderRadius: '40px',
    fontSize: '0.95rem',
    fontWeight: 500,
    background: '#ffffff',
    color: '#475569',
    cursor: 'pointer',
    transition: '0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    border: '1.5px solid #e2e8f0',
    boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
  },
  btnActive: {
    background: '#f8fafc',
    color: '#1e293b',
    borderWidth: '1.5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  btnDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    display: 'inline-block'
  },
  skillContainer: {
    background: '#f8fafc',
    borderRadius: '20px',
    padding: '32px',
    marginTop: '8px',
    animation: 'fadeIn 0.3s ease'
  },
  categoryGroup: {
    marginBottom: '32px'
  },
  categoryTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#3b82f6',
    marginBottom: '16px',
    paddingBottom: '8px',
    borderBottom: '2px solid #e2e8f0',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  skillGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '12px'
  },
  skillCard: {
    background: '#ffffff',
    padding: '10px 16px',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    transition: 'all 0.2s ease',
    cursor: 'default',
    textAlign: 'center'
  },
  skillName: {
    color: '#334155',
    fontSize: '0.85rem',
    fontWeight: 500
  },
  footer: {
    textAlign: 'center',
    marginTop: '32px',
    color: '#cbd5e1',
    fontSize: '0.7rem',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  }
};

// Hover effect untuk skillCard
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .skill-card-hover:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    border-color: #3b82f6;
  }
`;
document.head.appendChild(styleSheet);

export default Skills;