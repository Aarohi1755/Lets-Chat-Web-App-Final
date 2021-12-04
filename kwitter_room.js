var firebaseConfig = {
      apiKey: "AIzaSyBuqsjbenXpSaI0d3NW8V-rdt01DB1INz0",
      authDomain: "kwitter-ca7f6.firebaseapp.com",
      databaseURL: "https://kwitter-ca7f6-default-rtdb.firebaseio.com",
      projectId: "kwitter-ca7f6",
      storageBucket: "kwitter-ca7f6.appspot.com",
      messagingSenderId: "902165086792",
      appId: "1:902165086792:web:1b142b53497581da72ce7d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username=localStorage.getItem("user_input");
document.getElementById("welcome_user").innerHTML="𝓦𝓮𝓵𝓬𝓸𝓶𝓮 " + username + " !";


function AddRoom(){
      Roomname=document.getElementById("room_input").value;
      firebase.database().ref("/").child(Roomname).update({
            purpose:"adding room name"
      });
      localStorage.setItem("Roomname",Roomname);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function Logout(){
      window.location="index.html";
      localStorage.removeItem("Roomname");
      localStorage.removeItem("User");
}

function redirectToRoomName(room_chosen){
      window.location="kwitter_page.html";
      localStorage.setItem("Roomname", room_chosen);
      console.log("Room name chosen= "+ room_chosen);
}
