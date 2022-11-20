var myImages =["paris.jpg", "vatican.jpg", "london.jpg", "arizona.jpg", "kauai.jpg"];


var captionImages =["Eiffel Tower, Paris", "Vatican, Rome","Red Phone Booth, London","Grand Canyon, Arizona","Napali Coast, Kauai"];

var index=0; 

function updateImage(){
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt= captionImages[index];
    document.getElementById("caption").textContent = captionImages[index]; 
    } 

function next(){
    if (myImages.length == index+1){
    index=0;}
    else
    {index++;
    updateImage();
    }}

function back(){
    if (index===0)
    index=myImages.length-1;
    else
    index--;
    updateImage();
    }
   
var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 
   
previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
    if (document.getElementById("auto").checked)
      setInterval(autoSlide,2000); // next();
}
