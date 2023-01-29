import styles from './App.module.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {

  const [fact, setFact] = useState("");

  const fetchCatData = () => {
    Axios.get("https://catfact.ninja/fact").then((cat) => {
      setFact(cat.data.fact);
    });
  };

  return (
    <div className={styles.App}>
      <div className={styles.catContainer}>
       <img src="./haerin.jpg" className={styles.cat}></img>
      </div>
      <div className={styles.catFactContainer}>
        <p>{fact}</p>
      </div>
      <div>
        <button onClick={fetchCatData} className={styles.catBtn}>Generate a Cat Fact</button>
      </div>
    </div>
  );
}


export default App; 
