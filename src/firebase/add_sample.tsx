import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from './config';
import { UserList } from '../models/users_types/users_types';


export const Add_Sample = async (data:UserList) => {
 
    try {
        
        const add = await addDoc(collection(db, "Users"), {
            id: data.id,
            username:data.username,
            email: data.email,
            password: data.password,
            recoveryKey:data.recoveryKey    
          });
         return  `SuccessFully Add ${add.id}`

    } catch (err) {
        
        return `Error adding document: ${err}`
    }
}


