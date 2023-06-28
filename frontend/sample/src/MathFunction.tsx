import React from "react";
interface Props{
    count:number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    handleAdd: () => void
}
const MathFunction:React.FC<Props> = ({count, setCount}) => {
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>add</button>
            <button>sub</button>
        </div>
    )
}

export default MathFunction;