{
    /*
    * Type Aliases
    */
    type Text = string;
    const name: Text = 'hyomin';
    const address: Text = 'korea';
    type Num = number;
    type Student = {
        name: string,
        age: number;
    };
    const student: Student ={
        //animal: 'dog'
        name: 'ellie',
        age: 12,
        // 그동안 썼던 모듈들은 이렇게 만들어진건가?
    };

    /*
    * String Literal Types
    */
    type Name = 'name';
    let hyominName = 'name';
    type JSON = 'json';
    const json: JSON = 'json';
}