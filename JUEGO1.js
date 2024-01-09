/*---------- PARTE CINEMÁTICA ----------*/
var indiceImagenes = 1;

// CARGAR PAGINA CON TRANSICIÓN
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("cinematica").style.opacity = 1;
});


function J1_cinematica() {
  indiceImagenes++;

  if (indiceImagenes === 2) {
    document.getElementById("textoCinematica").innerHTML = "Cuando está entrando, una multitud de personas salen corriendo por la salida. Y Francisco Javier, curioso por naturaleza, y con cero instinto de auto-preservación, decide entrar, inquietado por saber que está causando tanto revuelo...";
    document.getElementById("foto2").style.opacity = 1;
    document.getElementById("foto2").style.zIndex = "1";
    document.getElementById("foto2").style.transform = 'rotate(8deg)';
    document.getElementById("foto2").style.transition = 'opacity 0.6s ease-in-out, z-index 0.6s ease-in-out, transform 0.6s ease-in-out';
  } 
  else if (indiceImagenes === 3) {
    document.getElementById("textoCinematica").innerHTML = "Mientras se desplaza por los pasillos, avista un artefacto con una luz parpadeante en el suelo. Y de refilón ve a una persona con turbante gritando en un idioma que desconoce algo como \"al agua va\" mientras sale corriendo por la puerta. Decide investigar el artefacto...";
    document.getElementById("foto3").style.opacity = 1;
    document.getElementById("foto3").style.zIndex = "1";
    document.getElementById("foto3").style.transform = 'rotate(13deg)';
    document.getElementById("foto3").style.transition = 'opacity 0.6s ease-in-out, z-index 0.6s ease-in-out, transform 0.6s ease-in-out';
  } 
  else if (indiceImagenes === 4) {
    document.getElementById("textoCinematica").innerHTML = "Francisco Javier cuando se acerca se da cuenta de que es un EXPLOSIVO IMPROVISADO. Pero, sin pensarselo dos veces, decide quedarse para desactivar el artefacto, ya que hace dos días vió un documental de artificieros en la 6, y no le pareció tan dificil (no tiene ni la ESO).";
    document.getElementById("foto4").style.opacity = 1;
    document.getElementById("foto4").style.zIndex = "1";
    document.getElementById("foto4").style.transform = 'rotate(5deg)';
    document.getElementById("foto4").style.transition = 'opacity 0.6s ease-in-out, z-index 0.6s ease-in-out, transform 0.6s ease-in-out';

    //BOTÓN PASE CINEMÁTICA
    document.getElementById("J1_boton1").disabled = true;
    document.getElementById("J1_boton1").style.opacity = 0;
    //BOTÓN INICIO PRUEBA
    document.getElementById("J1_inicio").style.opacity = 1;
    document.getElementById("J1_inicio").style.zIndex = 1;
  }
}








/*---------- JUEGO DESACTIVACIÓN ----------*/

//AUDIOS
var MUSICA = 	  new Audio("MULTIMEDIA/AUDIOS/J1_CSGOost.mp3");
var WIN = 		  new Audio("MULTIMEDIA/AUDIOS/J1_WIN.m4a");
var LOSE = 		  new Audio("MULTIMEDIA/AUDIOS/J1_LOSE.mp3");
var tecla =     new Audio("MULTIMEDIA/AUDIOS/J1_tecla2.mp3");
var manual =     new Audio("MULTIMEDIA/AUDIOS/J1_paseManual.mp3");





/* FUNCIÓN QUE EMPIEZA JUEGO */
function Empezar() {
  MUSICA.play();       //REPRODUCIR ST
  MUSICA.volume = 0.2;
  //OCULTAR TODA LA PÁGINA DE CINEMÁTICAS
  document.getElementById("J1_inicio").style.opacity = 0;
  document.getElementById("J1_inicio").disabled = true;
  document.getElementById("cinematica").style.opacity = 0;

  //MOSTRAR JUEGO
  document.getElementById("juegoBomba").style.display = "block";
  setTimeout(function() {
    document.getElementById("juegoBomba").style.opacity = 1;
    
  }, 700);
  //EMPEZAR CUENTA ATRÁS
  empezarCuentaAtras();	
}




/*----- FUNCIÓN PASE FOTOS MANUAL ----*/
var indiceManual = 1;
function paseMANUAL() {
  indiceManual++;
  manual.play();
  if (indiceManual > 5) {
    indiceManual = 1;
  }
  if (indiceManual === 1) {
    document.getElementById("MANUAL").src= "MULTIMEDIA/FOTOS/J1_manual1.png";
  } else if (indiceManual === 2) {
      document.getElementById("MANUAL").src= "MULTIMEDIA/FOTOS/J1_manual2.png";
  } else if (indiceManual === 3) {
      document.getElementById("MANUAL").src= "MULTIMEDIA/FOTOS/J1_manual3.png";
  } else if (indiceManual === 4) {
      document.getElementById("MANUAL").src= "MULTIMEDIA/FOTOS/J1_manual4.png";
  } else if (indiceManual === 5) {
      document.getElementById("MANUAL").src= "MULTIMEDIA/FOTOS/J1_manual5.png";
  }
}

