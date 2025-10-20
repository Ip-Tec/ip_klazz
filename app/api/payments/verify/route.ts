import { NextResponse } from 'next/server';
import admin from 'firebase-admin';

// Initialize Firebase Admin
if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY!);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const transRef = searchParams.get('transRef');

  if (!transRef) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/payment/error?message=No transaction reference provided.`);
  }

  try {
    const response = await fetch(`https://api.credocentral.com/transaction/${transRef}/verify`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.CREDO_SECRET_KEY!,
      },
    });

    const data = await response.json();

    if (data.status === 200 && data.data.status === 0) { // Assuming status 0 is successful payment
      const { metadata } = data.data;
      const { userId, course } = metadata;

      // Update user's custom claims
      await admin.auth().setCustomUserClaims(userId, { [`paid_${course}`]: true });

      // Redirect to a success page
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/payment/success`);
    } else {
      console.error('Credo Verification Error:', data);
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/payment/error?message=Payment verification failed.`);
    }
  } catch (error) {
    console.error('Verification API Error:', error);
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/payment/error?message=An error occurred during verification.`);
  }
}
