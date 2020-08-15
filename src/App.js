import React, {useState, useEffect} from 'react';
import './App.css';

import { fetchLatestNews } from './api'
import NewsCards from './components/NewsCards/NewsCards';

function App() {

  const[news, setNews] = useState([])

  useEffect(() => {
    const fecthAPI = async () => {
        setNews(await fetchLatestNews())
    }
    fecthAPI()
   
  }, [])

  console.log(news)

  return (
    <div className="App">
       <NewsCards articles={news}/>
    </div>
  );
}

export default App;
