import React from 'react';

const FiltersPanel = ({ filters, setFilters, allSkills, onClear }) => {
    const handleJobTypeChange = (type) => {
        setFilters(prev => ({ ...prev, jobType: type }));
    };

    const handleSkillToggle = (skill) => {
        setFilters(prev => {
            const skills = prev.skills.includes(skill)
                ? prev.skills.filter(s => s !== skill)
                : [...prev.skills, skill];
            return { ...prev, skills };
        });
    };

    const activeCount =
        (filters.jobType !== 'All' ? 1 : 0) +
        filters.skills.length +
        (filters.minSalary > 0 ? 1 : 0);

    return (
        <aside className="filters-panel animate-slide-in">
            <div className="filters-header">
                <h2>Filters</h2>
                {activeCount > 0 && <span className="active-badge">{activeCount}</span>}
            </div>

            <div className="filter-group">
                <label className="group-label">Job Type</label>
                <div className="radio-group">
                    {['All', 'Remote', 'Hybrid', 'Onsite'].map(type => (
                        <label key={type} className="radio-option">
                            <input
                                type="radio"
                                name="jobType"
                                id={`filter-job-type-${type.toLowerCase()}`}
                                checked={filters.jobType === type}
                                onChange={() => handleJobTypeChange(type)}
                            />
                            <span className="radio-label">{type}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="filter-group">
                <label className="group-label">Salary Range</label>
                <div className="salary-slider-container">
                    <input
                        type="range"
                        min="0"
                        max="200000"
                        step="5000"
                        value={filters.minSalary}
                        onChange={(e) => setFilters(prev => ({ ...prev, minSalary: parseInt(e.target.value) }))}
                        data-testid="filter-salary-slider"
                        className="salary-slider"
                    />
                    <div className="salary-labels">
                        <span>$0</span>
                        <span className="current-salary">${filters.minSalary.toLocaleString()}+</span>
                        <span>$200k</span>
                    </div>
                </div>
            </div>

            <div className="filter-group">
                <label className="group-label">Skills</label>
                <div className="skills-multiselect" data-testid="filter-skills">
                    {allSkills.map(skill => (
                        <button
                            key={skill}
                            className={`skill-pill ${filters.skills.includes(skill) ? 'active' : ''}`}
                            onClick={() => handleSkillToggle(skill)}
                        >
                            {skill}
                            {filters.skills.includes(skill) && <span className="close">×</span>}
                        </button>
                    ))}
                </div>
            </div>

            <button
                className="clear-filters-btn"
                onClick={onClear}
                data-testid="clear-filters-btn"
            >
                Clear All Filters
            </button>

            <style jsx="true">{`
        .filters-panel {
          background: var(--bg-secondary);
          border: 1px solid var(--border-primary);
          padding: 1.5rem;
          border-radius: 8px;
          position: sticky;
          top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .filters-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .filters-header h2 {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .active-badge {
          background: var(--text-primary);
          color: var(--bg-primary);
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.1rem 0.5rem;
          border-radius: 100px;
        }

        .group-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .radio-option {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          font-size: 0.9rem;
          padding: 0.4rem 0.6rem;
          border-radius: 4px;
          transition: var(--transition-smooth);
        }

        .radio-option:hover {
          background: var(--hover-bg);
        }

        .radio-option input {
          accent-color: var(--text-primary);
        }

        .salary-slider-container {
          padding: 0 0.5rem;
        }

        .salary-slider {
          width: 100%;
          height: 4px;
          appearance: none;
          background: var(--border-primary);
          border-radius: 2px;
          margin-bottom: 1rem;
        }

        .salary-slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: var(--text-primary);
          border-radius: 50%;
          cursor: pointer;
        }

        .salary-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .current-salary {
          color: var(--text-primary);
          font-weight: 700;
        }

        .skills-multiselect {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-pill {
          background: var(--bg-primary);
          border: 1px solid var(--border-primary);
          padding: 0.3rem 0.7rem;
          border-radius: 100px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .skill-pill.active {
          background: var(--text-primary);
          color: var(--bg-primary);
          border-color: var(--text-primary);
        }

        .skill-pill .close {
          margin-left: 0.4rem;
          font-size: 1.1rem;
          line-height: 0;
          vertical-align: middle;
        }

        .clear-filters-btn {
          margin-top: 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: underline;
          color: var(--text-secondary);
          width: fit-content;
        }

        .clear-filters-btn:hover {
          color: var(--text-primary);
        }
      `}</style>
        </aside>
    );
};

export default FiltersPanel;
