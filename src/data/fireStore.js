// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  getFirestore,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import products from "./products";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_APIKEY,
  authDomain: "proyectofinalreact-9f2f1.firebaseapp.com",
  projectId: import.meta.env.VITE_FIRESTORE_PROJECT_ID,
  storageBucket: "proyectofinalreact-9f2f1.firebasestorage.app",
  messagingSenderId: "131923703873",
  appId: import.meta.env.VITE_FIRESTORE_APP_ID,
  measurementId: "G-8L25L364GN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function getProducts() {
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const data = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  console.log(data);
  console.log(productsRef, documents);
  return data;
}

export async function getProductById(idParam) {
  const documentRef = doc(db, "products", idParam);
  const documentSnapshot = await getDoc(documentRef);
  const docData = documentSnapshot.data();
  return { id: documentSnapshot.id, ...docData };
}

export async function getProductsByCategory(categParam) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", categParam));
  const documentsSnapshot = await getDocs(q);
  const documents = documentsSnapshot.docs;
  const data = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return data;
}

export async function createBuyOrder(orderData) {
  const ordersRef = collection(db, "orders");
  const newOrderDoc = await addDoc(ordersRef, orderData);
  return newOrderDoc;
}

export async function exportProductsToFireStore() {
  for (let item of products) {
    delete item.id;
    const idDoc = await addDoc(collection(db, "products"), item);
  }
}

export default app;
