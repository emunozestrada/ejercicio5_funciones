let rojo = document.getElementById('rojo');
let amarillo = document.getElementById('amarillo');
let verde = document.getElementById('verde');


function luzRoja() {
  rojo.style.backgroundColor = 'red';
  amarillo.style.backgroundColor = 'gray';
  verde.style.backgroundColor = 'gray';
}

function luzAmarilla() {
  amarillo.style.backgroundColor = 'yellow';
  rojo.style.backgroundColor = 'gray';    
  verde.style.backgroundColor = 'gray';
}

function luzVerde() {
  verde.style.backgroundColor = 'green';
  rojo.style.backgroundColor = 'gray';
  amarillo.style.backgroundColor = 'gray';    
}

setInterval(function() {
    luzRoja();
    setTimeout(luzAmarilla, 1000);
    setTimeout(luzVerde, 2000);
}, 3000);

  
  
 
  
  
  
  
   
 



