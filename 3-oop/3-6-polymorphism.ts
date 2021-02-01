{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    sugar:number;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...🧼');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
        sugar:0
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine{
    // constructor(coffeeBeans:number) {
    //   super(coffeeBeans)
    // }
    

    // addSugar(coffee:CoffeeCup, spoon:number){
    //   return {
    //     ...coffee,
    //     sugar:spoon
    //   }
    // }

    // makeSweetCoffee(shots: number, sugar:number):CoffeeCup{
    //   const coffee = super.makeCoffee(shots);
    //   return this.addSugar({
    //     ...coffee,
    //     sugar
    //   },2);
    // }
    // 커피컵을 수정하고, makeCoffee를 재사용하지 못함.. 이러면 안돼..
    // 이유는? 모든 클래스 내부의 커피컵을 수정해야하며, 코드의 메소드명을 수정해줘야함.

    // --> 커피컵을 상속받은 설탕커피컵..? 에효
    
  }

  // const machine = new CoffeeMachine(23);
  // const sweetCoffeeMachine = new SweetCoffeeMachine(23);
  // const coffee = sweetCoffeeMachine.makeCoffee(1);
  // console.log(coffee);
  // console.log(sweetCoffeeMachine.serialNumber);
}
