const semafor = document.getElementById("semafor");
let culoare = 0;
function schimbaCuloarea() {
    if(culoare === 0) {
        semafor.className ="btn btn-warning";
        semafor.innerText = "Galben";
        culoare = 1;
    } else if(culoare === 1) {
        semafor.className = "btn btn-success";
        semafor.innerText = "Verde";
        culoare = 2; 
    } else {
        semafor.className = "btn btn-danger";
        semafor.innerText = "Rosu";
        culoare = 0;
    }
}
semafor.addEventListener("click",schimbaCuloarea);
setInterval(schimbaCuloarea, 10000);
