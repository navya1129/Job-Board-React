import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    return (
        <div className="pagination-controls animate-fade-in" data-testid="pagination-controls">
            <button
                className="page-btn"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Previous
            </button>

            <div className="page-numbers">
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i + 1}
                        className={`page-num ${currentPage === i + 1 ? 'active' : ''}`}
                        onClick={() => onPageChange(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            <button
                className="page-btn"
                data-testid="pagination-next"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Next
            </button>

            <style jsx="true">{`
        .pagination-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          margin-top: 4rem;
          padding: 2rem 0;
        }

        .page-btn {
          font-size: 0.9rem;
          font-weight: 600;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          border: 1px solid var(--border-primary);
        }

        .page-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .page-btn:not(:disabled):hover {
          background: var(--text-primary);
          color: var(--bg-primary);
        }

        .page-numbers {
          display: flex;
          gap: 0.5rem;
        }

        .page-num {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          border-radius: 6px;
        }

        .page-num.active {
          background: var(--border-primary);
          color: var(--text-primary);
          font-weight: 700;
        }

        .page-num:not(.active):hover {
          background: var(--hover-bg);
        }
      `}</style>
        </div>
    );
};

export default Pagination;
