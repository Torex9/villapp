import { NextRequest, NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Valid email is required' },
                { status: 400 }
            );
        }

        // Check environment variables
        if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
            console.error('Missing environment variables for Google Sheets integration');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Initialize Google Sheets
        const serviceAccountAuth = new JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth);
        await doc.loadInfo();

        // Get or create the first worksheet
        let sheet = doc.sheetsByIndex[0];
        if (!sheet) {
            sheet = await doc.addSheet({ title: 'Newsletter Signups' });
        }

        // Check if the sheet has headers, if not, add them
        try {
            await sheet.loadHeaderRow();
        } catch (error) {
            await sheet.setHeaderRow(['Email', 'Timestamp', 'Source']);
        }

        // Add the email to the sheet
        await sheet.addRow({
            Email: email,
            Timestamp: new Date().toISOString(),
            Source: 'Website Newsletter'
        });

        return NextResponse.json(
            { message: 'Email successfully added to waitlist' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Newsletter signup error:', error);

        // Detailed error logging for debugging
        if (error instanceof Error) {
            console.error('Error details:', {
                name: error.name,
                message: error.message,
                stack: error.stack
            });
        }

        return NextResponse.json(
            {
                error: 'Failed to process signup',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
