import { db } from '@/firebase.config';
import { User } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export const saveUser = async (user: User) => {
    const docref = await setDoc(doc(db, "users", user.uid),
        JSON.parse(JSON.stringify(user))
    );
}