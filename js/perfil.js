
// Perfil


let user = localStorage.getItem("usuario")
let contraseña = localStorage.getItem("password")
let mail = localStorage.getItem("email")

const username = document.getElementById("nombreperfil")

const usermail = document.getElementById("emailperfil")


username.innerHTML= user

usermail.innerHTML = mail

// operador ternario para redireccionar al ingresa si no esta logueado
user == null ? window.location.replace("../paginas/ingresa.html") : console.log("estas adentro")


const usuario = {
    nombre : user,
    correo : mail,
}
const desectructurar = ({nombre, correo}) => {
    console.log(nombre, correo)
}

desectructurar(usuario)