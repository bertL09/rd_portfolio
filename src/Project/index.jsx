import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './Project.css';

export function Project() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'project.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.slug === slug);
        setProject(found || null);
      });
  }, [slug]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentIndex]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    if (!project) return;
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    if (!project) return;
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  if (!project) return <p>Loading project...</p>;

  return (
    <div className="project-container">
      <h1>{slug}</h1>
      <p className="project-description">{project.description}</p>

      <div className="project-gallery">
        {project.images.map((img, idx) => {
          let className = 'project-image';
          if (idx % 7 === 0) className += ' large';
          else if (idx % 5 === 0) className += ' wide';
          else if (idx % 3 === 0) className += ' tall';
          return (
            <div
              key={idx}
              className={className}
              style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${img})` }}
              onClick={() => openLightbox(idx)}
              alt={`Project ${idx}`}
              loading="lazy"
            />
          );
        })}
      </div>

      {lightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={(e) => {
            if (e.target.classList.contains('lightbox-overlay'))
              closeLightbox();
          }}
        >
          <button className="lightbox-close lightbox-interactive-element" onClick={closeLightbox}>×</button>
          <button className="lightbox-prev lightbox-interactive-element" onClick={prevImage}>‹</button>
          <div
            className="lightbox-image"
            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${project.images[currentIndex]})` }}

          />
          <button className="lightbox-next lightbox-interactive-element" onClick={nextImage}>›</button>
        </div>
      )}
    </div>
  );
}
