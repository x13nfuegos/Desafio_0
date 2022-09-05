
function iniciarSesion(){
    let opciones = Number(prompt(`1 Registrarse \n2 Ingresar \n3 Salir`))

    switch(opciones){
        case 1 : registro(); 
        break;

        case 2: logeo(); 
        break;

        case 3: alert("Saners Ticket te da la bienvenida. "); 
        break;

        default : alert("Vuelva a ingresar algún dato"); 
        break;
    }
}
iniciarSesion();

function registro(usuario, pass, passcheck, correo){
    alert("Te vamos a pedir unos datos.");

    usuario = prompt("Escribí tu nombre de usuario:");
    pass = prompt("Ingresá contraseña:");
    passcheck = prompt("Repetí tu constreña:");
    if( pass != passcheck){
        alert("Algo salió mal! no te preocupes tiene solución.");
        alert("¡A repetir la contraseña!");
       passcheck = prompt("Una vez más y ya terminamos.");
    }    
    correo = prompt("Ingresá tu correo:");
}

function logeo(usuario, _pass){
    alert("¡Vamos a ver que hay!")

    usuario = prompt("Escribí tu nombre de usuario");
    pass = prompt("Ingrese contraseña");

    alert(`${usuario} :) ¡llegaste bien! vamos a mirar algún plan para salir.`);
}

// function calcularTotal(valor, personas){
//     total = valor * personas;
//     return total;
//     alert(`El total es de ${total}`);
// }

function carteleraAgosto(){
    let personas = 0;
    let valor = 0;
    let total = 0;
    let eventos = Number(prompt('CARTELERA SEPTIEMBRE \n1_ SANA - Hip Hop - $700\n2_ GeekParty - Festival - $800\n3) Puerto Piojo - Dcoumental VR - $600\n4) Isla Maciel - Tour Artístico - $500'));

    switch(eventos){
        case 1 : alert('SANA es un recital de Hip-Hop, el viernes a las 22hs en Av Alegría 2202 / Quilmes');
                 personas = Number(prompt("Cuantas personas: "));
                 valor = 700;
                 total = calcularTotal(valor, personas);
                 alert(`Total a pagar: $${total} `);
                 break;

        case 2 : alert('GeekParty es un festival que tiene música en vivo, streetart y muchos recuerdos de los ´80, en el Museo Comunitario de Sur');
                 personas = Number(prompt("Cuantas personas son: "));
                 valor = 500
                 break;

        case 3 : alert('Puerto Piojo es un Documental 360, sobre la última playa de Buenos Aires, a parrir de las 20 hs en Banchero de La Boca.');
                 cantidad = Number(prompt("Cuantas personas son: "));
                 valor = 500
                 break;

        case 4 : alert('Tour Isla Maciel es una experiencia única y artística. Un recorrido guiado por lo murales más importantes de la Isla. A partir de las 10 de la mañana.');
                 cantidad = Number(prompt("Cuantas desea llevar?"));
                 valor = 500
                 break;
        
        default : alert("!Algo salió mal¡"); 
          
                break;

    }
    
}


carteleraAgosto();

function calcularTotal (personas, valor) {
    let total = personas * valor;
    return total
}
