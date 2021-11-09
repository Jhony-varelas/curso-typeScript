// LAS ENUMERACIONES AYUDA A TRABAJAR CON VALORES QUE TENGAN UN SENTIDO SEMANTICO,
// QUE PUEDA IDENTIFICAR CUANDO UN VALOR ES ALTO O BAJO

(() => {
  enum AudioLevel {
    min,
    medium,
    max,
  }

  let currenAudio =AudioLevel.medium;

  console.log(AudioLevel)
  console.log(currenAudio);
  



})();
