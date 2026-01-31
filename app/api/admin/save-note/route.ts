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

export async function POST(request: Request) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(token);
    
    if (!decodedToken.admin) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { filePath, content } = await request.json();
    
    if (!filePath || typeof content !== 'string') {
        return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    // Safety check: ensure the path is within public/Note
    const notesDir = path.join(process.cwd(), 'public', 'Note');
    const fullPath = path.join(notesDir, filePath);
    
    if (!fullPath.startsWith(notesDir)) {
        return NextResponse.json({ error: 'Invalid path' }, { status: 403 });
    }

    await fs.writeFile(fullPath, content, 'utf8');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Save Note Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
