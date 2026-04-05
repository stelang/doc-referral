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

## Google Sheets Integration

The application can fetch data directly from a published Google Sheet, making it easy for non-technical users to update the directory without touching code!

### Quick Setup

1. **Import the template**: Use `doctor-template.csv` to create your Google Sheet
2. **Publish to web**: File > Share > Publish to web (as CSV)
3. **Configure**: Paste the published URL in `src/config.js`
4. **Deploy**: Run `npm run deploy` - Done!

📖 **[Full Setup Instructions →](./GOOGLE_SHEETS_SETUP.md)**

### Required Columns

Your Google Sheet must have these columns (in any order):

| Name | Specialization | Hospital/Clinic | Phone | Area | Notes |
|------|----------------|-----------------|-------|------|-------|
| Dr. Name | Cardiologist | Hospital Name | +91 XXXXX XXXXX | Bandra | Additional info |

### Benefits

- ✅ **No coding required** to update doctor information
- ✅ **Instant updates** - changes reflect immediately on the website
- ✅ **Easy collaboration** - share the sheet with your team
- ✅ **Automatic fallback** to sample data if sheet fails to load

## Customization

To customize for your community, edit `src/config.js`:

```javascript
export const config = {
  GOOGLE_SHEET_URL: 'your-published-sheet-url',
  USE_SAMPLE_DATA: false,  // Set to true to use sample data
  CITY_NAME: 'Mumbai',     // Change for your city
  APP_TITLE: 'Doctor Referral Directory',
  APP_SUBTITLE: 'Trusted doctor references from your community'
};
```

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- PapaParse (CSV parsing)
- GitHub Pages

## Contributing

This project is maintained by the community for the community. For updates or corrections, please contact the administrator.

## License

MIT
