import React from 'react';

const JobCard = ({ job, company, isBookmarked, onToggleBookmark, viewMode }) => {
  return (
    <div
      className={`job-card animate-scale-up ${viewMode === 'list' ? 'job-card-list' : 'job-card-grid'}`}
      data-testid={`job-card-${job.id}`}
      data-bookmarked={isBookmarked ? "true" : "false"}
    >
      <div className="job-card-header">
        <div className="company-info">
          <div className="company-details">
            <span className="company-name">{company.name}</span>
            <span className="posted-date">{job.postedDate}</span>
          </div>
        </div>
        <button
          className="bookmark-btn"
          onClick={() => onToggleBookmark(job.id)}
          data-testid={`bookmark-btn-${job.id}`}
          aria-label="Bookmark job"
        >
          <svg className="bookmark-icon" width="20" height="20" viewBox="0 0 24 24">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>

      <div className="job-card-content">
        <h3 className="job-title">{job.title}</h3>
        <div className="job-meta">
          <span className="job-location">{job.location}</span>
          <span className="job-dot">•</span>
          <span className="job-type">{job.jobType}</span>
        </div>

        <div className="job-skills">
          {job.skills.map(skill => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>

      <div className="job-card-footer">
        <div className="job-salary" data-testid="job-salary">
          ${job.salary.toLocaleString()}
          <span className="salary-type">/year</span>
        </div>
        <button className="apply-btn">Apply Now</button>
      </div>

      <style jsx="true">{`
        .job-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-primary);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: var(--transition-smooth);
        }

        .job-card:hover {
          border-color: var(--text-secondary);
          background: var(--hover-bg);
          transform: translateY(-4px);
        }

        .job-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .company-info {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }



        .company-details {
          display: flex;
          flex-direction: column;
        }

        .company-name {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .posted-date {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .bookmark-btn {
          opacity: 0.6;
          transition: var(--transition-smooth);
        }

        .bookmark-btn:hover {
          opacity: 1;
        }

        .job-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .job-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .job-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .skill-tag {
          font-size: 0.7rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-primary);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .job-card-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--border-primary);
        }

        .job-salary {
          font-weight: 800;
          font-size: 1.1rem;
        }

        .salary-type {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 400;
          margin-left: 0.2rem;
        }

        .apply-btn {
          background: var(--text-primary);
          color: var(--bg-primary);
          padding: 0.5rem 1rem;
          font-weight: 600;
          font-size: 0.85rem;
          border-radius: 4px;
        }

        .apply-btn:hover {
          filter: invert(1);
        }

        /* List View Specifics */
        .job-card-list {
          flex-direction: row;
          align-items: center;
          gap: 2rem;
        }

        .job-card-list .job-card-header { width: 20%; }
        .job-card-list .job-card-content { flex: 1; }
        .job-card-list .job-card-footer { 
          border-top: none; 
          padding-top: 0; 
          flex-direction: column; 
          align-items: flex-end; 
          gap: 0.5rem;
          width: 20%;
        }

        @media (max-width: 768px) {
          .job-card-list {
            flex-direction: column;
            gap: 1.25rem;
          }
          .job-card-list .job-card-header, 
          .job-card-list .job-card-footer { 
            width: 100%; 
            align-items: center;
          }
          .job-card-list .job-card-footer {
            flex-direction: row;
            border-top: 1px solid var(--border-primary);
            padding-top: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default JobCard;
