import { NextResponse } from 'next/server';
import admin from 'firebase-admin';

// Initialize Firebase Admin
if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY!);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export async function POST(request: Request) {
  const { course, amount, currency, idToken } = await request.json();

  try {
    // Verify the ID token and get the user
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    const user = await admin.auth().getUser(decodedIdToken.uid);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const transRef = `klazz-${course}-${user.uid}-${Date.now()}`;

    const credoRequestBody = {
      amount,
      currency,
      transRef,
      customerEmail: user.email,
      customerName: user.displayName || user.email,
      callbackUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api/payments/verify?transRef=${transRef}`,
      metadata: {
        course,
        userId: user.uid,
      },
    };

    const response = await fetch('https://api.credocentral.com/transaction/initialize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.CREDO_SECRET_KEY!,
      },
      body: JSON.stringify(credoRequestBody),
    });

    const data = await response.json();

    if (data.status === 200) {
      return NextResponse.json({ authorizationUrl: data.data.authorizationUrl });
    } else {
      console.error('Credo API Error:', data);
      return NextResponse.json({ error: 'Could not initiate payment' }, { status: 500 });
    }
  } catch (error) {
    console.error('Firebase or Network Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
