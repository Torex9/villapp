# Newsletter Signup with Google Sheets Integration Setup Guide

## Overview

This setup allows users to submit their email addresses through the newsletter signup form, which are then automatically saved to a Google Sheet with visual feedback.

## Features Implemented

- ✅ Visual loading state with spinner
- ✅ Success message replaces form after submission
- ✅ Form validation and error handling
- ✅ Google Sheets integration
- ✅ Responsive design

## Google Sheets Setup Instructions

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "TRCK Newsletter Signups" (or any name you prefer)
4. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`

### Step 2: Create a Google Cloud Project & Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and enable it

### Step 3: Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Give it a name like "newsletter-signup-service"
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

### Step 4: Generate Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Select JSON format
5. Download the JSON file - **Keep this secure!**

### Step 5: Share Google Sheet with Service Account

1. Open your Google Sheet
2. Click the "Share" button
3. Add the service account email (found in the JSON file as "client_email")
4. Give it "Editor" permissions
5. Click "Send"

### Step 6: Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-google-sheet-id
```

#### How to get these values:

- **GOOGLE_SERVICE_ACCOUNT_EMAIL**: Copy from "client_email" in your JSON file
- **GOOGLE_PRIVATE_KEY**: Copy from "private_key" in your JSON file (keep the quotes and \n characters)
- **GOOGLE_SHEET_ID**: Copy from your Google Sheet URL

### Step 7: Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to the homepage
3. Scroll to the newsletter signup section
4. Enter a test email and click "Get on TRCK"
5. Check your Google Sheet - the email should appear with a timestamp

## Google Sheet Structure

The API will automatically create these columns:

- **Email**: The submitted email address
- **Timestamp**: When the signup occurred (ISO format)
- **Source**: Always "Website Newsletter" for tracking

## Security Notes

- Never commit the `.env.local` file to version control
- The service account has minimal permissions (only Google Sheets access)
- The private key should be kept secure and never shared publicly

## Troubleshooting

- **"Failed to process signup"**: Check your environment variables
- **Google API errors**: Ensure the service account has access to the sheet
- **Network errors**: Check your internet connection and API quotas

## Next Steps

You can extend this system by:

- Adding more fields (name, phone, location preference)
- Setting up email notifications when someone signs up
- Creating analytics dashboards from the Google Sheet data
- Integrating with email marketing platforms
