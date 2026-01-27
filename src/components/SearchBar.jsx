import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch, onSort, onViewToggle, currentView, currentSort }) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(searchTerm);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchTerm, onSearch]);

    return (
        <div className="search-bar animate-fade-in">
            <div className="search-input-wrapper">
                <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
                <input
                    type="text"
                    placeholder="Search by role or company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    data-testid="search-input"
                    className="search-input"
                />
            </div>

            <div className="search-actions">
                <div className="sort-group">
                    <select
                        onChange={(e) => onSort(e.target.value)}
                        value={currentSort}
                        className="sort-select"
                        data-testid="sort-salary-desc"
                    >
                        <option value="newest">Newest First</option>
                        <option value="salary-desc">Highest Salary</option>
                    </select>
                </div>

                <div className="view-toggle">
                    <button
                        className={`view-btn ${currentView === 'list' ? 'active' : ''}`}
                        onClick={() => onViewToggle('list')}
                        data-testid="list-view-btn"
                        title="List View"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                            <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                        </svg>
                    </button>
                    <button
                        className={`view-btn ${currentView === 'grid' ? 'active' : ''}`}
                        onClick={() => onViewToggle('grid')}
                        data-testid="grid-view-btn"
                        title="Grid View"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                        </svg>
                    </button>
                </div>
            </div>

            <style jsx="true">{`
        .search-bar {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
          align-items: center;
        }

        .search-input-wrapper {
          position: relative;
          flex: 1;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.5;
        }

        .search-input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border-radius: 8px;
          font-size: 1rem;
        }

        .search-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .sort-select {
          padding: 0.85rem 1rem;
          border-radius: 8px;
          cursor: pointer;
        }

        .view-toggle {
          display: flex;
          background: var(--bg-secondary);
          border: 1px solid var(--border-primary);
          padding: 0.25rem;
          border-radius: 8px;
        }

        .view-btn {
          padding: 0.5rem;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.5;
        }

        .view-btn.active {
          background: var(--bg-primary);
          opacity: 1;
          color: var(--text-primary);
          box-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        @media (max-width: 768px) {
          .search-bar {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
        </div>
    );
};

export default SearchBar;
