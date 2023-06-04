

export const Key_Generator = (length:number) => {
 
const keyString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let id = "";

for (let i = 0; i < length; i++) {
    id += keyString.charAt(Math.floor(Math.random() * keyString.length));
  }


  return id;
}

