var firebaseConfig = {
    apiKey: "AIzaSyAG16w3jHXx7EimHCQooR5-ZJxcxU-LLko",
    authDomain: "hotelmitaddelmundo-5dadb.firebaseapp.com",
    projectId: "hotelmitaddelmundo-5dadb",
    storageBucket: "hotelmitaddelmundo-5dadb.appspot.com",
    messagingSenderId: "668467986564",
    appId: "1:668467986564:web:1e13dcfba718ea196d82d1",
    measurementId: "G-K86BDG1JX5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();



let signinForm = document.querySelector('#formulario');//elegir el primer elemento
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();//retener el evento

     const email = document.querySelector('#signin-email').value;
     const password= document.querySelector('#signin-password').value;
 

     const promise =auth
         .signInWithEmailAndPassword(email,password)//crear un usuario con el correo y la contraseña
         .then(useCredential =>{//si devuelve ese objeto significa que ya ha sido creado
             //clear the form
             
             signinForm.reset();
             console.log(email, password);
             console.log('sign in');
            
             window.location="../index.html";
         });
         promise.catch(e => alert("Usuario o clave son incorrectos"));
    
});

function logout() { 
    auth.signOut();
}

function analizarLogueo() {
    
    auth.onAuthStateChanged(function(user) {//verifica cual es el usuario actual
        if (user) {
          var user = firebase.auth().currentUser;//obtener el usuario que accedió
          var name, email, photoUrl, uid;
            name = user.displayName;//obtener el nombre
            email = user.email;//obtener email
            uid = user.uid;// obtner identificador del usuario
            console.log("Logeado: " + email );
                if (name != null) {
                  usuariologed.innerHTML=name + " - " + email;
                }else{
                   datos(email)
                  usuariologed.innerHTML=email;
                 // document.getElementById('activado').disabled=false;
                 
                }
          } else {
            usuariologed.innerHTML="";
            $('.dialog-card').hide();
            $('.reservarAhora').html("Para hacer tus reservas Inicia Sesión");
            //document.getElementById('activado').innerHTML="Para hacer tus reservas Inicia Sesión";
        }
    });

    /*btnLogout.addEventListener('click', e => {
        //firebase.auth().signOut();//salir de la autenticacion
       // 
       alert("si hay conexion");
        });*/
  }
  
  
function datos(email) {
    let usu = email.replace('@','_');
    let id= usu.replace('.','_');
    var rs="";
    
    //leer contenido de la base de datos
    var starCountRef = firebase.database().ref('usuario/'+id);
    starCountRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        
        nomb.innerHTML=data.username+" "+data.lastaname;
        
        });
}
 //leer contenido de la base de datos
   /* var starCountRef = firebase.database().ref('usuario/' + 2 + '/usuario');
    starCountRef.on('value', (snapshot) => {
        const data = snapshot.val();
        alert(data);
        console.log(data);
        });*/
  

