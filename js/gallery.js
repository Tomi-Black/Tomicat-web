
//var div_img = document.getElementsByClassName("imgs");
const image = document.querySelectorAll('.image');
const mostrar = document.getElementById('remplazo');
const text = document.getElementById('text');
var light_box = document.getElementById('light-box');
var close = document.querySelector('.fa-times');
function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}
function enableScroll(){  
    window.onscroll = null;
}
function animacion(){
    light_box.style.transition = '.8s';
    light_box.style.visibility = 'visible';
    light_box.style.opacity = '1';
}
function cerrar_animacion(){
    light_box.style.transition = '.8s';
    light_box.style.opacity = '0'
    light_box.style.visibility = 'hidden';
}
close.addEventListener('click',function(){
    cerrar_animacion();
    enableScroll();
});
light_box.addEventListener('click', function(){
    cerrar_animacion();
    enableScroll();
})
image.forEach(img=>{
    img.addEventListener('click',()=>{
        agrgar_imagen(img.getAttribute('src'),img.getAttribute('alt'));
    });
});
const agrgar_imagen = (src,alt)=>{
    mostrar.src = src;
    text.innerHTML = alt;
    animacion();
    disableScroll();
}
/*
for(i=0;div_img.length;i++){
    div_img[i].addEventListener("click",()=>{
        console.log("xd")
        animacion();
        disableScroll();
    });
}*/
