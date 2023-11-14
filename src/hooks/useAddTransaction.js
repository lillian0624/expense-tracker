import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";

export const useAddTransaction = () => {
  let transactionCollectionRef = collection(db, "transactions");

  const useAddTransaction = async () => {
    await addDoc(transactionCollectionRef, {
      userID: "",
      description: "",
      transactionAmount: 0,
      transactionType: "",
      createAt: serverTimestamp(),
    });
  };
  return {};
};
