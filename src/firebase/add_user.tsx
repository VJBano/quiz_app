import React from 'react'
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from './config';
import { UserList } from '../models/users_types/users_types';


export const Add_User = async (data:UserList) => {
 
    try {
        
        const docRef = doc(db, "Users", data.id);
        await setDoc(docRef, data);
        
        return `Successfully added User: ${data.username}`;
    } catch (err) {
        
        return `Error adding User: ${err}`
    }
}


