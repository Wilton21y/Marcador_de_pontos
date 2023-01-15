  let pA = document.querySelectorAll('h3')[0];
  let pV = document.querySelectorAll('h3')[1];

  let contadorPa = 0;
  let contador = 0;
  let limite = 15;

  function adicionar() {
    pA.innerHTML = ++contadorPa;
    if (contadorPa == limite) {
      zera();
    }
  }

  const bt = document.querySelectorAll('.bt')[0].addEventListener('click', adicionar);

  const bt2 = document.querySelectorAll('.bt')[1].addEventListener('click', function() {
    pV.innerHTML = ++contador;

    if (contador == limite) {
      zera();

    }
  });

  function zera() {

    pA.innerHTML = '00';
    pV.innerHTML = '00';

    contadorPa = 0;
    contador = 0;
  }