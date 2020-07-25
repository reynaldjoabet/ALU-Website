const slides=document.querySelectorAll('.slide');
const next=document.querySelector('#next');
const prev=document.querySelector('#prev');
const auto =true;
const intervalTime=8000;
let slideInterval;
const nextSlide=()=>{
    //get current class
    const current=document.querySelector('.current');
    //remove current class
    current.classList.remove('current'); 
    //check for next slide
    if(current.nextElementSibling){
        //add current to next sibling
        current.nextElementSibling.classList.add('current');
    }
    else{
         //add current to start of array
        slides[0].classList.add('current');

    }
    setTimeout(()=>current.classList.remove('current'))
};

const prevSlide=()=>{
    //get current class
    const current=document.querySelector('.current');
    //remove current class
    current.classList.remove('current'); 
    //check for previous slide
    if(current.previousElementSibling){
        //add current to previous sibling
        current.previousElementSibling.classList.add('current');
    }
    else{
       
        //add current to last.
        //arrays are zero indexed 
        slides[slides.length-1].classList.add('current');

    }
    setTimeout(()=>current.classList.remove('current'))
};
// button events
next.addEventListener('click',e=>{
    nextSlide(); 
    if(auto){
        clearInterval(slideInterval);
        slideInterval=setInterval(nextSlide,intervalTime);
    }
});

prev.addEventListener('click',e=>{
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval=setInterval(nextSlide,intervalTime);
    }
});

if(auto){
    //run next slide at interval time
    slideInterval=setInterval(nextSlide,intervalTime);
}