import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment, incrementByAmount } from 'redux/counter';

import './App.css';

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Redux Toolkit</h1>
      <h2>The count is: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>&nbsp;
      <button onClick={() => dispatch(decrement())}>Decrement</button>&nbsp;
      <button onClick={() => dispatch(incrementByAmount(33))}>Increment by 33</button>
    </div>
  );
};

export default App;
