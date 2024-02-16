import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from'./Counterslice';

const Store = configureStore({
    reducer: {
        counter: CounterReducer, // 'counter' should match the slice name
    },
});
export default Store;



