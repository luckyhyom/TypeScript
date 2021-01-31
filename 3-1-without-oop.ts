{
    type CoffeeBean = 'oneShot'|'twoShot';
    type Coffee ='americano'|'essopresso'
    function makeCoffee(shot: CoffeeBean):Coffee{
        if(shot==='oneShot'){
            return 'americano'
        }else{
            return 'essopresso'
        }
    }
    console.log(makeCoffee('oneShot'));
}