document.querySelector("#buttonright").addEventListener("click", function (){

    document.querySelector("#imagess").setAttribute("src", `person2.jpeg`);
    document.querySelector(".desc").innerHTML = "Geweldige app, Rest Quest zorgt ervoor dat ik mijn angsten kan beheersen.";
    document.querySelector(".nema").innerHTML = "Yente Beyens";


});

document.querySelector("#buttonleft").addEventListener("click", function (){

    document.querySelector("#imagess").setAttribute("src", `person0.jpeg`);
    document.querySelector(".desc").innerHTML = "Rest Quest heeft mij enorm geholpen met mijn paniekaanvallen. Top app!";
    document.querySelector(".nema").innerHTML = "John Doe";

});

document.querySelector("#mail").addEventListener("keyup", function(){
    let email = this.value;
    let at = email.indexOf("@");
    let point = email.indexOf(".");

    if(at < 1){
        document.querySelector("#feedback").innerHTML = "Vul een geldig e-mailadres in.";
    } else {
        document.querySelector("#feedback").innerHTML = "";
    }

    if(point == -1){
        document.querySelector("#feedback").innerHTML = "Vul een geldig e-mailadres in.";
    } 

});


document.querySelector("#submit").addEventListener("click", function(e){
    e.preventDefault();
    console.log("clicks");
    let question = document.querySelector("#question").value;
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#mail").value;

    if(question == ""){
        document.querySelector("#feedback").innerHTML = "Vul je vraag in.";

    } else if(name == ""){
        document.querySelector("#questionfeedback").innerHTML = "Vul je naam in.";

    }else if(email == ""){
        document.querySelector("#questionfeedback").innerHTML = "Vul je e-mailadres in.";

    } else if (question != "" && name != "" && email != ""){

    let names = document.querySelector("#name").value;
    let email = document.querySelector("#mail").value;
    let question = document.querySelector("#question").value;

    document.querySelector("#empty").innerHTML = "";

    document.querySelector("#forms").innerHTML = 
    
    `Bedankt voor je bericht, we beantwoorden je vraag zo snel mogelijk. <br><br>
    Naam: ${names} <br><br>
    E-mail: ${email} <br><br>
    Jouw vraag: ${question}.`;

    }



});


