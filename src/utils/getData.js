import { firebaseConfig } from "../FB/Firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const getData = async () => {
    const docs = [];
    try {
      const querySnapshot = await getDocs(collection(db, "BeerConf"));

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    return docs
  };
  
  
