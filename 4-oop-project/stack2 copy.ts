interface Stack {
    readonly size: number;
    push(value:string):void;
    pop(): string;
}

type StackNode = {
    value:string,
    next?:StackNode
}

class StackImpl implements Stack {

    private _size:number;

    _node :StackNode = {value:''};
    
    public get size() : number {
        return this._size;
    }
    

    constructor() {}

    push(value:string):void{
        const node:StackNode = {value,next:this._node};
        this._node = node;
        this._size +=1;
        console.log(this._node.next);
        
    };
    pop():string{
        this._size -=1;
        const node:StackNode = this._node;
        this._node = {value:node.next?.value,next:node.next?.next};
        return node.value||'';
    };
}

// const impl = new StackImpl();
impl.push('First');
impl.push('Second');
impl.push('Third');
impl.push('Forth');
impl.push('Fith');
impl.push('Sixth');
impl.push('Seventh');
impl.push('Eighth');
impl.push('Ninth');
console.log();

impl.pop();
impl.pop();
impl.pop();
impl.pop();
impl.pop();
impl.pop();