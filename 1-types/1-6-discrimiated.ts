{   
    type SuccessState = {
        result:'success';
        response: {
            body: string;
        }
    }

    type FailState = {
        result:'fail',
        reason: string; 
    }

    type LoginState = SuccessState | FailState;

    // 이게 뭐지..
    function login(id: string, password: string):LoginState{
        return {
            result:'success',
            response: {
                body: 'logged in',
            },
        };
    }
    
    // printLoginState(state)
    // success -> 'Good!'
    // fail -> 'No way..'

    function printLoginState(state:LoginState) {
        if(state.result==='success'){
            console.log(`good ${state.response.body}`);
        }else{
            console.log(state.reason);
        }
    }


}