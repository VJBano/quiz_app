

export const ID_Generator = () => {

    const keyString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
  
    for (let i = 0; i < 20; i++) {
      if (i > 0 && i % 5 === 0) {
        id += "-";
      }
      id += keyString.charAt(Math.floor(Math.random() * keyString.length));
    }
  
    return id;
  }
