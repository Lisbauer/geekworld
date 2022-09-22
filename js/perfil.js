
// Perfil

let user = localStorage.getItem("usuario")
let contraseña = localStorage.getItem("password")
let mail = localStorage.getItem("email")

const username = document.getElementById("nombreperfil")

const usermail = document.getElementById("emailperfil")


username.innerHTML= user

usermail.innerHTML = mail