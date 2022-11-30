import axios from "axios";
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
      const fetchData = async () => {
      const result = await axios(
        'http://localhost:8000/books',
      );
  
      setData(result.data.data);
      };
  
      fetchData();
  }, []);

  return (
    <div className="App">
      <p>
        Buenos dias
      </p>
      {data[0]?.title}
    </div>
  );
}

export default App;
