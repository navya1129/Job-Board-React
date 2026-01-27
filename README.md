# Hired Premium - Modular Job Board

A high-end, production-ready React job board application featuring a sleek black-and-white aesthetic, advanced filtering, and smooth motion design.

## Features

- **Advanced Filtering**: Filter by job type, multiple skills, and salary range.
- **Dynamic Search**: Debounced search by job title or company name.
- **Dual View Support**: Seamlessly toggle between Grid and List views with smooth transitions.
- **Bookmarking**: Persistent bookmarking system using LocalStorage.
- **Application Tracker**: Dedicated page for managing saved opportunities.
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile.
- **Premium UI/UX**: Custom CSS-only animations, minimal 1-color theme, and state-of-the-art spacing.

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
Krishna Tulasi Satti