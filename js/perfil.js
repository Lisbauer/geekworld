
// Perfil


let user = localStorage.getItem("usuario")
let contraseña = localStorage.getItem("password")
let mail = localStorage.getItem("email")

const username = document.getElementById("nombreperfil")

const usermail = document.getElementById("emailperfil")


username.innerHTML= user

usermail.innerHTML = mail

let timerInterval
// operador ternario para redireccionar al ingresa si no esta logueado

user == null ?

Swal.fire({
  title: 'No estas logueado, no puedes estar aqui',
  html: 'Seras enviado al ingreso en <b></b> milliseconds .',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    window.location.replace("../paginas/ingresa.html")
  }
})

: console.log("estas adentro")


const usuario = {
    nombre : user,
    correo : mail,
}
const desectructurar = ({nombre, correo}) => {
    console.log(nombre, correo)
}

desectructurar(usuario)

