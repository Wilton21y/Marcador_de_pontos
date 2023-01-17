  /* Elementos de pontos do placar  */
  let contadorPa = 0;
  let contador = 0;
  let limite = 15;

  /* Botões dos placar */
  const bt = document.querySelectorAll('.bt')[0].addEventListener('click', adicionar);
  const bt2 = document.querySelectorAll('.bt')[1].addEventListener('click', function() {
    
    document.querySelectorAll('h3')[1].innerHTML = ++contador;

    if (contador == limite) {
      fim_de_partida();

    }
  });

  const ini = document.querySelectorAll(".bt")[2].addEventListener('click', play);

  const stop = document.querySelectorAll('.bt')[3].
  addEventListener('click', pauser_time);

  const reset = document.querySelectorAll('.bt')[4].addEventListener('click', reiniciar);

  function adicionar() {
    
    document.querySelectorAll('h3')[0].innerHTML = ++contadorPa;
    
    if (contadorPa == limite) {
      fim_de_partida();
      pauser_time();
    }
  }

  function fim_de_partida() {

    document.querySelectorAll('h3')[0].innerHTML = '00';
    document.querySelectorAll('h3')[1].innerHTML = '00';

    contadorPa = 0;
    contador = 0;
    reiniciar();
  }


  /*Cronômetro*/
  let hr = 0;
  let min = 0;
  let sec = 0;
  let interv;

  function play() {
    cronometro();
    interv = setInterval(cronometro, 1000);
  }

  function pauser_time() {
    clearInterval(interv);

  }

  function reiniciar() {
    pauser_time();
     hr = 0;
     min = 0;
     sec = 0;

    document.getElementById('marcar').innerText = '00:00:00';
    document.querySelectorAll('h3')[0].innerHTML = '00';
    document.querySelectorAll('h3')[1].innerHTML = '00';

  }
  function twornum(num){
    if (num < 10){
      return "0"+num;
    }else {
      return  num;
    }
  }
  function cronometro() {
    sec++
    if (sec == 60) {
      min++;
      sec = 0;

      if (min == 59) {
        hr++;
        min = 0;
      }
    }

    document.getElementById('marcar').innerText = twornum(hr) + ":" + twornum(min) + ":" + twornum(sec);
  }