import { createStore } from "redux";

// Action generators = function that returns and action objects
const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count: count
});

// Reducers
//Reducers are pure function ( output only depends on input )
//Never change state or action ( just return the new modified state )

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// Actions - an object that gets sent to the store
// Increment the count
// store.dispatch({
//     type: 'INCREMENT' ,
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();

// store.dispatch({
//     type: 'INCREMENT' ,
// });

store.dispatch(incrementCount());

// Reset the count
store.dispatch(resetCount());

// Decrement the count
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
