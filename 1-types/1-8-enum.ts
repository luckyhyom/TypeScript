{
    /*
     * Enum
     */
    // JS
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WENDESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY":0,"TUESDAY":1,"WENDSDAY":2});
    const dayOfToday = DAYS_ENUM.MONDAY;

    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wendsday';
    enum Days {
        Monday, // 값을 정하지 않으면 0부터 1씩 증가
        Tuesday, // 1..
        Wendsday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }

    // 타입이 정확하게 보장되지 않는다.
    // 타입을 묶을 수 있는 방법이 없을때만.. -> union활용가능
    console.log(Days.Monday);
    let day:Days = Days.Monday;
    day = Days.Saturday;
    day = 10;
    console.log(day);

    // ENUM 대신 union.. 타입 지정시 목록 뜨는 효과 동일
    // 다만 Native같은 다른 모바일 클라이언트같은 경우에는
    // union을 이해하지 못하므로 enum 사용
    let dayOfweek: DaysOfWeek = 'Monday';
    dayOfweek = 'Wendsday';

}