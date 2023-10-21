

let totalCuenta ;
let porcientoPropinas; 

valorPagar = totalCuenta ;

function CalcularNota(valorPagar) {
  
    const totalCuenta = parseFloat(document.getElementById('tC1').value);
    const porcientoPropinas = parseFloat(document.getElementById('pP1').value);
    const mostrar = document.getElementById('resultado');
    const mostrar2 = document.getElementById('resultado2');
    const mostrar3 = document.getElementById('resultado3');



    const propinaS = (totalCuenta) * porcientoPropinas / 100 ;
    const totalPagar = totalCuenta + propinaS;
    
    mostrar.textContent = `Total de la Cuenta : $ ${totalCuenta} `
    mostrar2.textContent = `Propinas : $ ${propinaS} `
    mostrar3.textContent = `Total a Pagar: $ ${totalPagar} `


}