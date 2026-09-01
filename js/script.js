/* =========================================================
   EMBER STEAKHOUSE
   MAIN JAVASCRIPT ENGINE
========================================================= */



document.addEventListener(
"DOMContentLoaded",
()=>{







/* =========================================================
   HERO SCROLL IMAGE ENGINE

   Changes background images based on
   scroll progress through hero section
========================================================= */


const hero =
document.querySelector(".hero");


const heroImages =
document.querySelectorAll(".hero-image");



const heroMessages = [

"Modern Steakhouse",

"Premium aged cuts",

"Crafted with fire",

"An unforgettable dining experience"

];



const heroTitle =
document.querySelector(".hero-content h1");



const heroDescription =
document.querySelector(".hero-content p");




function updateHero(){


if(!hero)
return;



const rect =
hero.getBoundingClientRect();



const scrollDistance =
hero.offsetHeight - window.innerHeight;



let progress =
Math.abs(rect.top) / scrollDistance;



if(progress < 0)
progress = 0;


if(progress > 1)
progress = 1;




let index =
Math.floor(
progress * heroImages.length
);



if(index >= heroImages.length){

index =
heroImages.length - 1;

}




heroImages.forEach(
(image,i)=>{


image.classList.toggle(
"active",
i===index
);


});





if(heroTitle){


heroTitle.animate(

[
{
opacity:0,
transform:"translateY(20px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],

{

duration:600,

easing:
"cubic-bezier(.16,1,.3,1)"

}

);



}



}



window.addEventListener(
"scroll",
()=>{

requestAnimationFrame(
updateHero
);

}

);





updateHero();









/* =========================================================
   DISH DATABASE

   Future backend can replace this
========================================================= */


const dishes = {


wagyu:{


title:
"Wagyu Steak",


description:
"Premium Japanese inspired beef finished over open flames with smoked butter and herbs.",


main:
"assets/images/dishes/wagyu/main.webp",


gallery:[

"assets/images/dishes/wagyu/main.webp",

"assets/images/dishes/wagyu/side.webp",

"assets/images/dishes/wagyu/close.webp"

],


ingredients:[

"Premium Wagyu beef",

"Garlic butter",

"Rosemary",

"Sea salt",

"Black pepper"

]


},




kebab:{


title:
"Fire Kebab",


description:
"Slow grilled lamb prepared with traditional spices and modern presentation.",


main:
"assets/images/dishes/kebab/main.webp",


gallery:[

"assets/images/dishes/kebab/main.webp",

"assets/images/dishes/kebab/side.webp",

"assets/images/dishes/kebab/close.webp"

],


ingredients:[

"Lamb",

"Smoked paprika",

"Herbs",

"Olive oil",

"Fresh vegetables"

]


},





burger:{


title:
"Ember Burger",


description:
"House crafted burger with premium beef, aged cheese and signature sauce.",


main:
"assets/images/dishes/burger/main.webp",


gallery:[

"assets/images/dishes/burger/main.webp",

"assets/images/dishes/burger/side.webp",

"assets/images/dishes/burger/close.webp"

],


ingredients:[

"Premium beef",

"Aged cheese",

"Fresh lettuce",

"House sauce",

"Toasted bun"

]


}



};









/* =========================================================
   DISH MODAL SYSTEM
========================================================= */


const modal =
document.querySelector(".dish-modal");



const modalImage =
document.querySelector(".modal-image");



const modalTitle =
document.querySelector(".modal-title");



const modalDescription =
document.querySelector(".modal-description");



const ingredientList =
document.querySelector(".ingredients-list");



const gallery =
document.querySelector(".gallery");



const closeButton =
document.querySelector(".modal-close");



const cards =
document.querySelectorAll(".dish-card");







function openDish(id){


const dish =
dishes[id];


if(!dish)
return;



modalImage.src =
dish.main;



modalImage.alt =
dish.title;



modalTitle.textContent =
dish.title;



modalDescription.textContent =
dish.description;





ingredientList.innerHTML="";



dish.ingredients.forEach(
(item)=>{


const li =
document.createElement("li");


li.textContent =
item;


ingredientList.appendChild(li);


}

);






gallery.innerHTML="";



dish.gallery.forEach(
(image)=>{


const img =
document.createElement("img");


img.src =
image;


gallery.appendChild(img);


}

);





modal.classList.add(
"active"
);



document.body.style.overflow =
"hidden";



}





cards.forEach(
(card)=>{


card.addEventListener(
"click",
()=>{


openDish(
card.dataset.dish
);


}

);


}

);







function closeModal(){


modal.classList.remove(
"active"
);



document.body.style.overflow =
"";


}





closeButton.addEventListener(
"click",
closeModal
);



document
.querySelector(".modal-backdrop")
.addEventListener(
"click",
closeModal
);



document.addEventListener(
"keydown",
(e)=>{


if(e.key==="Escape"){

closeModal();

}


}

);









/* =========================================================
   MOBILE MENU
========================================================= */



const menuButton =
document.querySelector(".menu-button");


const navigation =
document.querySelector(".navigation");




if(menuButton){


menuButton.addEventListener(
"click",
()=>{


navigation.classList.toggle(
"open"
);



menuButton.classList.toggle(
"active"
);



}

);


}









/* =========================================================
   SCROLL REVEAL ENGINE

   Vanilla replacement for
   Framer Motion whileInView
========================================================= */


const revealElements =
document.querySelectorAll(
".dish-card, .glass-panel, .reservation-card"
);



const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(
(entry)=>{


if(entry.isIntersecting){


entry.target.classList.add(
"visible"
);



observer.unobserve(
entry.target
);


}



}

);


},


{

threshold:.15

}


);





revealElements.forEach(
(element)=>{


element.classList.add(
"hidden"
);


observer.observe(
element
);


}

);









/* =========================================================
   IMAGE MARQUEE PAUSE

   Better mobile performance
========================================================= */


const marquee =
document.querySelector(
".marquee-track"
);



if(marquee){


marquee.addEventListener(
"mouseenter",
()=>{


marquee.style.animationPlayState =
"paused";


}

);



marquee.addEventListener(
"mouseleave",
()=>{


marquee.style.animationPlayState =
"running";


}

);


}









/* =========================================================
   SMOOTH BUTTON FEEDBACK
========================================================= */


const buttons =
document.querySelectorAll(
".glass-button"
);



buttons.forEach(
(button)=>{


button.addEventListener(
"click",
()=>{


button.animate(

[
{
transform:"scale(.96)"
},

{
transform:"scale(1)"
}

],

{

duration:200,

easing:
"ease-out"

}

);


}

);


}

);









}
);
