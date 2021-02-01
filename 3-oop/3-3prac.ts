{
    class User {
        get fullName():string{
            return `${this.firstName}${this.lastName}`
        }
        private internalAge=1;
        get age(): number{
            return this.internalAge;
        }
        set age(num:number){
            if(num<0) throw Error();
            this.internalAge = num;
        }
        constructor(private firstName: string, public lastName: string) {
        }
    }

    const user = new User('kim','hyom');
    console.log(user.age)
    user.age = 100;
    console.log(user.age)
    user.lastName = 'asd';
    console.log(user.lastName) // public 으로 만들어서 읽기, 수정 가능
    // user.fullName='asd'; // get이라 불가능
    // lastName도 set으로 정의.
}