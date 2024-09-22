import db from "../config/db";
import User from "../Dto/userDto";

class UserRepositoty{
    static async registerUser(user: User): Promise <void>{
        const { email, username, pass } = user;
        await db.query('INSERT INTO usuario(email, username, pass) VALUES(?,?,?)',
            [email, username, pass]);
    }
}

export default UserRepositoty;