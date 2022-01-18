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

