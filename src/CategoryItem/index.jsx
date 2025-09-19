import { useState } from 'react';
import './CategoryItem.css';
import { useNavigate } from 'react-router-dom';


export function CategoryItem({ title, imageUrl, link }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const navigateToSubPage = () => {
    navigate(link)
  }

  return (
    <div
      className="category-item"
      style={{ backgroundImage: imageUrl.startsWith('linear-gradient') ? imageUrl : `url(${imageUrl})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={navigateToSubPage}
    >
      <div className={`overlay ${isHovered ? 'visible' : ''}`}>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
