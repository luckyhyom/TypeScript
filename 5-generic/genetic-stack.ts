{
    interface Stack<T> {
        readonly size: T;
        push(value:T):void;
        pop(): T;
    }
    
    type StackNode<T> = {
        value:T,
        next:StackNode<T>
    }
    
    class StackImpl<T> implements Stack<T> {
    
        private _size:T;
    
        _node :StackNode<T>;
        
        public get size() : T {
            return this._size;
        }
        
    
        constructor() {}
    
        push(value:T):void{
            const node:StackNode<T> = {value,next:this._node};
            this._node = node;
            console.log(this._node.next);
            
        };
        pop():T{
            if(this._node == null){throw new Error('nonono')}
            const node:StackNode<T> = this._node;
            // this._node = node.next;
            this._node = {value:node.next.value,next:node.next?.next};
            let result: T = node.value;
            return result;
        };
    }
    // const impl = new StackImpl<number>();
    const impl = new StackImpl();
    impl.push('First');
    impl.push(2);
    impl.push(3);
    impl.push({value:'Forth'});
    impl.push('Fith');
    impl.push('Sixth');
    impl.push('Seventh');
    impl.push('Eighth');
    impl.push('Ninth');
    console.log();
    
    
    console.log(impl.pop());
    console.log(impl.pop());
    console.log(impl.pop());
    console.log(impl.pop());
    console.log(impl.pop());
    console.log(impl.pop());
    console.log(impl.pop());

}