import { useState } from "react"

export const useCounter = (initialState = 1) => {

    const [counter, setSCounter] = useState(initialState);

    const aumentar = (e) => {
        setSCounter(counter + 1);
    }

    const reducir = (e) => {
        setSCounter(counter - 1);
    }

    const reset = (e)=>{
        setSCounter(initialState);
    }

    return{
        counter,
        aumentar,
        reducir,
        reset
    }
}
