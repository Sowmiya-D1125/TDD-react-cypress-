import React, { useState } from "react";
import MathFunction from "./MathFunction";
 
let name:string;
let age:number;
let isEmployee:boolean;
let technologies : string[]; //array of strings ["react",".net"]
let numbers : number[]; //array of numbers [1,2,3]
//tuple -> typed array , an  array with multiple type values
let role : [number, boolean];
role = [12,false];
//object declaration
type Person = {
    name : string;
    age ?: number; // optional
} 

let person:Person = {
    name:"Sowmiya"
}

let manyPerson:Person[]; // for multiple person (i,e) array of objects

let DOB: string| number // union, we can use as string or number

let personName:unknown; // instead of "any", we can use unknown
// diff b/w void and never

let printName:(name:string) => void //this returns undefined
let printName1:(name:string) => never //this will not return any value

type Sowmiya = {
    name : string;
    age : number;
}                                       // both are same
interface Priya{
    name : string;
    age : number;
}
name = "Sowmiya";
function Main(){

    const [count, setCount] = useState<number>(0);

    const handleAdd = () => {}
    return(
        <div>
            {count}
            <MathFunction count={count} setCount={setCount} handleAdd={handleAdd}/>
        </div>
    )
}
export default Main;