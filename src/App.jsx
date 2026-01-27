import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import './styles/global.css';
import './styles/animations.css';

const App = () => {
  return (
    <Router>
      <header className="header container">
        <Link to="/" className="logo">
          <span>Hired</span> Premium
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Discover
          </NavLink>
          <NavLink to="/tracker" className={({ isActive }) => isActive ? 'active' : ''}>
            Bookmarks
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>

      <footer className="footer container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span>Hired</span> Premium
            </Link>
            <p className="brand-desc">
              Curating the world's most innovative job opportunities for the modern workforce.
              Minimalism meets professional growth.
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Platform</h4>
              <Link to="/">Browse Jobs</Link>
              <Link to="/tracker">My Bookmarks</Link>
              <a href="#">Companies</a>
            </div>
            <div className="link-group">
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact Us</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="link-group">
              <h4>Social</h4>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 HIRED PREMIUM. DESIGNED FOR EXCELLENCE.</p>
          <div className="status-indicator">
            <span className="dot"></span>
            SYSTEMS OPERATIONAL
          </div>
        </div>
      </footer>

      <style jsx="true">{`
        .footer {
          padding: 6rem 2rem 3rem;
          margin-top: 5rem;
          border-top: 1px solid var(--border-primary);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .brand-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          max-width: 300px;
          line-height: 1.6;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .link-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .link-group h4 {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .link-group a {
          font-size: 0.85rem;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .link-group a:hover {
          color: var(--text-primary);
          transform: translateX(4px);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border-primary);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
        }

        .dot {
          width: 6px;
          height: 6px;
          background: #00ff00;
          border-radius: 50%;
          box-shadow: 0 0 8px #00ff00;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .footer-links {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </Router>
  );
};

export default App;
