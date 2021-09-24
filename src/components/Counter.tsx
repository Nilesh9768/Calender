import {useReducer} from 'react'

const reducer = (currentState : number,action : string) : number =>{

    switch(action){
        case 'increase':
            return currentState + 1
        case 'decrease':
            return currentState - 1;
        case 'reset':
            return 0;
        default:
            return currentState
    }
}
export default function Counter() {

    const [count,dispatch] = useReducer(reducer,0);
    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>dispatch('increase')}>Increase</button>
            <button onClick={()=>dispatch('decrease')}>Decrease</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}
