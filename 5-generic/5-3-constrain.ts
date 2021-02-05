{

    const obj = {name:'asd',age:0,fish:'air'};

    function val(obj2,com){
        // return obj2[com];
        Object.keys(obj2).forEach((key)=>{
            // console.log(key===com);
            // console.log(key);
            
            if(key===com){
                // console.log('good');
                console.log(key);
                return console.log(obj2[key]);
    
            }
        })
        
    }
val(obj,'name');
    // console.log(obj.name);
    
}