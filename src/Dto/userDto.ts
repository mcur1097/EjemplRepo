class User{
    private _email: string;
    private _username: string;
    private _pass: string;

    constructor(
        email:string,
        username:string,
        pass:string
    ){
        this._email = email;
        this._username = username;
        this._pass = pass;
    }

    get email(){
        return this._email
    }
    get username(){
        return this._username;
    }
    get pass(){
        return this._pass;
    }

    set email(email:string){
        this._email = email
    }
    set username(username:string){
        this._username = username;
    }
    set pass(pass:string){
        this._pass = pass
    }
}

export default User;