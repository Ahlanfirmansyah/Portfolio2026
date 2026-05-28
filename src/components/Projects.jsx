import React, { useState } from 'react';

// Import gambar untuk programmer projects
import p1 from '../assets/P1.png';
import p2 from '../assets/P2.png';
import p3 from '../assets/P3.png';
import p4 from '../assets/P4.png';
import i1 from '../assets/i1.jpeg';
import i2 from '../assets/i2.jpeg';
import i3 from '../assets/i3.jpeg';
import i4 from '../assets/i4.jpeg';

const programmerProjects = [
  { 
    id: 1, 
    title: 'Cek Daerah di Indonesia', 
    desc: 'dari provinsi hingga ke yang terdalam', 
    tech: ['React', 'API'], 
    url: 'https://ahlanfirmansyah.github.io/daerah-di-indonesiaa/',
    image: p1
  },
  { 
    id: 2, 
    title: 'Tixid', 
    desc: 'Pembelian Tiket', 
    tech: ['Laravel'], 
    url: 'https://ahlanfirmansyah.github.io/Projek_Tixid_Ahlan/',
    image: p2
  },
  { 
    id: 3, 
    title: 'Keychain Custom', 
    desc: 'Web Jualan', 
    tech: ['HTML', 'JS', 'CSS'], 
    url: 'https://ahlanfirmansyah.github.io/opencommission/',
    image: p3
  },
  { 
    id: 4, 
    title: 'Pariwisata', 
    desc: 'taman safari', 
    tech: ['Laravel'], 
    url: 'https://blog.demo.com',
    image: p4
  }
];

