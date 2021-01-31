{
    //Array
    const fruits: string[] = ['apple','banana'];
    const scores: Array<number> = [1,3,4];
    function printArray(fruits: readonly string[]){
        //fruits.push //불가능
        // readonly는 Array에서는 적용이 아직 안되고,
        // 객체의 불변성을 보장하는 것은 중요하므로 자주 쓰인다.
        // 그러므로 일관성있게 코드를 작성하고자 하면 []이 나음
    }

    // Tuple -> interface, type alias, class
    let student: [string, number];
    student = ['hyomin',26];
    student[0] // hyomin
    student[1] // 26
    const [name,age] = student; // object destructure
    console.log(name,age);
}