import './Counter.css'
import {useState} from "react";
import CounterButton from "./CounterButton";

export default function Counter() {
    const [count, setCount] = useState(0)

    function incrementCounterParentFunction(by) {
        setCount(count + by)
    }

    function decrementCounterParentFunction(by) {
        setCount(count - by)
    }
    function  resetCounterValue (){
        setCount(0)

    }


    return (
        <>
             <span className="TotalCount">
                {count}
            </span>
            <CounterButton by={1}
                           incrementMethod={incrementCounterParentFunction}
                           decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={3}
                           incrementMethod={incrementCounterParentFunction}
                           decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={5}
                           incrementMethod={incrementCounterParentFunction}
                           decrementMethod={decrementCounterParentFunction}/>

            <div>
                <button className="ResetButton"
                        onClick={resetCounterValue}
                    // style= {{fontSize:"30px"}}
                    //     style={buttonStyle}

                >Reset
                </button>
            </div>
        </>
    )
}

