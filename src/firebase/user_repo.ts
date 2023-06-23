import { doc, setDoc } from "firebase/firestore";
import { UserList } from "../models/users_types/users_types"
import { db } from './config';

const CreateUser = async (user:UserList) => {
    
    try {
        
        const docRef = doc(db, "Users", user.id);
        await setDoc(docRef, user);
        
        console.log(`Successfully create User: ${user.username}`)
        return true;

    } catch (error) {
        
        console.log("create user: ", error)
        return false;
    }
}

const UpdateUser = async () => {
    
    try {
        
    } catch (error) {

        console.log("update user: ", error)
    }
}

const FetchUser =async () => {
    
    try {
        
    } catch (error) {
        
        console.log("fetch user: ", error)
    }
}

const DeleteUser =async () => {
    
    try {
        
    } catch (error) {
        
        console.log("delete user: ", error)
    }
}

export {
    CreateUser,
    UpdateUser,
    FetchUser,
    DeleteUser
}