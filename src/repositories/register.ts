import bcrypt from 'bcrypt'

import db from "../config/db";
import User from "../Dto/userDto";

class UserRepositoty{
    static async registerUser(user: User): Promise <void>{
        const { email, username, pass } = user;
        const hashPass = await bcrypt.hash(pass,10);
        await db.query('INSERT INTO usuario(email, username, pass) VALUES(?,?,?)',
            [email, username, hashPass]);
    }
}

export default UserRepositoty;