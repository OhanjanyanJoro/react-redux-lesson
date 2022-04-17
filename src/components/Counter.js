import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter.count)
  const counterShown = useSelector(state => state.counter.counterShown)

  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };

  const incrementCounterHandler = () => {
    dispatch({type: 'increment'})
  };

  const decrementCounterHandler = () => {
    dispatch({type: 'decrement'})
  };
  const resetCounterHandler = () => { 
    dispatch({type: 'reset'})
  };



  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterShown && <div className={classes.value}>{counter}</div>}

      {/* cuounter@ show/hide enq anum (cuyc talis/anhetacnum) */}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      {/* increment@ nshanakum a +1 */}
      <button onClick={incrementCounterHandler}>Increment Counter</button>
      {/* decrement nshankaum a -1 */}
      <button onClick={decrementCounterHandler}>Decrement Counter</button>
      {/* reset nshanakum a zroyacnel, het berel skzbnakan vichakin */}
      <button onClick={resetCounterHandler}>Reser Counter</button>
    </main>
  );
};

export default Counter;
