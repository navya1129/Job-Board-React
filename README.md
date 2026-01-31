# Hired Premium - Modular Job Board

A high-end, production-ready React job board application featuring a sleek black-and-white aesthetic, advanced filtering, and smooth motion design.

## Features

- Smart Sorting Options: Organize listings by relevance, experience level, and
compensation range.

- Instant Keyword Lookup: Real-time search with optimized performance for roles and organizations.

- Flexible Layout Modes: Switch effortlessly between Compact and Detailed views with fluid animations.

- Saved Items System: Store and manage favorites securely using browser-based storage.

- Opportunity Dashboard: Centralized section to track shortlisted roles and application status.

= Device-First Layout: Designed to adapt flawlessly across mobile, tablet, and desktop screens.
## Tech Stack

- **Frontend**: React 18, React Router 6
- **Styling**: Vanilla CSS (Custom Properties, Grid, Flexbox)
- **Data**: Local JSON Mock Data
- **Build Tool**: Vite
- **Deployment**: Docker + Docker Compose

## Running with Docker

To get the application up and running in a production-like environment:

1. Ensure you have [Docker](https://www.docker.com/products/docker-desktop/) installed.
2. Run the following command in the root directory:

```bash
docker-compose up --build -d
```

3. Access the application at: [http://localhost:3000](http://localhost:3000)

## Screens

1. **Home (/)**: The main discovery engine with filters, search, and job cards.
2. **Tracker (/tracker)**: A focused view of your bookmarked jobs.

## Testing IDs
All critical elements are tagged with `data-testid` for automated testing:
- Job Cards: `data-testid="job-card-j1"`
- Search: `data-testid="search-input"`
- Sliders: `data-testid="filter-salary-slider"`
- Bookmarks: `data-testid="bookmark-btn-j1"`
- View Toggles: `data-testid="grid-view-btn"`, `data-testid="list-view-btn"`
- Pagination: `data-testid="pagination-controls"`, `data-testid="pagination-next"`

## Author
Navya Rayi