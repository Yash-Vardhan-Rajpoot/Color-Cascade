let buttons=document.querySelectorAll(".button");
buttons.forEach(function(button){
    button.addEventListener("click",function(event){
        if(event.target.id=="purple"){
            document.body.style.backgroundColor="purple";
        }
        else if(event.target.id=="red"){
            document.body.style.backgroundColor="red";
        }
        else if(event.target.id=="green"){
            document.body.style.backgroundColor="green";
        }
        else if(event.target.id=="blue"){
            document.body.style.backgroundColor="blue";
        }
        else if(event.target.id=="orange"){
            document.body.style.backgroundColor="orange";
        }
        else{
            document.body.style.backgroundColor="white";
        }
    })
})