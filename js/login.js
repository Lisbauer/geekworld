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
        entrar = true
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre no es válido, utiliza al menos 6 caracteres',
          })

    }
    if(!regexEmail.test(email.value)){
        entrar = true
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El email no es válido',
          })
    }
    if(password.value.length < 6){
        entrar = true
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La contraseña no es válida, utiliza al menos 6 caracteres',
          })
    }
    if(entrar){
        aviso.innerHTML = notificacion
    }else{
        Swal.fire({
            icon: 'success',
            timer: 1500,
            title: 'Acceso Exitoso!',
            showConfirmButton: false,
            timer: 1500

          })
        setTimeout(() => {
            window.location = "../paginas/perfil.html"
        }, 1700);
        aviso.innerHTML = "Acceso exitoso!"
        
    }
})




