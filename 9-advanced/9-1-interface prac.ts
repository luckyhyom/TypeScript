{
 type PositionType = {
     x:number;
     y:number;
 } 
 interface PositionInterface{
     x:number;
     y:number;
 }

 // ojbect
 const obj1: PositionType = { 
     x:1,
     y:1,
 }

 const obj2: PositionInterface = {
    x:1,
    y:1,
 }

 // class
 class Pos1 implements PositionType{
     x:number;
     y:number;
 }

 class Pos2 implements PositionInterface{
     x:number;
     y:number;
 }

 // Extexnds
 interface ZPositionInterface extends PositionInterface{
     z:number;
 }
 type ZPositionType = PositionType & {z:number};

 interface ZPositionInterface {
     z:number;
 }

 // type PositionType{     
 // }

 // type aliases can use computed properties
 type Person ={
     name: string;
     age: number;
 }
 type Name = Person['name']; // string

 type NumberType = number;
 type Direction = 'left'|'right';


}