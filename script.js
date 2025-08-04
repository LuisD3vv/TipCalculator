


let porcentaje1 = document.getElementById("por1");
porcentaje1.addEventListener("click", function(){
    let cantidad = document.getElementById("bill").value;
    let personas = document.getElementById("nmofpp").value;
    let tipAmount = document.getElementById("tipPerson");
    let tiptotal = document.getElementById("tipTotal");

    // valores locales
    let valor = Number(cantidad);
    let numberPerson =  Number(personas);
    let propinaTotal = valor * 0.5;
    let totalPersona = (valor + propinaTotal) / numberPerson;

    tipAmount.innerHTML = "$" + propinaTotal.toFixed(2);
    tiptotal.innerHTML ="$" + totalPersona.toFixed(2)
})
let porcentaje2 = document.getElementById("por2");
porcentaje2.addEventListener("click", function(){
    let cantidad = document.getElementById("bill").value;
    let personas = document.getElementById("nmofpp").value;
    let tipAmount = document.getElementById("tipPerson");
    let tiptotal = document.getElementById("tipTotal");
 // valores locales
    let valor = Number(cantidad);
    let numberPerson =  Number(personas);
    let propinaTotal = (valor * 0.10 )/ numberPerson;
    let totalPersona = (valor + propinaTotal) / numberPerson;

    tipAmount.innerHTML = "$" + propinaTotal.toFixed(2);
    tiptotal.innerHTML ="$" + totalPersona.toFixed(2)
    
})
let porcentaje3 = document.getElementById("por3");
porcentaje3.addEventListener("click", function(){
    let cantidad = document.getElementById("bill").value;
    let personas = document.getElementById("nmofpp").value;
    let tipAmount = document.getElementById("tipPerson");
    let tiptotal = document.getElementById("tipTotal");

    // valores locales
    let valor = Number(cantidad);
    let numberPerson =  Number(personas);
    let propinaTotal = (valor * 0.15 ) / numberPerson;
    let totalPersona = (valor + propinaTotal) / numberPerson;

    tipAmount.innerHTML = "$" + propinaTotal.toFixed(2);
    tiptotal.innerHTML ="$" + totalPersona.toFixed(2)


})
let porcentaje4 = document.getElementById("por4");
porcentaje4.addEventListener("click", function(){
    let cantidad = document.getElementById("bill").value;
    let personas = document.getElementById("nmofpp").value;
    let tipAmount = document.getElementById("tipPerson");
    let tiptotal = document.getElementById("tipTotal");
    // valores locales
    let valor = Number(cantidad);
    let numberPerson =  Number(personas);
    let propinaTotal = (valor * 0.25)/numberPerson;
    let totalPersona = (valor + propinaTotal) / numberPerson;

    tipAmount.innerHTML = "$" + propinaTotal.toFixed(2);
    tiptotal.innerHTML ="$" + totalPersona.toFixed(2)


})
let porcentaje5 = document.getElementById("por5");
porcentaje5.addEventListener("click", function(){
    let cantidad = document.getElementById("bill").value;
    let personas = document.getElementById("nmofpp").value;
    let tipAmount = document.getElementById("tipPerson");
    let tiptotal = document.getElementById("tipTotal");

    let valor = Number(cantidad);
    let numberPerson =  Number(personas);
    let propinaTotal = (valor * 0.50)/numberPerson;
    let totalPersona = (valor + propinaTotal) / numberPerson;

    tipAmount.innerHTML = "$" + propinaTotal.toFixed(2);
    tiptotal.innerHTML ="$" + totalPersona.toFixed(2)


})
let custom = document.getElementById("por6");
custom.addEventListener("click", function(){
    let cantidad = document.getElementById("bill").value;
    let personas = document.getElementById("nmofpp").value;
    let tipAmount = document.getElementById("tipPerson");
    let tiptotal = document.getElementById("tipTotal");

    let valor = Number(cantidad);
    let numberPerson =  Number(personas);
    let propinaTotal = (valor * customPer)/numberPerson;
    let totalPersona = (valor + propinaTotal) / numberPerson;

    tipAmount.innerHTML = "$" + propinaTotal.toFixed(2);
    tiptotal.innerHTML ="$" + totalPersona.toFixed(2)
})

// Reiniciar to-do a la verga
let botonReinicio = document.getElementById("reset");
botonReinicio.addEventListener("click", function(){
    let tipAmount = document.getElementById("tipPerson");
    let tiptotal = document.getElementById("tipTotal");
    tiptotal.textContent = "--";
    tipAmount.textContent = "--";
})