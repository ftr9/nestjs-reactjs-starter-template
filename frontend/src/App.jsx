import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getDatas = async () => {
      setLoading(true);
      try {
        const jsonData = await fetch('/api/v1/home/content');
        const jsonParsed = await jsonData.json();
        setData(jsonParsed);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    getDatas();
  }, []);

  if (isLoading) {
    return <h1>Loading !!!!!</h1>;
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Nest.js</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {data.map((content) => {
        return <div key={content.id}>{content.name}</div>;
      })}
    </>
  );
}

export default App;
