// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDbvmtj4_aWKwJwbejbkw6lBliVpeJ25zA",
    authDomain: "kwitter-fab1e.firebaseapp.com",
    databaseURL: "https://kwitter-fab1e-default-rtdb.firebaseio.com",
    projectId: "kwitter-fab1e",
    storageBucket: "kwitter-fab1e.appspot.com",
    messagingSenderId: "995560869687",
    appId: "1:995560869687:web:6eddd00d29bb107f7b94b2",
    measurementId: "G-BT8G8369NP"
  };
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname is" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kitter_page.html"
}