function addUser(){
    user_name=document.getElementById("user_input").value;
    localStorage.setItem("user_input",user_name);
    window.location="kwitter_room.html";
    
}