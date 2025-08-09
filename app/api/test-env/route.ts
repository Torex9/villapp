import { NextResponse } from 'next/server';

export async function GET() {
    const hasServiceEmail = !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const hasPrivateKey = !!process.env.GOOGLE_PRIVATE_KEY;
    const hasSheetId = !!process.env.GOOGLE_SHEET_ID;

    return NextResponse.json({
        envVariables: {
            GOOGLE_SERVICE_ACCOUNT_EMAIL: hasServiceEmail,
            GOOGLE_PRIVATE_KEY: hasPrivateKey,
            GOOGLE_SHEET_ID: hasSheetId,
        },
        serviceAccountEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ? process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL.substring(0, 20) + '...' : 'missing',
        sheetId: process.env.GOOGLE_SHEET_ID ? process.env.GOOGLE_SHEET_ID.substring(0, 10) + '...' : 'missing'
    });
}
