import { Request, Response } from "express";
import User from "../Dto/userDto";
import UserRepositoty from "../repositories/register";

class UserController{
    static async RegisterUser(req:Request, res:Response){
        const user:User = req.body;
        try {
            if(!user){
                return res.status(400).json({message: 'Necesita ingresar todos los datos'})
            }
            await UserRepositoty.registerUser(user);
            return res.status(201).json({
                message: 'Usuario Registrado',
                user
            });
        } catch (error) {
            console.error('error al registrar', error);
            res.status(500).json('Erro al registrar')
        }
    }
}

export default UserController;