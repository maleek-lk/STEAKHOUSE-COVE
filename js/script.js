/* =====================================================
   EMBER STEAKHOUSE
   Vanilla JavaScript Controller
===================================================== */


document.addEventListener("DOMContentLoaded", () => {


/* =====================================================
   HERO IMAGE CROSSFADE
===================================================== */


const hero = document.querySelector(".hero");

const heroImages = [
"assets/images/hero/hero-1.webp",
"assets/images/hero/hero-2.webp",
"assets/images/hero/hero-3.webp",
"assets/images/hero/hero-4.webp",
"assets/images/hero/hero-5.webp",
"assets/images/hero/hero-6.webp",
"assets/images/hero/hero-7.webp"
];


let currentHero = 0;


const heroLayer = document.querySelector(".hero-background");


function changeHero(){

if(!heroLayer) return;


heroLayer.style.opacity = "0";


setTimeout(()=>{


heroLayer.style.backgroundImage =
`url("${heroImages[currentHero]}")`;


heroLayer.style.opacity = "1";


},600);


currentHero++;

if(currentHero >= heroImages.length){

currentHero = 0;

}


}


if(heroLayer){


heroLayer.style.backgroundImage =
`url("${heroImages[0]}")`;


setInterval(changeHero,7000);


}






/* =====================================================
   IMAGE MARQUEE AUTO DUPLICATION
===================================================== */


const marquee = document.querySelector(".marquee-track");


if(marquee){

marquee.innerHTML += marquee.innerHTML;


}






/* =====================================================
   MENU DATA
===================================================== */


const dishes = {


wagyu:{

name:"Wagyu Prime Cut",

description:
"Japanese inspired premium beef with deep marbling and a rich buttery finish.",

images:[

"assets/images/dishes/wagyu/main.webp",

"assets/images/dishes/wagyu/side.webp",

"assets/images/dishes/wagyu/close.webp"

],

ingredients:[

"Premium Beef",

"Sea Salt",

"Rosemary",

"Butter"

]

},



kebab:{

name:"Ember Kebab",

description:
"Fire grilled meat skewers crafted with aromatic spices.",

images:[

"assets/images/dishes/kebab/main.webp",

"assets/images/dishes/kebab/side.webp",

"assets/images/dishes/kebab/close.webp"

],

ingredients:[

"Beef",

"Pepper",

"Spices",

"Charcoal"

]

},



burger:{

name:"Signature Ember Burger",

description:
"A handcrafted burger with flame grilled beef and house sauce.",

images:[

"assets/images/dishes/burger/main.webp",

"assets/images/dishes/burger/side.webp",

"assets/images/dishes/burger/close.webp"

],

ingredients:[

"Beef Patty",

"Brioche",

"Cheese",

"Sauce"

]

},



biryani:{

name:"Beef Biryani",

description:
"Slow cooked aromatic rice layered with tender beef.",

images:[

"assets/images/dishes/biryani/main.webp",

"assets/images/dishes/biryani/side.webp",

"assets/images/dishes/biryani/close.webp"

],

ingredients:[

"Rice",

"Beef",

"Spices",

"Herbs"

]

},



meatballs:{

name:"Ember Meatballs",

description:
"Hand rolled beef meatballs finished over open flame.",

images:[

"assets/images/dishes/meatballs/main.webp",

"assets/images/dishes/meatballs/side.webp",

"assets/images/dishes/meatballs/close.webp"

],

ingredients:[

"Beef",

"Garlic",

"Herbs",

"Spices"

]

}



};








/* =====================================================
   DISH MODAL
===================================================== */


const cards =
document.querySelectorAll("[data-dish]");


const modal =
document.querySelector(".dish-modal");


const modalImage =
document.querySelector(".modal-main-image");


const modalTitle =
document.querySelector(".modal-title");


const modalDescription =
document.querySelector(".modal-description");


const gallery =
document.querySelector(".modal-gallery");


const ingredients =
document.querySelector(".ingredients");



cards.forEach(card=>{


card.addEventListener("click",()=>{


const id = card.dataset.dish;


const dish = dishes[id];


if(!dish) return;



modalTitle.textContent =
dish.name;


modalDescription.textContent =
dish.description;


modalImage.src =
dish.images[0];



gallery.innerHTML="";


dish.images.forEach(image=>{


const img=document.createElement("img");


img.src=image;


img.onclick=()=>{

modalImage.src=image;

};


gallery.appendChild(img);


});



ingredients.innerHTML="";


dish.ingredients.forEach(item=>{


const li=document.createElement("li");


li.textContent=item;


ingredients.appendChild(li);


});



modal.classList.add("active");



});


});





const closeModal =
document.querySelector(".modal-close");


if(closeModal){


closeModal.onclick=()=>{

modal.classList.remove("active");

};


}







/* =====================================================
   LIQUID CURSOR LIGHT
===================================================== */


const liquid =
document.querySelector(".liquid-surface");


window.addEventListener("mousemove",(e)=>{


if(!liquid)return;


liquid.style.setProperty(
"--x",
`${e.clientX}px`
);


liquid.style.setProperty(
"--y",
`${e.clientY}px`
);


});







/* =====================================================
   SCROLL REVEAL
===================================================== */


const reveal =
document.querySelectorAll(".fade-in");


const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("visible");


observer.unobserve(entry.target);


}


});


},{
threshold:.15
});



reveal.forEach(el=>{


observer.observe(el);


});








/* =====================================================
   MOBILE PERFORMANCE
===================================================== */


let ticking=false;


window.addEventListener("scroll",()=>{


if(!ticking){


window.requestAnimationFrame(()=>{


document.body.classList.add("scrolling");


ticking=false;


});


ticking=true;


}


});



});