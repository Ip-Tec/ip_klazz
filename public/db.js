// db.js
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
export async function savePage(id, content) {
  const db = await openDB();
  const tx = db.transaction("pages", "readwrite");
  const store = tx.objectStore("pages");
  await store.put({ id, content });
  await tx.complete;
}
export async function getPage(id) {
  const db = await openDB();
  const tx = db.transaction("pages", "readonly");
  const store = tx.objectStore("pages");
  const result = await store.get(id);
  await tx.complete;
  return result ? result.content : null;
}