    const nombre = document.getElementById("nombre")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const form = document.getElementById("formulario")
    const aviso = document.getElementById("notificacion")



    function entrar(){
        const usuario = document.getElementById('nombre').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        
       localStorage.setItem('usuario', usuario)
       localStorage.setItem('password', password)
       localStorage.setItem('email', email)
        
    }
    let user = localStorage.getItem("usuario")
    let contraseña = localStorage.getItem("password")
    let mail = localStorage.getItem("email")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let notificacion = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   aviso.innerHTML = ""
    if(nombre.value.length <4){
        notificacion += `El nombre no es lo suficientemente largo, utiliza al menos 4 caracteres <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        notificacion += `El email no es válido <br>`
        entrar = true
    }
    if(password.value.length < 6){
        notificacion += `La contraseña no es válida, utiliza al menos 6 caracteres  <br>`
        entrar = true
    }
    if(entrar){
        aviso.innerHTML = notificacion
    }else{
        aviso.innerHTML = "Acceso exitoso!"
        console.log(usuario) 
        window.location.replace("../paginas/perfil.html");
    }
})

