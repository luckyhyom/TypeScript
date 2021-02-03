// 커피콩도 객체지? 아닌가.. 원시타입인듯? 그래도 타입 만들어줘야하나?
// class CoffeeBean {
//     constructor(parameters) {
        
//     }
// }

// 커피콩 : 상태를 가진다.. 객체 맞지? 행동은 못가지는데..으아 (로스팅?은 바리스타에게 주어야하나.. 행동이 없으면 객체가 아닌가?)
type CoffeeBean={
    madeIn:string,
    gram:number,
};

// 커피 제조법(레시피)
type Shot = 7;


class CoffeeMachine {
    // 클래스 안에서는 타입을 지정 못하니까, 커피 종류도 밖에서 만들어야함?.. 그게 아니면 타입으로 지정 못하고 문자열로 return하게 되는데.. 아니네 ㅎ
    private coffeeBeans:CoffeeBean|undefined;
    shotGram:number=7;//gram.. 7값을 줘도 함수안에서 다시 7을 안주면 undefined가된다.
               // ':' is 타입..  '=' is 값..
    // getCoffeeSort메소드가 아닌데 값을 알 수 있다. 상관없는건가?
    coffeeSort:'ame'|'ess';

    private constructor(){} // private 하면 new로 만들지 못함.
                                        
                                        // 생성자가 아닌, static으로 인스턴스를 만드는 이유.
    static makeMachine():CoffeeMachine{ // 생성주기 관리: 싱글톤패턴,인스턴스갯수제한,등 컨틀롤 가능
        return new CoffeeMachine;       // 로직 캡슐화: 인스턴스 생성시 복잡한 로직이 있다면 간단하게 만들어줌

    }

    makeCoffee(shot:number):string {
        // this.shotGram=7;
        if(this.coffeeBeans===undefined){
            return '';
        }
        if(this.coffeeBeans.gram<shot*this.shotGram){
            return 'no beans'
        }else if(shot===1){
            this.coffeeBeans.gram-=shot*this.shotGram;
            this.coffeeSort = 'ame';
            console.log(ms1.coffeeBeans?.gram);
            return this.coffeeSort
        }else if(shot===2){
            this.coffeeBeans.gram-=shot*this.shotGram;
            this.coffeeSort = 'ess';
            console.log(ms1.coffeeBeans?.gram);
            return this.coffeeSort
        }else{
            return 'There is no kind of this Coffee';
        }
    }

    // 행위를 통해 상태를 결정한다. 고양이의 기분을 직접 바꿀 수 없다. 놀아줘야한다.
    refillBeans(coffeeBeans:CoffeeBean){
        if(this.coffeeBeans?.gram){
            this.coffeeBeans.gram+=coffeeBeans.gram;
            console.log(`added ${coffeeBeans.madeIn} Beans ${coffeeBeans.gram}g.`);
            console.log(`now: ${this.coffeeBeans.gram}g`);
        }else{
            this.coffeeBeans = coffeeBeans;
            console.log(`added ${coffeeBeans.madeIn} Beans ${coffeeBeans.gram}g.`);
            console.log(`now: ${this.coffeeBeans.gram}g`);
        }
    }
}

// let ms1:CoffeeMachine = new CoffeeMachine;
console.log(ms1.coffeeSort);
// console.log(ms1.coffeeBeans);
console.log(ms1.shotGram);
console.log(ms1.makeCoffee(2));
console.log(ms1.makeCoffee(3));
ms1.refillBeans({
    madeIn: 'korea',
    gram: 100,
});
//console.log(ms1.coffeeBeans+'BEANS');
console.log(ms1.coffeeSort+'SORT');
//ms1.coffeeBeans={gram:2000,madeIn:'asd'};
console.log(ms1.makeCoffee(2));

console.log(ms1.makeCoffee(3));
console.log(ms1.makeCoffee(2));

console.log(ms1.makeCoffee(2));

console.log(ms1.makeCoffee(2));
console.log(ms1.makeCoffee(2));
console.log(ms1.makeCoffee(2));

console.log(ms1.makeCoffee(2));

console.log(ms1.makeCoffee(2));
console.log(ms1.makeCoffee(2));
console.log(ms1.makeCoffee(2));

console.log(ms1.makeCoffee(2));
console.log(ms1.makeCoffee(2));
console.log(ms1.makeCoffee(2));
console.log(ms1.makeCoffee(2));
console.log(ms1.makeCoffee(2));
// console.log(ms1.coffeeBeans);
console.log(ms1.makeCoffee(2));
console.log(ms1.makeCoffee(2));
console.log(ms1.makeCoffee(2));
console.log(ms1.makeCoffee(2));
console.log(ms1.makeCoffee(1));