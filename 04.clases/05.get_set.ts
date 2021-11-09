(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("constructos avenger llamado");
    }

    private getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  //Heredamos

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public IsMutant: boolean) {
      super(name, realName);
      console.log("constructor Xmen Llamado");
    }

    // llamamos al get
    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    //llamamos el set

    set fullName(name: string) {
      this.name = name;
    }
  }

  const wolverine = new Xmen("wolverin", "logan", true);

  console.log(wolverine);

  //uso get
  console.log(wolverine.fullName);
  //uso set
  wolverine.fullName = " jhony";
  console.log(wolverine.fullName);
})();
