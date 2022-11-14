import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [res, setRes] = useState();
  useEffect(() => {
    axios.get('/').then(res => setRes(res.data))
  }, [])


  return (
    <div>
      <h1>My app is running.....</h1>
      <div>{res ? res : 'not connected yet'}</div>
    </div>
  );
}

export default App;
