
window.addEventListener('scroll', function() {
    var objeto = document.querySelector('.li1');
    var distancia = objeto.getBoundingClientRect().top;
    var alturaPantalla = window.innerHeight;
  
    if (distancia < alturaPantalla * .90) {
      objeto.classList.add('mostrar');
    }
  });

  window.addEventListener('scroll', function() {
    var objeto = document.querySelector('.li2');
    var distancia = objeto.getBoundingClientRect().top;
    var alturaPantalla = window.innerHeight;
  
    if (distancia < alturaPantalla * .90) {
      objeto.classList.add('mostrar');
    }
  });

  window.addEventListener('scroll', function() {
    var objeto = document.querySelector('.li3');
    var distancia = objeto.getBoundingClientRect().top;
    var alturaPantalla = window.innerHeight;
  
    if (distancia < alturaPantalla * .90) {
      objeto.classList.add('mostrar');
    }
  });

  window.addEventListener('scroll', function() {
    var objeto = document.querySelector('.li4');
    var distancia = objeto.getBoundingClientRect().top;
    var alturaPantalla = window.innerHeight;
  
    if (distancia < alturaPantalla * .90) {
      objeto.classList.add('mostrar');
    }
  });

  window.addEventListener('scroll', function() {
    var objeto = document.querySelector('.li5');
    var distancia = objeto.getBoundingClientRect().top;
    var alturaPantalla = window.innerHeight;
  
    if (distancia < alturaPantalla * .90) {
      objeto.classList.add('mostrar');
    }
  });