const illustratorProjects = [
  { 
    id: 5, 
    title: 'Webtoon Series', 
    desc: 'Komik digital', 
    tech: ['IbistPaint X'], 
    url: 'https://www.webtoons.com/id/challenge/publish',
    image: i1
  },
  { 
    id: 6, 
    title: 'Character Design', 
    desc: 'Desain karakter', 
    tech: ['IbistPaint X'], 
    url: 'https://www.instagram.com/likalikualan?igsh=ZTkzZDd3N3dpcXY0',
    image: i2
  },
  { 
    id: 7, 
    title: 'Keychain Custom', 
    desc: 'Keychain custom', 
    tech: ['Tradi'], 
    url: 'https://www.instagram.com/likalikualan.studio?igsh=MWd0ZXhyZHpoMHVqcA==',
    image: i3
  },
  { 
    id: 8, 
    title: 'Tradi Art', 
    desc: 'tradi art', 
    tech: ['Tradi Art'], 
    url: 'https://www.instagram.com/p/DXs_yXPjlSE/?img_index=1',
    image: i4
  }
];

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (e, project) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.image) {
      setSelectedImage(project.image);
      setSelectedProject(project);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedProject(null);
  };

  return (
    <section id="projects" style={{ padding: '60px 0', background: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '40px', color: '#1e293b' }}>Projects</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {/* Programmer */}
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#3b82f6', textAlign: 'center' }}>Programmer</h3>
            <div style={styles.gridContainer}>
              {programmerProjects.map(p => (
                <div key={p.id} style={styles.projectCard} className="project-card-hover">
                  <div 
                    style={styles.imageWrapper}
                    className="image-wrapper-hover"
                    onClick={(e) => handleImageClick(e, p)}
                  >
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      style={styles.projectImage}
                    />
                    <div style={styles.zoomIcon} className="zoom-icon">
                      <span></span>
                    </div>
                  </div>
                  <div style={styles.projectInfo}>
                    <h4 style={styles.projectTitle}>{p.title}</h4>
                    <p style={styles.projectDesc}>{p.desc}</p>
                    <div style={styles.techList}>
                      {p.tech.map((t, i) => (
                        <span key={i} style={styles.tech}>{t}</span>
                      ))}
                    </div>
                    <a 
                      href={p.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={styles.projectLink}
                      className="project-link-hover"
                    >
                      Lihat Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Ilustrator - SEKARANG PAKAI GAMBAR ASLI */}
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#8b5cf6', textAlign: 'center' }}>Ilustrator</h3>
            <div style={styles.gridContainer}>
              {illustratorProjects.map(p => (
                <div key={p.id} style={styles.projectCard} className="project-card-hover">
                  <div 
                    style={styles.imageWrapper}
                    className="image-wrapper-hover"
                    onClick={(e) => handleImageClick(e, p)}
                  >
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      style={styles.projectImage}
                    />
                    <div style={styles.zoomIcon} className="zoom-icon">
                      <span></span>
                    </div>
                  </div>
                  <div style={styles.projectInfo}>
                    <h4 style={styles.projectTitle}>{p.title}</h4>
                    <p style={styles.projectDesc}>{p.desc}</p>
                    <div style={styles.techList}>
                      {p.tech.map((t, i) => (
                        <span key={i} style={{...styles.tech, background: '#f3e8ff', color: '#8b5cf6'}}>{t}</span>
                      ))}
                    </div>
                    <a 
                      href={p.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{...styles.projectLink, color: '#8b5cf6'}}
                      className="project-link-hover"
                    >
                      Lihat Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal untuk zoom gambar */}
      {selectedImage && selectedProject && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              style={styles.modalClose} 
              onClick={closeModal}
              className="modal-close-hover"
            >
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt={selectedProject.title}
              style={styles.modalImage}
            />
            <div style={styles.modalInfo}>
              <h3 style={styles.modalTitle}>{selectedProject.title}</h3>
              <p style={styles.modalDesc}>{selectedProject.desc}</p>
              <div style={styles.modalTech}>
                {selectedProject.tech.map((t, i) => (
                  <span key={i} style={{
                    ...styles.modalTechBadge,
                    ...(selectedProject.id >= 5 ? {background: '#f3e8ff', color: '#8b5cf6'} : {})
                  }}>{t}</span>
                ))}
              </div>
              <a 
                href={selectedProject.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  ...styles.modalLink,
                  ...(selectedProject.id >= 5 ? {background: '#8b5cf6'} : {})
                }}
                className="modal-link-hover"
              >
                Kunjungi Project →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '24px'
  },
  projectCard: {
    background: '#f8fafc',
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    border: '1px solid #eef2ff',
    cursor: 'default'
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    cursor: 'pointer',
    backgroundColor: '#f1f5f9'
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },
  zoomIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'rgba(0,0,0,0.6)',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '14px',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  },
  projectInfo: {
    padding: '16px'
  },
  projectTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#1e293b',
    marginBottom: '8px'
  },
  projectDesc: {
    fontSize: '0.8rem',
    color: '#64748b',
    marginBottom: '12px',
    lineHeight: 1.4
  },
  techList: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
    marginBottom: '12px'
  },
  tech: {
    background: '#eef2ff',
    padding: '4px 8px',
    borderRadius: '10px',
    fontSize: '0.65rem',
    color: '#3b82f6',
    fontWeight: 500
  },
  projectLink: {
    display: 'inline-block',
    fontSize: '0.75rem',
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'transform 0.2s ease'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px'
  },
  modalContent: {
    position: 'relative',
    maxWidth: '90%',
    maxHeight: '90%',
    background: 'white',
    borderRadius: '16px',
    overflow: 'auto'
  },
  modalClose: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'rgba(0, 0, 0, 0.7)',
    border: 'none',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'white',
    fontSize: '18px',
    transition: 'all 0.2s ease',
    zIndex: 1001
  },
  modalImage: {
    width: '100%',
    maxHeight: '70vh',
    objectFit: 'contain',
    display: 'block'
  },
  modalInfo: {
    padding: '20px',
    textAlign: 'center'
  },
  modalTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#1e293b',
    marginBottom: '8px'
  },
  modalDesc: {
    fontSize: '0.9rem',
    color: '#64748b',
    marginBottom: '12px'
  },
  modalTech: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '16px'
  },
  modalTechBadge: {
    background: '#eef2ff',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    color: '#3b82f6'
  },
  modalLink: {
    display: 'inline-block',
    padding: '8px 20px',
    background: '#3b82f6',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '0.85rem',
    fontWeight: 500,
    transition: 'background 0.2s ease'
  }
};

// Animations and hover effects
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .project-card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
  
  .image-wrapper-hover:hover img {
    transform: scale(1.05);
  }
  
  .image-wrapper-hover:hover .zoom-icon {
    opacity: 1;
  }
  
  .project-link-hover:hover {
    transform: translateX(5px);
  }
  
  .modal-close-hover:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: rotate(90deg);
  }
  
  .modal-link-hover:hover {
    background: #2563eb;
  }
  
  .modal-content {
    animation: modalFadeIn 0.3s ease;
  }
`;
document.head.appendChild(styleSheet);

export default Projects;