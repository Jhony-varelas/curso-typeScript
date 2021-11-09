"use strict";
// LAS ENUMERACIONES AYUDA A TRABAJAR CON VALORES QUE TENGAN UN SENTIDO SEMANTICO,
// QUE PUEDA IDENTIFICAR CUANDO UN VALOR ES ALTO O BAJO
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currenAudio = AudioLevel.medium;
    console.log(AudioLevel);
    console.log(currenAudio);
})();
