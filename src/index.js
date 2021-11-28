function IniciarSesion(){
   usuario = document.getElementById('txtusuario').value;
   password = document.getElementById('txtpassword').value;

   if(usuario == 'admin' && password == '123456'){
   swal({
    title: "Bienvenido",
    text : "Inicio de Sesión exitoso",
    icon : 'success',
   }).then(()=>{
     window.location.href = "./pages/inicio/inicio.html"
   
    })
   }else{
    swal({
        title: "Credenciales invalidas",
        text : "Usuario o contraseña incorrecta",
        icon : 'error',
   
     })
   }
}

