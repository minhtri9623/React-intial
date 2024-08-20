import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  // Khai báo biến number, biến lưu trữ là setNumber
  const [number, setNumber] = useState(0);

  // khai báo biến handleChange để sử lý việc onclick
  // Tham số result
  const handleChange = (result) => {
    setNumber(number + result)
  };

  return (
    <div className="App">
      <h1 className='heading'>"Hello world</h1>

      <div className='number'>
        <button className='btn' onClick={() => handleChange(-1)}>-</button>
        <h3>{number}</h3>
        <button className='btn' onClick={() => handleChange(1)}>+</button>
      </div>
    </div>
  );
}

export default App;


