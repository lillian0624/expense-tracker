import { useEffect, useState } from "react";
import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const { userID } = useGetUserInfo();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Check if userID is available before constructing the query
        if (userID) {
          const transactionCollectionRef = collection(db, "transactions");
          const queryTransactions = query(
            transactionCollectionRef,
            where("userID", "==", userID),
            orderBy("createdAt")
          );

          const unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
            let docs = [];

            snapshot.forEach((doc) => {
              const data = doc.data();
              const id = doc.id;

              docs.push({ ...data, id });
            });

            setTransactions(docs);
          });

          return () => {
            // Cleanup function
            if (unsubscribe) {
              unsubscribe();
            }
          };
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchTransactions();
  }, [userID]);

  console.log("Transactions:", transactions);

  return { transactions };
};
