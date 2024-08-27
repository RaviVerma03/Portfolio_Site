import { NEW_MESSAGE } from "./types";
import { v4 as uuidv4 } from 'uuid'; // Importing v4 function from uuid


export const newMessage = text => {
    return {
        type:NEW_MESSAGE,
        item: {id:uuidv4(),text,timestamp:Date.now()}
    }
}