{
    // JavaScript

    // let es6
    // let name = 'hello';
    // name = 'hi';

    // const
    // const age = 5;
    // age =5;


    /*
     * JavaScript
     * Primitive: number, string, booleaan, bigint,symbol,null,undefine
     * Object: function, array...
     */

     // number
     const num:number = -6;

     // string
     const str:string = 'hello';

     // boolean
     const boal: boolean = false;

     // undefined : null보다 undefined을 많이 이용함.
     // 정해지지 않음
     let name: undefined; // 똥
     let age: number | undefined;
     age = undefined;
     age = 1;
     function find(): number | undefined{
        return undefined
     }
     
     // null : 비어있음
     let person: null; // 똥
     let person2: string | null;

     // unknown : 어떤 데이터가 담길지 알 수 없는 타입
     // 똥똥똥
     let notSure: unknown =0;
     notSure = 'he';
     notSure = true;

     // any 똥똥똥
     let anything: any = 0;
     anything = 'hello';

     // void : return하지 않는.. (공허한, 비허있는)
     function print(): void {
         console.log('hello');
         return;
     }
     let unusable: void = undefined; // 똥 

     // never
     function throwError(message:string):never{
        // message -> server(log)
        throw new Error(message);
        while(true){}
     }
     let neverEnding: never; // 똥

     // object
     let obj: object = [1,2,3,4]; // 똥똥똥
     function acceptSomeObject(obj:object){}
     acceptSomeObject({name: 'ellie'});
     acceptSomeObject({animal: 'dog'});

}