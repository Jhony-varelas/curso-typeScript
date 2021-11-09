// se utiliza para controlar las manera de como las clases van a ser creadas
// patron singletone
(() => {
  class Apocalice {
    static instance: Apocalice;

    private constructor(public name: string) {}
    static llamarApocalice(): Apocalice {
      if (!Apocalice.instance) {
        Apocalice.instance = new Apocalice("soy apocalipsis el unico");
      }
      return Apocalice.instance;
    }
  }

  const apocalice1 = Apocalice.llamarApocalice();
  console.log(apocalice1);
})();
