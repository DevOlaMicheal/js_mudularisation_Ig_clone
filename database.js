const request = indexedDB.open('instagram', 4)
request.onsuccess = () => {
    const database = request.result
    console.log('success creating or accessing db');
    console.log(request)
   
}

request.onupgradeneeded = () => {
    const database = request.result
    database.createObjectStore('bio', {autoIncrement: true})
    database.createObjectStore('gallery', {autoIncrement: true})
}




request.onerror = () => {
    console.log('Error creating db');
}


const addEntryToDb = (storeName, entry) => {
    const database = request.result
    const transaction = database.transaction([storeName], 'readwrite')
    const store = transaction.objectStore(storeName)
    store.add(entry)

    transaction.oncomplete = () => alert(`Entry aded to ${storeName}`)
    transaction.onerror = (event) => {
        console.log("errorr addint to" + storeName)
        console.log(event.target.error);
    }
}

const getEntryFromDb = (storeName, id) => {
    const database = request.result
    const transaction = database.transaction([storeName])
    const store = transaction.objectStore(storeName)
    const getData = id ? store.get(id) : store.getAll()
    
    getData.onsuccess = () => {
        console.log("success", getData .result);
    }
    getData.onerror = () => {
        console.log("error getting data");
    }

}


export { request, addEntryToDb, getEntryFromDb } 
