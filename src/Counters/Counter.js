import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement } from './Counterslice';
import './Counter.css'





const Counter = () => {
    const count = useSelector((state) => state.counter.value); // Use 'counter' here
    const dispatch = useDispatch();

    return (
        <div className='counter-container'>
            <div className="container">
                <p>Count: {count}</p>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter
