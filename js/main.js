window.addEventListener('load',function(){
    var sol = document.querySelector(".fa-sun");
    //var img = document.querySelector(".img-header");
    var luna = document.querySelector(".fa-moon");
    function icon_sol(){
        sol.classList.add("active");
        luna.classList.remove("active");
    }
    function luna_icon(){
        sol.classList.remove("active");
        luna.classList.add("active");
    }
    sol.addEventListener('click', () =>{
        document.body.classList.add("dia");
        location.reload();
        icon_sol();
        //Guardo el modo dia
        if(document.body.classList.contains('dia')){
            localStorage.setItem('dia','true');
        }else{
            localStorage.setItem('dia','false');
        }
    });
    luna.addEventListener('click', () =>{
        document.body.classList.remove("dia");
        luna_icon();
        localStorage.setItem('dia','false');
    });
    //Comprobación del modo que se encuentra
    if(localStorage.getItem('dia') === 'true'){
        document.body.classList.add("dia");
        icon_sol();
    }else{
        luna_icon();
        document.body.classList.remove("dia");
    }
})