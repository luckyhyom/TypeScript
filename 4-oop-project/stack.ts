{

    class StrBottle {
        constructor() {}

        bottle:string='';

        addStr(str:string):void{
            if(this.bottle===''){
                this.bottle=str;
                return;
            }
            this.bottle+=`,${str}`;
        }

        popStr():string{
            if(this.bottle===''){
                return 'no Str';
            }
            let start:number = 0;
            let result:string = this.bottle;

            if(this.bottle.search(',')){ // 결과는 index값이 나오지만.. true false도 된다. search,lastIndexOf
                start = this.bottle.lastIndexOf(',');
            }
                        
            if(start===0){ // index가 0이면.. ','없다는 뜻이므로 그대로 리턴하고 bottle값 ''
                let result2 = result;
                this.bottle='';
                return result2 ;
            }

            // start가 0이 아니면 ','이 있다는 뜻.. 고로 ','다음 인덱스부터 읽어서 리턴.
            result = this.bottle.substring(start+1);
            // index 0부터 마지막 ','까지 잘라낸다.
            this.bottle = this.bottle.substring(0,start);
            return  result;
        }
    }

    const bottle = new StrBottle();
    bottle.addStr('First..');
    bottle.addStr('Second..');
    bottle.addStr('Third..');
    bottle.addStr('Forth..');
    console.log(bottle.popStr());
    console.log(bottle.popStr());
    console.log(bottle.popStr());
    console.log(bottle.popStr());
    console.log(bottle.popStr());
    console.log(bottle.popStr());
    console.log(bottle.popStr());
    bottle.addStr('First..');
    bottle.addStr('Second..');
    bottle.addStr('Third..');
    bottle.addStr('Forth..');
    console.log(bottle.popStr());
    console.log(bottle.popStr());
    console.log(bottle.popStr());
    console.log(bottle.popStr());
    console.log(bottle.popStr());
}


            // for(let i=0; i<this.bottle.length;i++){
            //     let char = this.bottle.charAt(i);
            //     if(char===','){
            //         start = this.bottle.lastIndexOf(',');
            //     }
            // }