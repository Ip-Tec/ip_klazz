// @/utils/db.js
// Utility functions for IndexedDB operations
// This file can be imported in both client and server contexts

// Open (or create) the IndexedDB database
export function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("klazz-db", 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore("pages", { keyPath: "id" }); // e.g., id = `${lang}/${slug}`
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Save a page to the database
export async function savePage(id, content) {
  const db = await openDB();
  const tx = db.transaction("pages", "readwrite");
  const store = tx.objectStore("pages");
  await store.put({
    id,
    content,
    updatedAt: new Date().toISOString(),
  });
  await tx.complete;
}

// Retrieve a page from the database
export async function getPage(id) {
  const db = await openDB();
  const tx = db.transaction("pages", "readonly");
  const store = tx.objectStore("pages");
  const result = await store.get(id);
  await tx.complete;
  return result || null;
}

// Delete a page from the database
export async function deletePage(id) {
  const db = await openDB();
  const tx = db.transaction("pages", "readwrite");
  tx.objectStore("pages").delete(id);
  return tx.complete;
}
