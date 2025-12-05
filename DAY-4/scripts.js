function myfunc(){
    // let name = document.getElementById("username").value;
    // let pass = document.getElementById("password").value;
    let name1 = document.getElementById("username").value;
    let pass1 = document.getElementById("password").value;
    if(name1 === "sree" && pass1 === "celleb"){
        alert("LOGIN SUCCESSFUL");
        window.location.href = "homepage.html";
    }
    else {
        alert("LOGIN FAILED");
       
    }
}