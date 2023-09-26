class User{
    imgName;
    imgSrc;
    id;
    constructor(name, email, pass, id = null){
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.id = id;
    }
}
module.exports = User;

