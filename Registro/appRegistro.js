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
var database = firebase.database();


let signupForm = document.querySelector('#formulario');//elegir el primer elemento
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();//retener el evento

     const email = document.querySelector('#signup-email').value;
     const p1= document.querySelector('#signup-password').value;
     const p2= document.querySelector('#passwordConfirm').value;
     const name= document.querySelector('#name').value;
     const lastname= document.querySelector('#lastname').value;
 
     let password;
     if (p1 == p2) {
         password=p1;
         alert("completado")
     }else{
         alert("CONTRASEÑAS NO SON IGUALES VUELVA A ESCRIBIR!!!")
     }
    
 
     const promise =auth
         .createUserWithEmailAndPassword(email,password)//crear un usuario con el correo y la contraseña
         .then(useCredential =>{//si devuelve ese objeto significa que ya ha sido creado
             //clear the form
             
             signupForm.reset();
             console.log(email, password);
             
         
             let usu = email.replace('@','_');
             let id= usu.replace('.','_');
            
             agregarUsuario(id,lastname,name);
           
             console.log('sign up');
            
             window.location="../index.html";
         });
         promise.catch(e => alert("Esta cuenta ya existe usa otra por favor"));
         
});

//sirve para remplazar datos y agregar tablas e id
function agregarUsuario(idu,lastname,name) {
  firebase.database().ref('usuario/'+idu).set({
      username: name,
      lastaname: lastname,
      id: idu,
      url: "null"
  },(error) => {
      if (error) {
        alert("[ERROR].NO SE REGISTRARON LOS DATOS");
      } 
   } );
}






    //leer contenido de la base de datos
   /* var starCountRef = firebase.database().ref('usuario/' + 2 + '/usuario');
    starCountRef.on('value', (snapshot) => {
        const data = snapshot.val();
        alert(data);
        console.log(data);
        });*/

        //verificacion de datos en caso de que algo falle
       /* database.child("usuario").child(1).get().then(function(snapshot) {
            if (snapshot.exists()) {
              console.log(snapshot.val());
              
            }
            else {
              console.log("No data available");
            }
          }).catch(function(error) {
            console.error(error);
          });*/

//envia los datos en tiempo real
function metodoOnce() {
    return firebase.database().ref('/usuario/ joelechegmailcom').once('value').then((snapshot) => {
        var username = (snapshot.val() && snapshot.val().usuario) || 'Anonymous';
        console.log(username);

        
    });

    
}
   metodoOnce();

   //quitar el evento
   firebase.database().ref('/usuario/ joelechegmailcom').off('value');
   

//actualizar todo un nodo
function writeNewPost() {
    // A post entry.
    var postData = {
      author: 'username',
      uid: 'uid',
      body: 'body',
      title: 'title',
      starCount: '0',
      authorPic: 'picture'
    };
  
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('usuario').push().key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/usuario/' + 2] = postData;
    updates['/usuario/' + 1+ '/' + newPostKey] = postData;

  
    return firebase.database().ref().update(updates);
  }


    /**evento value leer contenido
     * metodo on / once para detectar cambios, diferencia de once es instantaneo de on
     * false cuando llames a exists()
     * null cuando llames a val()
     * recibe una snapshot que contiene los datos de la ubicación específica en la base de datos en el momento en que ocurrió el evento.
     */





/*function writeUserData() {
   updates= firebase.database().ref('notas/1/nombre').remove();
   
}*/


