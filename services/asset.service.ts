import { db } from '@/firebase.config';
import { Asset } from '@/model/finance';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const getAssets = async (uid: string) => {
    const assetsCollection = collection(db, 'assets');
    const q = query(assetsCollection, where("userId", "==", uid));
    const querySnapshot = await getDocs(q);
    const assets: Asset[] = [];
    querySnapshot.forEach((doc) => {
        assets.push(doc.data() as Asset);
    });
    console.log("assets: ", assets);
    return assets;
}