function manualBoton(valor) {
  if (valor === 1) {
    document.getElementById("textoManual").style.opacity = "1";
  } else if (valor === 2) {
    document.getElementById("textoManual").style.opacity = "0";
  }
}





/*----- FUNCIÓN CUENTA ATRÁS (SACADO DEL AHORCADO) -----*/
var detenerCrono = 0;
// VARIABLES DEL MODULO TIMING
var errorTiming = 0;
var verificacionVariable = 0;
var moduloTiming = 0;


function empezarCuentaAtras() {
  var tiempoInicio = new Date().getTime(); // GUARDAR TIEMPO DE INICIO
  var duracion = 100000; // 100 segundos
  var timingNumero = Math.floor(Math.random() * 9) + 1; // NUMERO NECESARIO PARA MODULO DE TIMING
    function actualizarCuenta() {
      

        var tiempoActual = new Date().getTime();
        var tiempoTranscurrido = tiempoActual - tiempoInicio;
        var tiempoRestante = duracion - tiempoTranscurrido;

        // PERDER POR TIEMPO
        if (tiempoRestante <= 0) {
            perder();
            return;
        } 
        // DETENER TIEMPO AL GANAR
        if (detenerCrono === 1) {
          return;
        }

        var segundos = Math.floor(tiempoRestante / 1000);
        var milisegundos = tiempoRestante % 1000;

        // MOSTRAR 2 DIGITOS DE MS
        milisegundos = ('00' + milisegundos).slice(-3, -1);


      

/*----- MODULO TIMING -----*/
        
        

        if (timingNumero === 1) {
          document.getElementById("timingAleatorio").innerText = "JEJE";
        } else if (timingNumero === 2) {
          document.getElementById("timingAleatorio").innerText = "HOLA";
        } else if (timingNumero === 3) {
          document.getElementById("timingAleatorio").innerText = "LIBRO";
        } else if (timingNumero === 4) {
          document.getElementById("timingAleatorio").innerText = "MAPA";
        } else if (timingNumero === 5) {
          document.getElementById("timingAleatorio").innerText = "COMER";
        } else if (timingNumero === 6) {
          document.getElementById("timingAleatorio").innerText = "LUNA";
        } else if (timingNumero === 7) {
          document.getElementById("timingAleatorio").innerText = "VERDE";
        } else if (timingNumero === 8) {
          document.getElementById("timingAleatorio").innerText = "SOPA";
        } else if (timingNumero === 9) {
          document.getElementById("timingAleatorio").innerText = "TELA";
        }
      
        if (segundos.toString().includes(timingNumero)) {
          verificacionVariable = 1;
        } else {
          verificacionVariable = 0;
        }

        document.getElementById("verificarBoton").addEventListener("click", comprobarTiming);

      
        function comprobarTiming() {
          tecla.play();  // SONIDO TECLA
          if (verificacionVariable === 1) {
            moduloTiming = 1;
            document.getElementById("LED_Timing").src = "MULTIMEDIA/FOTOS/J1_LEDon.png";  
          } if (moduloTiming === 0) {
            perder();
          }
          
          if ((moduloTexto === 1) && (modulo4x4 === 1) && (moduloTiming === 1)) {
            ganar();
            detenerCrono = 1;
          } 
        }



      
        var displayTiempo = padWithZero(segundos) + ':' + milisegundos;

        document.getElementById('cuentaAtras').innerText = displayTiempo;

        // Solicitar el siguiente cuadro de animación
        requestAnimationFrame(actualizarCuenta);
    }
    function padWithZero(number, length = 2) {
        var str = '' + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }

    // Iniciar la cuenta atrás
    requestAnimationFrame(actualizarCuenta);                                                              
}





/*----- MODULO VECTORES 4x4 -----*/

var modulo4x4 = 0;

// GENERAR VECTORES A REPLICAR
var vectores = [];
for (var i = 0; i < 16; i++) {
    vectores[i] = Math.floor(Math.random() * 4) + 1;

    if (vectores[i] === 1) {
        document.getElementById("M1_" + (i + 1)).style.transform = "rotate(0deg)";
    } else if (vectores[i] === 2) {
        document.getElementById("M1_" + (i + 1)).style.transform = "rotate(90deg)";
    } else if (vectores[i] === 3) {
        document.getElementById("M1_" + (i + 1)).style.transform = "rotate(180deg)";
    } else if (vectores[i] === 4) {
        document.getElementById("M1_" + (i + 1)).style.transform = "rotate(270deg)";
    }
}

