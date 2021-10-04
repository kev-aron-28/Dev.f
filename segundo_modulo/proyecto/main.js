
class Account{
    constructor(name, email, password, phone, date){
        this.name = name;
        this.email = email; 
        this.password = password; 
        this.phone = phone; 
        this.data = date;
       	this.money = 0;
	this.saludo = "!hola";
    	
    }
}

const createAccount = () => {

    const name = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone-number").value;
    const birth = document.getElementById("birth-date").value;
    
    if(!name || !password || !email || !phone || !birth) {
        alert("Ocurrio un error");
        return;
    }


    const newUser = new Account(name, email, password, phone, birth);
    localStorage.setItem("user", JSON.stringify(newUser));

    window.location.assign("http://127.0.0.1:5500/proyecto/login.html");
}


const login = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value;
    if(user.email === email && password === user.password){
        window.location.assign("http://127.0.0.1:5500/proyecto/user.html");
    } else {
        alert("Correo o contraseña incorrectos")
    }
}

const setInfo = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user.name);
    document.getElementById("account").innerHTML = `$${user.money}`;
    document.getElementById("name").innerHTML = user.name;
    document.getElementById("email").innerHTML = user.email;
    document.getElementById("phone").innerHTML = user.phone;
}

const insert = () => {
    let u = JSON.parse(localStorage.getItem("user"));
    let value = document.getElementById("insert").value;
    if(u.money + parseInt(value) > 990 || !value){
        alert("No es posible realizar la transacción");
        return; 
    }
    let result = u.money + parseInt(value);
    u.money = parseInt(result);
    localStorage.setItem("user", JSON.stringify(u));
    document.getElementById("account").innerHTML = `$${result}`;       
}

const retirar = () => {
    let u = JSON.parse(localStorage.getItem("user"));
    let value = document.getElementById("retirar").value;

    if(u.money - parseInt(value) < 10 || !value){
        alert("No es posible realizar la transacción");
        return;
    }

    let result = u.money - parseInt(value);
    u.money = parseInt(result);
    localStorage.setItem("user", JSON.stringify(u));
    document.getElementById("account").innerHTML = `$${result}`;       
}

const n = [1,2,3].map(e => {
    return e*2;
})

