

const moon = document.getElementById("moon");
    moon.addEventListener("click", changeImage);
    foto=1
    function changeImage() {
        if(foto==1){
            moon.src="./images/bluemoon.png";
            foto--;
            }
        else{
            moon.src="./images/moon2.png";
            foto==1;
            foto++;
            }}


window.addEventListener('scroll', function(){
   
    var bloque = document.querySelectorAll('.animated');

    for (var i = 0; i < bloque.length; i++) {   
        var altura = window.innerHeight/1.9;
        var distancia = bloque[i].getBoundingClientRect().top;

        if(distancia <= altura){
            bloque[i].classList.add('aparece'); }
        else{
            bloque[i].classList.remove('aparece'); }
    
    }   }   )