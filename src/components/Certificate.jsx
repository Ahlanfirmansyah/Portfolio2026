import React, { useState } from 'react';

// Import semua gambar sertifikat
import c1 from '../assets/c1.jpeg';
import c2 from '../assets/c2.jpeg';
import c3 from '../assets/c3.jpeg';
import c4 from '../assets/c4.jpeg';
import c5 from '../assets/c5.jpeg';
import c6 from '../assets/c6.jpeg';
import c7 from '../assets/c7.jpeg';
import c8 from '../assets/c8.jpeg';

const Certificate = () => {
  // Data sertifikat dengan gambar yang sudah diimport
  const [certificates] = useState([
    { id: 1, title: 'Belajar Dasar Programman JavaScript', image: c1, year: '2024' },
    { id: 2, title: 'Belajar Dasar Programman Web', image: c2, year: '2024' },
    { id: 3, title: 'Sertifikat K3', image: c3, year: '2024' },
    { id: 4, title: 'Belajar Membuat Front-End Web', image: c4, year: '2024' },
    { id: 5, title: 'Sertifikat Wordpress Introduction', image: c5, year: '2024' },
    { id: 6, title: 'Sertifikat Data Analysis Fundamental', image: c6, year: '2025' },
    { id: 7, title: 'Sertifikat Appreciation', image: c7, year: '2026' },
    { id: 8, title: 'Sertifikat Web Programmer React', image: c8, year: '2026' }
  ]);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (cert) => {
    setSelectedImage(cert);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Styles
  const styles = {
    certificatesSection: {
      padding: '80px 20px',
      background: '#ffffff', // Background putih polos
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2.5rem',
      marginBottom: '1rem',
      color: '#2d3748',
      position: 'relative',
      display: 'inline-block',
      width: '100%',
    },
    sectionTitleAfter: {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      background: 'linear-gradient(90deg, #4a90e2, #357abd)',
      borderRadius: '2px',
    },
    sectionSubtitle: {
      textAlign: 'center',
      color: '#4a5568',
      marginBottom: '3rem',
      fontSize: '1.1rem',
    },
    certificatesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)', // 4 kolom ke samping
      gap: '2rem',
      padding: '1rem',
    },
    certificateCard: {
      background: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    certificateImageWrapper: {
      width: '100%',
      height: '250px',
      overflow: 'hidden',
      background: '#f7fafc',
    },
    certificateImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
    },
    certificateInfo: {
      padding: '1rem',
      textAlign: 'center',
    },
    certificateTitle: {
      margin: '0 0 0.5rem 0',
      fontSize: '1.1rem',
      color: '#2d3748',
    },
    certYear: {
      display: 'inline-block',
      padding: '0.25rem 0.75rem',
      background: '#ebf4ff',
      color: '#4a90e2',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '500',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    },
    modalContent: {
      position: 'relative',
      maxWidth: '90%',
      maxHeight: '90%',
      background: 'white',
      borderRadius: '12px',
      overflow: 'auto',
    },
    modalClose: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'rgba(0, 0, 0, 0.5)',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'white',
      transition: 'all 0.3s ease',
      zIndex: 1001,
      fontSize: '20px',
    },
    modalImage: {
      maxWidth: '100%',
      maxHeight: '80vh',
      objectFit: 'contain',
      display: 'block',
    },
    modalInfo: {
      padding: '1rem',
      textAlign: 'center',
      background: 'white',
    },
    modalInfoTitle: {
      margin: '0 0 0.5rem 0',
      color: '#2d3748',
    },
    modalInfoYear: {
      margin: 0,
      color: '#718096',
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes slideUp {
            from {
              transform: translateY(50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          .certificate-card-hover {
            transition: all 0.3s ease;
          }
          
          .certificate-card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
          }
          
          .certificate-image-hover {
            overflow: hidden;
            height: 100%;
          }
          
          .certificate-image-hover img {
            transition: transform 0.3s ease;
          }
          
          .certificate-card-hover:hover .certificate-image-hover img {
            transform: scale(1.05);
          }
          
          .modal-overlay {
            animation: fadeIn 0.3s ease;
          }
          
          .modal-content {
            animation: slideUp 0.3s ease;
          }
          
          .modal-close-hover {
            transition: all 0.3s ease;
          }
          
          .modal-close-hover:hover {
            background: rgba(0, 0, 0, 0.8);
            transform: rotate(90deg);
          }
          
          @media (max-width: 1024px) {
            .certificates-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          
          @media (max-width: 768px) {
            .certificates-section {
              padding: 60px 15px;
            }
            .section-title {
              font-size: 2rem;
            }
            .certificate-image-wrapper {
              height: 200px;
            }
            .modal-content {
              max-width: 95%;
            }
          }
          
          @media (max-width: 640px) {
            .certificates-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
      
      <section id="certificate" style={styles.section}> 
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            Sertifikat
          </h2>
          <p style={styles.sectionSubtitle}>
            Kumpulan sertifikat kompetensi dan pelatihan yang telah saya peroleh
          </p>
          
          <div className="certificates-grid" style={styles.certificatesGrid}>
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="certificate-card-hover"
                style={styles.certificateCard}
                onClick={() => handleImageClick(cert)}
              >
                <div style={styles.certificateImageWrapper}>
                  <div className="certificate-image-hover">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      style={styles.certificateImage}
                    />
                  </div>
                </div>
                <div style={styles.certificateInfo}>
                  <h3 style={styles.certificateTitle}>{cert.title}</h3>
                  <span style={styles.certYear}>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal untuk zoom gambar */}
      {selectedImage && (
        <div className="modal-overlay" style={styles.modalOverlay} onClick={closeModal}>
          <div className="modal-content" style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-hover" 
              style={styles.modalClose} 
              onClick={closeModal}
            >
              ✕
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              style={styles.modalImage}
            />
            <div style={styles.modalInfo}>
              <h3 style={styles.modalInfoTitle}>{selectedImage.title}</h3>
              <p style={styles.modalInfoYear}>{selectedImage.year}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificate;