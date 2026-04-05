# Doctor Referral Directory

A modern, searchable doctor referral directory for the community. Built with React, Vite, and Tailwind CSS.

## Features

- **Searchable Directory**: Search by doctor name or hospital
- **Smart Filters**: Filter by specialization and area/location
- **Responsive Design**: Works seamlessly on mobile and desktop
- **Easy to Maintain**: Data can be managed via Google Sheets
- **Scalable**: Designed to support multiple cities and communities

## Live Demo

Visit: [https://stelang.github.io/doc-referral/](https://stelang.github.io/doc-referral/)

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Data Structure

The doctor directory uses the following data schema:

- **Name**: Doctor's full name
- **Specialization**: Medical specialization (e.g., Cardiologist, Pediatrician)
- **Hospital/Clinic**: Name of the hospital or clinic
- **Phone**: Contact number
- **Area**: Location/area in Mumbai
- **Notes**: Additional information (e.g., availability, languages spoken)

## Google Sheets Integration (Coming Soon)

The application is designed to fetch data from a Google Sheet, making it easy for non-technical users to update the directory. The Google Sheet should have the following columns:

| Name | Specialization | Hospital/Clinic | Phone | Area | Notes |
|------|----------------|-----------------|-------|------|-------|

## Customization

To customize for your community:

1. Update the header text in `src/App.jsx`
2. Replace sample data in `src/data/sampleDoctors.js`
3. Configure Google Sheets API integration (instructions coming soon)

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- GitHub Pages

## Contributing

This project is maintained by the community for the community. For updates or corrections, please contact the administrator.

## License

MIT