/* FUNCIÓN QUE CAMBIA ORIENTACIÓN DE BOTONES */
var botones = [];
for (var i = 0; i < 16; i++) {
  botones[i] = 1;  // ASIGNA VALORES INICIALES A BOTONES
}

function boton(valor) {
  // ASIGNA VALORES SEGÚN CLICKS
  botones[valor - 1] += 1;
  if (botones[valor - 1] > 4) {
    botones[valor - 1] = 1;
  }
  
  tecla.play();  // SONIDO TECLA
  
  // ROTA BOTÓN SEGÚN VALORES
  if (botones[valor - 1] === 1) {
      document.getElementById("M1B_" + valor).style.transform = "rotate(0deg)";
  } else if (botones[valor - 1] === 2) {
      document.getElementById("M1B_" + valor).style.transform = "rotate(90deg)";
  } else if (botones[valor - 1] === 3) {
      document.getElementById("M1B_" + valor).style.transform = "rotate(180deg)";
  } else if (botones[valor - 1] === 4) {
      document.getElementById("M1B_" + valor).style.transform = "rotate(270deg)";
  }

  
  // CHAPUZA PORQUE NO COMPARABA BIEN LOS ARRAYS
  document.getElementById("vectoresTexto").innerText = "A: " + vectores.join(", ");
  document.getElementById("botonesTexto").innerText = "A: " + botones.join(", ");
  
  var botoness = document.getElementById("botonesTexto").innerText;
  var vectoress = document.getElementById("vectoresTexto").innerText;

  if (botoness === vectoress) {
    modulo4x4 = 1;
  }
  
  if (modulo4x4 === 1) {
    // ENCIENDE LED4x4
    document.getElementById("LED_4x4").src = "MULTIMEDIA/FOTOS/J1_LEDon.png";  
  } 
  if ((moduloTexto === 1) && (modulo4x4 === 1) && (moduloTiming === 1)) {
    detenerCrono = 1;
    ganar();
  }
}




/*----- MODULO TEXTO -----*/
var longitudCadena = 20;
const caracteres = "abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
var textoAleatorio = '';
var moduloTexto = 0;

// GENERA LA SUCESIÓN DE CARACTERES ALEATORIOS
  for (var i = 0; i < longitudCadena; i++) {
    var indice = Math.floor(Math.random() * caracteres.length);
    textoAleatorio += caracteres.charAt(indice);
  }
  document.getElementById("textoAleatorio").innerText = textoAleatorio;


function verificarTexto() {
  var textoInput = document.getElementById("textoInput").value;
  var textoAleatorio = document.getElementById("textoAleatorio").innerText;
  
  tecla.play();  // SONIDO TECLA
  
  if (textoInput === textoAleatorio) {
    document.getElementById("LED_Texto").src = "MULTIMEDIA/FOTOS/J1_LEDon.png";
    moduloTexto = 1;
  } else {
    perder();
  } 
  if ((moduloTexto === 1) && (modulo4x4 === 1) && (moduloTiming === 1)) {
    detenerCrono = 1;
    ganar();
  }
}




/*----- FUNCIONES AL GANAR O PERDER -----*/
function perder() {
  /* AL PERDER */
  // AUDIOS
  MUSICA.pause();
  LOSE.play();
  // PANTALLA NEGRA
  document.getElementById("BLACK_SCREEN").style.display = "block";
  document.getElementById("BLACK_SCREEN").style.opacity = "1";
  //MENSAJE PERDER
  document.getElementById("BAD_ENDING").style.display = "block";
  setTimeout(function() {

    document.getElementById("BAD_ENDING").style.opacity = "1";
  }, 1000);
  // DESAPARECER CRONO
  document.getElementById("cuentaAtras").style.display = "none";
  // BOTÓN CASA
  document.getElementById("Casa2").style.display = "block";
  document.getElementById("Casa2").style.opacity = "1";
  document.getElementById("Casa2").style.zIndex = "2";
}

function ganar() {
  /* AL GANAR */
  // AUDIOS
  MUSICA.pause();
  WIN.play();
  // PANTALLA NEGRA
  document.getElementById("BLACK_SCREEN").style.display = "block";
  document.getElementById("BLACK_SCREEN").style.opacity = "1";
  //MENSAJE GANAR
  document.getElementById("GOOD_ENDING").style.display = "block";
  setTimeout(function() {

    document.getElementById("GOOD_ENDING").style.opacity = "1";
  }, 1000);
  // DESAPARECER CRONO
  document.getElementById("cuentaAtras").style.display = "none";
  // BOTÓN CASA
  document.getElementById("Casa2").style.display = "block";
  document.getElementById("Casa2").style.opacity = "1";
  document.getElementById("Casa2").style.zIndex = "2";
}