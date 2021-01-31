{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(resource:ResourceLoadState){
    switch (resource.state) {
      case 'loading': console.log('👀 loading...');
         break;
      case 'success': console.log('😃 loaded');
         break;
      case 'fail': console.log('😱 no network');
         break;
      default:
        break;
    }
    // if(resource.state==='loading'){
    //   console.log('👀 loading...');
    // }else if(resource.state==='success'){
    //   console.log('😃 loaded');
    // }else if(resource.state==='fail'){
    //   console.log('😱 no network');
    // }
  }

  printLoginState({ state: 'loading' }); // 
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
