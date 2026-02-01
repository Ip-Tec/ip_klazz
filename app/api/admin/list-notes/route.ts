import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import admin from 'firebase-admin';

if (!admin.apps.length) {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    try {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } catch (error) {
       // Retry by escaping newlines (common issue with Vercel env vars)
       try {
         console.warn("Initial JSON parse failed, attempting to sanitize newlines...");
         const sanitized = process.env.FIREBASE_SERVICE_ACCOUNT_KEY.replace(/\n/g, "\\n");
         const serviceAccount = JSON.parse(sanitized);
         admin.initializeApp({
             credential: admin.credential.cert(serviceAccount),
         });
       } catch (retryError) {
         console.error("FIREBASE_SERVICE_ACCOUNT_KEY parsing failed:", error);
         console.warn("Skipping firebase-admin init during build.");
       }
    }
  } else {
    // Warn but don't crash during build
    console.warn("FIREBASE_SERVICE_ACCOUNT_KEY not set (skipping firebase-admin init)");
  }
}

async function getAllMdFiles(dir: string, base: string = ""): Promise<string[]> {
  const items = await fs.readdir(dir, { withFileTypes: true });
  let results: string[] = [];

  for (const item of items) {
    if (item.isDirectory()) {
      const subResults = await getAllMdFiles(path.join(dir, item.name), path.join(base, item.name));
      results = [...results, ...subResults];
    } else if (item.name.endsWith('.md')) {
      results.push(path.join(base, item.name));
    }
  }
  return results;
}

export async function GET(request: Request) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(token);
    
    // Check for admin claim
    if (!decodedToken.admin) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const notesDir = path.join(process.cwd(), 'public', 'Note');
    const files = await getAllMdFiles(notesDir);
    
    return NextResponse.json({ files });
  } catch (error) {
    console.error('List Notes Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
