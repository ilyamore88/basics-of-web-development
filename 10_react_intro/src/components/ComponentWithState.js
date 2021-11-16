import React, {useState} from "react";
import ComponentWithUseEffect from "./ComponentWithUseEffect";

export default function ComponentWithState() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            Counter: {counter}
            <button onClick={() => {
                setCounter(counter + 1);
            }}>+1</button>
            <div>
                <ComponentWithUseEffect
                    count={counter}
                />
            </div>
        </div>
    )
}