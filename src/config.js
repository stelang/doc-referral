/**
 * Application Configuration
 *
 * To use Google Sheets integration:
 * 1. Create a Google Sheet with columns: Name, Specialization, Hospital/Clinic, Phone, Area, Notes
 * 2. Fill in your doctor data
 * 3. Go to File > Share > Publish to web
 * 4. Select "Entire Document" and format "Comma-separated values (.csv)"
 * 5. Click "Publish" and copy the URL
 * 6. Paste the URL below in GOOGLE_SHEET_URL
 *
 * Example URL format:
 * https://docs.google.com/spreadsheets/d/e/YOUR_SHEET_ID/pub?output=csv
 */

export const config = {
  // Paste your published Google Sheets CSV URL here
  GOOGLE_SHEET_URL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8f8e47iklYTAmop0cKCCUTBLZ0cCdVCdPjQCML141a2vUpnGjOOxiyLVxNKzkeJtdm38DfthTWvh4/pub?output=csv',

  // Fallback to sample data if Google Sheets URL is not configured
  USE_SAMPLE_DATA: false,

  // City/Location name (can be customized for different groups)
  CITY_NAME: 'Mumbai',

  // Application title
  APP_TITLE: 'Doctor Referral Directory',

  // Subtitle
  APP_SUBTITLE: 'Trusted doctor references from your community'
};
