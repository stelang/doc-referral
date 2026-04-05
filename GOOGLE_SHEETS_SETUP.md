# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for the Doctor Referral Directory.

## Step 1: Create a New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **+ Blank** to create a new spreadsheet
3. Name it something like "Doctor Referral Directory - Mumbai"

## Step 2: Set Up the Columns

Create the following columns in the **first row** (these are required):

| Column Name | Description | Example |
|------------|-------------|---------|
| **Name** | Doctor's full name | Dr. Anjali Mehta |
| **Specialization** | Medical specialization | Cardiologist |
| **Hospital/Clinic** | Hospital or clinic name | Lilavati Hospital |
| **Phone** | Contact number | +91 98765 43210 |
| **Area** | Location/area | Bandra West |
| **Notes** | Additional information | Available on weekends |

**Important:** The column names must match exactly (case-sensitive).

## Step 3: Add Doctor Data

You have two options:

### Option A: Import the Sample Template

1. Download the `doctor-template.csv` file from this repository
2. In Google Sheets, go to **File > Import**
3. Upload the `doctor-template.csv` file
4. Choose **Replace spreadsheet** or **Insert new sheet**
5. Click **Import data**

### Option B: Manually Enter Data

Simply fill in the rows with your doctor information following the column structure above.

## Step 4: Publish the Sheet to the Web

1. In your Google Sheet, click **File > Share > Publish to web**
2. In the dialog that appears:
   - Under **Link**, select **Entire Document**
   - Under format, select **Comma-separated values (.csv)**
3. Click **Publish**
4. Click **OK** when prompted
5. **Copy the published URL** - it will look like:
   ```
   https://docs.google.com/spreadsheets/d/e/2PACX-XXXXXXXXXX/pub?output=csv
   ```

## Step 5: Configure the Application

1. Open `src/config.js` in your code editor
2. Paste your published CSV URL:
   ```javascript
   export const config = {
     // Paste your published Google Sheets CSV URL here
     GOOGLE_SHEET_URL: 'https://docs.google.com/spreadsheets/d/e/YOUR_URL_HERE/pub?output=csv',

     // Set to false to use Google Sheets data instead of sample data
     USE_SAMPLE_DATA: false,

     // Customize these as needed
     CITY_NAME: 'Mumbai',
     APP_TITLE: 'Doctor Referral Directory',
     APP_SUBTITLE: 'Trusted doctor references from your community'
   };
   ```
3. Save the file

## Step 6: Test Locally

1. Run `npm run dev` to start the development server
2. Open http://localhost:5173/doc-referral/
3. You should see the data from your Google Sheet!

## Step 7: Deploy

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Add Google Sheets integration"
   git push origin main
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Updating Doctor Information

To update the doctor directory:

1. Open your Google Sheet
2. Make your changes (add, edit, or remove doctors)
3. **No code changes needed!** The website will automatically fetch the latest data when users visit

The changes will be reflected immediately - just refresh the website!

## Tips

- **Keep it organized**: Use the same format for phone numbers (+91 XXXXX XXXXX)
- **Be concise in Notes**: Keep notes brief and relevant
- **Test your changes**: After updating the sheet, check the website to ensure data loads correctly
- **Backup your data**: Periodically download a copy of your sheet as CSV

## Troubleshooting

### Data not loading?

1. Check that the sheet is **published to web**
2. Verify the URL in `config.js` ends with `?output=csv`
3. Make sure column names match exactly (case-sensitive)
4. Check browser console for error messages

### Seeing old data?

- Clear your browser cache or do a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Changes may take a minute to propagate

### Getting errors?

- Ensure the sheet is publicly accessible (published to web)
- Check that there are no empty rows between data
- Verify all required columns are present

## Privacy & Security

- Published Google Sheets are **publicly accessible** - anyone with the URL can view the data
- **Do not include** sensitive information like personal addresses or confidential notes
- Only include information you're comfortable being public

## Questions?

If you run into issues, check the browser console for error messages or reach out to the developer who set up this system.
