import Papa from 'papaparse';

/**
 * Fetches doctor data from a published Google Sheet
 *
 * To use this:
 * 1. Create a Google Sheet with your doctor data
 * 2. Go to File > Share > Publish to web
 * 3. Choose "Entire Document" and "Comma-separated values (.csv)"
 * 4. Copy the published CSV URL
 * 5. Update the GOOGLE_SHEET_URL in config.js
 *
 * @param {string} sheetUrl - The published Google Sheets CSV URL
 * @returns {Promise<Array>} Array of doctor objects
 */
export async function fetchDoctorsFromSheet(sheetUrl) {
  if (!sheetUrl) {
    throw new Error('Google Sheet URL is not configured');
  }

  try {
    const response = await fetch(sheetUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch sheet: ${response.statusText}`);
    }

    const csvText = await response.text();

    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header) => {
          // Normalize header names to match our data structure
          const headerMap = {
            'Name': 'name',
            'name': 'name',
            'Specialization': 'specialization',
            'specialization': 'specialization',
            'Hospital/Clinic': 'hospital',
            'Hospital': 'hospital',
            'hospital': 'hospital',
            'Phone': 'phone',
            'phone': 'phone',
            'Area': 'area',
            'area': 'area',
            'Location': 'area',
            'Notes': 'notes',
            'notes': 'notes'
          };
          return headerMap[header.trim()] || header.toLowerCase().trim();
        },
        complete: (results) => {
          if (results.errors.length > 0) {
            console.warn('CSV parsing warnings:', results.errors);
          }

          // Add IDs and clean up the data
          const doctors = results.data
            .filter(row => row.name && row.name.trim() !== '') // Filter out empty rows
            .map((row, index) => ({
              id: index + 1,
              name: row.name?.trim() || '',
              specialization: row.specialization?.trim() || '',
              hospital: row.hospital?.trim() || '',
              phone: row.phone?.trim() || '',
              area: row.area?.trim() || '',
              notes: row.notes?.trim() || ''
            }));

          resolve(doctors);
        },
        error: (error) => {
          reject(new Error(`CSV parsing error: ${error.message}`));
        }
      });
    });
  } catch (error) {
    throw new Error(`Failed to load doctors: ${error.message}`);
  }
}

// Helper functions for filtering
export const getSpecializations = (doctors) => {
  return [...new Set(doctors.map(doc => doc.specialization))].filter(Boolean).sort();
};

export const getAreas = (doctors) => {
  return [...new Set(doctors.map(doc => doc.area))].filter(Boolean).sort();
};
