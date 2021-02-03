{
    // //Javascript
    // function jsAdd(num1,num2){
    //     return num1+num2;
    // }

    // // TypeScript
    // function add(num1:number,num2:number):number {
    //     return num1+num2;
    // }

    // // JS
    // function jsFetchNum(id) {
    //     // code..
    //     // code..
    //     return new Promise((resolve,reject)=>{
    //         resolve(100);
    //     })
    // }

    // // TS
    // function fetchNum(id:string): Promise<number> {
    //     // code..
    //     // code..
    //     return new Promise((resolve,reject)=>{
    //         resolve(100);
    //     })
    // }

    // 가독성 향상

    // JS => TS
    // Optional parameter
    function printName(firstName:string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve','Jobs');
    printName('Ellie');
    printName('Anna',undefined);

     // Default parameter
     function printMessage(message:string ='Default Message!') {
         console.log(message);
     }
     printMessage();

     // Rest parameter
     function addNumbers(...numbers:number[]):number {
         return numbers.reduce((a,b)=>a+b);
     }
     console.log(addNumbers(1,2));
}