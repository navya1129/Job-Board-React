import React, { useState, useEffect, useMemo } from 'react';
import mockData from '../data/mock-data.json';
import FiltersPanel from '../components/FiltersPanel';
import SearchBar from '../components/SearchBar';
import JobList from '../components/JobList';
import Pagination from '../components/Pagination';

const Home = () => {
    const [jobs, setJobs] = useState(mockData.jobs);
    const [filters, setFilters] = useState({
        jobType: 'All',
        skills: [],
        minSalary: 0
    });
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('newest');
    const [viewMode, setViewMode] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const [bookmarkedIds, setBookmarkedIds] = useState([]);

    const jobsPerPage = 10;

    // Load bookmarks
    useEffect(() => {
        const saved = localStorage.getItem('bookmarkedJobs');
        if (saved) setBookmarkedIds(JSON.parse(saved));
    }, []);

    // Sync bookmarks
    const toggleBookmark = (id) => {
        let updated;
        if (bookmarkedIds.includes(id)) {
            updated = bookmarkedIds.filter(bid => bid !== id);
        } else {
            updated = [...bookmarkedIds, id];
        }
        setBookmarkedIds(updated);
        localStorage.setItem('bookmarkedJobs', JSON.stringify(updated));
    };

    const clearFilters = () => {
        setFilters({ jobType: 'All', skills: [], minSalary: 0 });
        setSearch('');
        setCurrentPage(1);
    };

    const allSkills = useMemo(() => {
        const skills = new Set();
        mockData.jobs.forEach(job => job.skills.forEach(s => skills.add(s)));
        return Array.from(skills).sort();
    }, []);

    const filteredJobs = useMemo(() => {
        let result = [...mockData.jobs];

        // Search
        if (search) {
            const q = search.toLowerCase();
            result = result.filter(job => {
                const company = mockData.companies.find(c => c.id === job.companyId);
                return job.title.toLowerCase().includes(q) || company?.name.toLowerCase().includes(q);
            });
        }

        // Job Type
        if (filters.jobType !== 'All') {
            result = result.filter(job => job.jobType === filters.jobType);
        }

        // Min Salary
        if (filters.minSalary > 0) {
            result = result.filter(job => job.salary >= filters.minSalary);
        }

        // Skills
        if (filters.skills.length > 0) {
            result = result.filter(job =>
                filters.skills.every(skill => job.skills.includes(skill))
            );
        }

        // Sort
        if (sort === 'salary-desc') {
            result.sort((a, b) => b.salary - a.salary);
        } else {
            result.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
        }

        return result;
    }, [search, filters, sort]);

    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    const paginatedJobs = filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [search, filters, sort]);

    return (
        <main className="home-page container">
            <SearchBar
                onSearch={setSearch}
                onSort={setSort}
                onViewToggle={setViewMode}
                currentView={viewMode}
                currentSort={sort}
            />

            <div className="main-layout">
                <aside className="sidebar">
                    <FiltersPanel
                        filters={filters}
                        setFilters={setFilters}
                        allSkills={allSkills}
                        onClear={clearFilters}
                    />
                </aside>

                <section className="content">
                    <JobList
                        jobs={paginatedJobs}
                        companies={mockData.companies}
                        bookmarkedIds={bookmarkedIds}
                        onToggleBookmark={toggleBookmark}
                        viewMode={viewMode}
                    />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </section>
            </div>

            <style jsx="true">{`
        .home-page {
          padding-top: 2rem;
          padding-bottom: 5rem;
        }

        .main-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 3rem;
          align-items: flex-start;
        }

        @media (max-width: 1024px) {
          .main-layout {
            grid-template-columns: 1fr;
          }
          
          .sidebar {
            display: none; /* In a real app we'd add a mobile drawer */
          }
        }
      `}</style>
        </main>
    );
};

export default Home;
