let buttons =document.querySelectorAll(".btn")
const body= document.querySelector("body")
let btns=buttons.forEach((item)=>{
    console.log(item)

    item.addEventListener("click",function(e){
        console.log("button is clicked")
        console.log(e)
        if(e.target.id == "pink"){
            body.style.backgroundColor= e.target.id
        }
         if(e.target.id == "green"){
            body.style.backgroundColor= e.target.id
        }
         if(e.target.id == "blue"){
            body.style.backgroundColor= e.target.id
        }
         if(e.target.id == "yellow"){
            body.style.backgroundColor= e.target.id
        }

    })
    

})
