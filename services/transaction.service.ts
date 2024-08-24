import { db } from '@/firebase.config';
import { collection, getDocs, or, query, Transaction, where } from 'firebase/firestore';

export const getTransactions = async (uid: string) => {
    const assetsCollection = collection(db, 'transactions');
    const q = query(assetsCollection, or(where("fromUserId", "==", uid), where("toUserId", "==", uid)));
    const querySnapshot = await getDocs(q);
    const transactions: Transaction[] = [];
    querySnapshot.forEach((doc) => {
        transactions.push(doc.data() as Transaction);
    });
    console.log("transactions", transactions);
    return transactions;
}