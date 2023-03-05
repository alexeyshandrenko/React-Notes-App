export const idb = window.indexedDB;

export const createCollectionsInIndexedDB = () => {
  if (!idb) {
    console.log("This browser doesn't support IndexedDB");
    return;
  }

  const request = idb.open("test-db", 2);

  request.onerror = (event: any) => {
    console.log("Error", event);
    console.log("An Error occured with IndexedDB");
  };

  request.onupgradeneeded = (event: any) => {
    const db = request.result;
    if (!db.objectStoreNames.contains("noteData")) {
      db.createObjectStore("noteData", {
        keyPath: "id",
      });
    }
  };

  request.onsuccess = () => {
    console.log("Database opened successfully");
  };
};
