


let array=["https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg" , "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg" , "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg" , "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg" ,] 

var channel=document.querySelectorAll(".channel")
var screen = document.getElementById("screen1")
for (let index = 0; index < array.length; index++) {
    channel[index].addEventListener("click" , ()=> {
        screen.src=array[index]
    })
    

    
}
