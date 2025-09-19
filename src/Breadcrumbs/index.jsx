import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

export function Breadcrumbs() {
  const location = useLocation();
  
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathnames.map((name, idx) => {
        const routeTo = '/' + pathnames.slice(0, idx + 1).join('/');
        const isLast = idx === pathnames.length - 1;
        return (
          <span key={routeTo}>
            <span className="separator">/</span>
            {isLast ? (
              <span className="current">{decodeURIComponent(name)}</span>
            ) : (
              <Link to={routeTo}>{decodeURIComponent(name)}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
