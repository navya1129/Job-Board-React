import React from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs, companies, bookmarkedIds, onToggleBookmark, viewMode }) => {
    if (jobs.length === 0) {
        return (
            <div className="no-results animate-fade-in">
                <h3>No jobs found matching your criteria.</h3>
                <p>Try resetting your filters or searching for something else.</p>
            </div>
        );
    }

    return (
        <div
            className={`job-list-container ${viewMode === 'grid' ? 'grid-view' : 'list-view'}`}
            data-testid="job-list-container"
        >
            {jobs.map((job, index) => {
                const company = companies.find(c => c.id === job.companyId);
                return (
                    <JobCard
                        key={job.id}
                        job={job}
                        company={company}
                        isBookmarked={bookmarkedIds.includes(job.id)}
                        onToggleBookmark={onToggleBookmark}
                        viewMode={viewMode}
                    />
                );
            })}

            <style jsx="true">{`
        .no-results {
          text-align: center;
          padding: 4rem 2rem;
          border: 1px dashed var(--border-primary);
          border-radius: 8px;
        }

        .no-results h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .no-results p {
          color: var(--text-secondary);
        }
      `}</style>
        </div>
    );
};

export default JobList;
