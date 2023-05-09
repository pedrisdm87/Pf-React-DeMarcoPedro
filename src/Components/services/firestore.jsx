import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs , doc, getDoc, query, where} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAfnaANbgvEOOvHkbsdhnVhLrfkBhHvXLE",
  authDomain: "pf-react-demarco.firebaseapp.com",
  projectId: "pf-react-demarco",
  storageBucket: "pf-react-demarco.appspot.com",
  messagingSenderId: "483455549687",
  appId: "1:483455549687:web:dd5c4c8d956e844a1553f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//----------------------------------------------------//

 export async function  getItems(){
const productsRef = collection(db, "products");
const productsSnap = await getDocs(productsRef);
const documents = productsSnap.docs;

const docsData = documents.map((doc) => {
  return { id: doc.id, ...doc.data()};
});

return docsData;
}

export async function getSingleItem(idURL){
//referencia
  const docRef = doc( db, "products", idURL);
//snapshot
const docSnap = await getDoc(docRef)
return { id: docSnap.id, ...docSnap.data()};

}

export async function getItemsByCategory(categoryid){


  const productsRef = collection(db, "products");


const q = query (productsRef, where ("category", "==",categoryid)) //crear consulta a productosRef CUANDO se cumpla Where()

const productsSnap = await getDocs(q);
const documents = productsSnap.docs;

const docsData = documents.map((doc) => {
  return { id: doc.id, ...doc.data()};
});

return docsData;

}/* 
 export async function createOrder(order) {
  const collectionOrdersRef = collection( db, "orders");
  const response = await addDoc (collectionOrdersRef, order);
  return response.id;
}

export async function exportData(){
   const collectionRef = collection(db, "products")
   for(let item of products){
    await addDoc(collectionRef, item);

   }} */