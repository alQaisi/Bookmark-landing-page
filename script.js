//// Features Section Controls Start
var FeatureToggles=document.querySelectorAll("#Feature-toggle a");
var featureTitle=document.querySelector(".features-section .title");
var featureText=document.querySelector(".features-section p.text");
var featureImage=document.querySelector(".feature-image");
var activeFeature=undefined;
var Featurs=[
    {
        img:"./images/illustration-features-tab-1.svg",
        title:"Bookmark in one click",
        text:`Organize your bookmarks however you like. Our simple drag-and-drop interface 
            gives you complete control over how you manage your favourite sites.`
    },
    {
        img:"./images/illustration-features-tab-2.svg",
        title:"Intelligent search",
        text:`Our powerful search feature will help you find saved sites in no time at all. 
            No need to trawl through all of your bookmarks.`
    },
    {
        img:"./images/illustration-features-tab-3.svg",
        title:"Share your bookmarks",
        text:`Easily share your bookmarks and collections with others. Create a shareable 
            link that you can send at the click of a button.`
    }
];
function changeFeature(feature,index){
    if(activeFeature!=undefined)
        activeFeature.classList.toggle("active-feature");
    activeFeature=feature;
    activeFeature.classList.toggle("active-feature");
    featureTitle.textContent=Featurs[index].title;
    featureText.textContent=Featurs[index].text;
    featureImage.src=Featurs[index].img;
}
FeatureToggles.forEach((item,index)=>{
    item.addEventListener('click',()=>changeFeature(item,index));
});
//// Features Section Controls End

//// Frequently Asked Questions Controls Start
var activeArrow=undefined;
var activeAnswer=undefined;
var arrows=document.querySelectorAll(".arrow");
var questions=document.querySelectorAll(".question");
var answers=document.querySelectorAll(".answer");
function toggleQuestion(index){
    if(activeArrow!=undefined){
        activeArrow.classList.toggle("activeArrow");
        activeAnswer.classList.toggle("answerActive");
    }
    if(activeArrow!=arrows[index]){
        activeArrow=arrows[index];
        activeArrow.classList.toggle('activeArrow');
        activeAnswer=answers[index];
        activeAnswer.classList.toggle('answerActive');
    }else{
        activeArrow=undefined;
        activeAnswer=undefined;
    } 
}
questions.forEach((item,index)=>{
    item.addEventListener("click",()=>toggleQuestion(index));
});
//// Frequently Asked Questions Controls End

//// Menu Overlay Start
var Overlay=document.querySelector(".overlay");
var menuIcon=document.querySelector("#menuIcon");
var closeIcon=document.querySelector("#closeIcon");
var header=document.querySelector("header");
menuIcon.addEventListener("click",()=>{
    header.style.display="none";
    window.addEventListener("resize",resizeWindow);
    Overlay.classList.contains('hidden')?Overlay.classList.toggle("hidden"):Overlay.classList.toggle("hide");
});
closeIcon.addEventListener("click",closeMenu);
function closeMenu(){
    header.style.display="flex";
    Overlay.classList.toggle("hide");
    window.removeEventListener('resize',resizeWindow);
}
function resizeWindow(evt){
    if(window.innerWidth>690)
        closeMenu();
}
//// Menu Overlay End

//// Email Check Start
var input=document.querySelector(".input");
var email=document.querySelector("[type=text]");
var contact=document.querySelector(".contact button");
const regex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
contact.addEventListener('click',()=>{
    var text=email.value;
    text.replace(/\s/g,'');
    var result=String(text).toLocaleLowerCase().match(regex);
    if(result==null)
        input.classList.add("warning");
    else{
        input.classList.remove("warning");
        alert("Thank you !");
    }
});
//// Email Check End