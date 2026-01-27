import React, { useState, useEffect, useMemo } from 'react';
import mockData from '../data/mock-data.json';
import JobList from '../components/JobList';

const Tracker = () => {
    const [bookmarkedIds, setBookmarkedIds] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('bookmarkedJobs');
        if (saved) setBookmarkedIds(JSON.parse(saved));
    }, []);

    const bookmarkedJobs = useMemo(() => {
        return mockData.jobs.filter(job => bookmarkedIds.includes(job.id));
    }, [bookmarkedIds]);

    const toggleBookmark = (id) => {
        const updated = bookmarkedIds.filter(bid => bid !== id);
        setBookmarkedIds(updated);
        localStorage.setItem('bookmarkedJobs', JSON.stringify(updated));
    };

    return (
        <main className="tracker-page container animate-fade-in">
            <header className="tracker-header">
                <h1>Application Tracker</h1>
                <p>You have {bookmarkedJobs.length} bookmarked {bookmarkedJobs.length === 1 ? 'job' : 'jobs'}.</p>
            </header>

            {bookmarkedJobs.length === 0 ? (
                <div className="empty-tracker">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--border-primary)" strokeWidth="1">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                    <h2>No bookmarked jobs yet.</h2>
                    <p>Go back to the home page to discover and save interesting roles.</p>
                </div>
            ) : (
                <JobList
                    jobs={bookmarkedJobs}
                    companies={mockData.companies}
                    bookmarkedIds={bookmarkedIds}
                    onToggleBookmark={toggleBookmark}
                    viewMode="list"
                />
            )}

            <style jsx="true">{`
        .tracker-page {
          padding-top: 2rem;
          padding-bottom: 5rem;
        }

        .tracker-header {
          margin-bottom: 3rem;
          border-bottom: 1px solid var(--border-primary);
          padding-bottom: 2rem;
        }

        .tracker-header h1 {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          margin-bottom: 0.5rem;
        }

        .tracker-header p {
          color: var(--text-secondary);
        }

        .empty-tracker {
          text-align: center;
          padding: 6rem 2rem;
          border: 1px dashed var(--border-primary);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .empty-tracker h2 {
          font-size: 1.5rem;
          margin-bottom: 0;
        }

        .empty-tracker p {
          color: var(--text-secondary);
        }
      `}</style>
        </main>
    );
};

export default Tracker;
