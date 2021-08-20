var btn1 = document.getElementById("btn1"); 
var btn2 = document.getElementById("btn2"); 
var btn3 = document.getElementById("btn3"); 

var homeContent     = document.getElementById("home-content");
var servicesContent = document.getElementById("services-content");
var productsContent = document.getElementById("products-content");

function openHome(){
homeContent.style.transform ="translateX(0)";
servicesContent.style.transform ="translateX(100%)";
productsContent.style.transform ="translateX(100%)";
btn1.style.color ="orange";
btn2.style.color ="#000";
btn3.style.color ="#000";
homeContent.style.transitionDelay="1s";
servicesContent.style.transitionDelay="0s";
productsContent.style.transitionDelay="0s";
}
function openServices(){
    homeContent.style.transform ="translateX(100%)";
    servicesContent.style.transform ="translateX(0)";
    productsContent.style.transform ="translateX(100%)";
    btn1.style.color ="#000";
    btn2.style.color ="orange";
    btn3.style.color ="#000";
    homeContent.style.transitionDelay="0s";
    servicesContent.style.transitionDelay="1s";
    productsContent.style.transitionDelay="0s";
}
function openProducts(){
    homeContent.style.transform ="translateX(100%)";
    servicesContent.style.transform ="translateX(100%)";
    productsContent.style.transform ="translateX(0)";
    btn1.style.color ="#000";
    btn2.style.color ="#000";
    btn3.style.color ="orange";
    homeContent.style.transitionDelay="0s";
    servicesContent.style.transitionDelay="0s";
    productsContent.style.transitionDelay="1s";
}