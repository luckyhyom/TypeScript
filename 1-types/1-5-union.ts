{
    /*
     * Union Types: OR
     * 발생할 수 있는 결과중 하나만 정하고 싶을 때
     */

     // String literal 이용
     type Direction = 'left' | 'right' | 'up' | 'down';
     function move(direction: Direction) {
         console.log(direction);
     }
     move('up');

     // if(boolean)이 간결해진건가
     type TileSize = 8|16|32;
     const tile: TileSize = 16;

     //function: login -> success, fail
     // 함수를 리턴이나 매개변수로 안되나.
     type SuccessState = {
         response: {
             body: string;
         }
     }

     type FailState = {
         reason: string; 
     }

     type LoginState = SuccessState | FailState;

     function login(id: string, password: string):LoginState{
         return {
             response: {
                 body: 'logged in',
             },
         };
     }

    //  // 함수 못넣나.
    //  type Login = 'success' | 'fail';

    //  function tryLogin(params:Login) {
    //     login(1);
    //  }
    //  console.log(login(2));

    // printLoginState(state)
    // success -> 'Good!'
    // fail -> 'No way..'

    function printLoginState(state:LoginState) {
        if('response' in state){
            console.log(`good ${state.response.body}`);
        }else{
            console.log(state.reason);
        }
    }


}