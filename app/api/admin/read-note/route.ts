import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import admin from 'firebase-admin';

if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY!);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filePath = searchParams.get('path');
  const authHeader = request.headers.get('Authorization');

  if (!authHeader) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!filePath) return NextResponse.json({ error: 'Missing path' }, { status: 400 });

  try {
    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(token);
    
    if (!decodedToken.admin) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const notesDir = path.join(process.cwd(), 'public', 'Note');
    const fullPath = path.join(notesDir, filePath);
    
    if (!fullPath.startsWith(notesDir)) {
        return NextResponse.json({ error: 'Invalid path' }, { status: 403 });
    }

    const content = await fs.readFile(fullPath, 'utf8');
    
    return NextResponse.json({ content });
  } catch (error) {
    console.error('Read Note Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
