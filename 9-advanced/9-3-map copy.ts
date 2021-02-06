{
  // 타입에다가 타입 입히기 (기능,옵션등 커스텀)

  type Video = {
    title: string;
    author: string;
  }
  // [1,2].map(item=> item*item); // [1,4]

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  }

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  }
  type VideoOptional = Optional<Video>;

  type Animal = {
    name:string;
    age:number;
  }

  const animal: Optional<Animal> = {
    name:'dog',
  }
  animal.name = 'hyomin';

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'hyomin'
  }

  // type VideoOptional = {
  //   title?: string;
  //   author?: string,
  // }
  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P]|null};
  const obj2: Nullable<Video> = {
    title:null,
    author:null,
  };

  type Proxy<T> = {
    get(): T;
    set(value:T): void;
  }

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };

}