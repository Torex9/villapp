import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        console.log('Simple newsletter signup API called');
        const { email } = await request.json();
        console.log('Email received:', email);

        if (!email || !email.includes('@')) {
            console.log('Invalid email provided');
            return NextResponse.json(
                { error: 'Valid email is required' },
                { status: 400 }
            );
        }

        // For now, just log the email and return success
        console.log('✅ Newsletter signup successful for:', email);
        console.log('📧 Email would be saved to Google Sheets');

        return NextResponse.json(
            { message: 'Email successfully added to waitlist' },
            { status: 200 }
        );
    } catch (error) {
        console.error('❌ Newsletter signup error:', error);

        return NextResponse.json(
            {
                error: 'Failed to process signup',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
