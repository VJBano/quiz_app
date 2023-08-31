import * as argon2 from 'argon2-browser';

export const hashPassword = async (password: string) => {

    const salt = new Uint8Array([
        0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88,
        0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 0x90,
      ]);

    // const hash = await argon2.hash(password, salt );

    // return hash;
  };

  export const verifyPassword = async (password: string, hashedPassword: string) => {
    // const isMatch = await argon2.verify(hashedPassword, password);
    // return isMatch;
  };