import { useEffect, useState } from 'react';
import '../services/Api.js';
import '../styles/App.scss';



function App() {

const [quotes, setQuotes] = useState([]);

useEffect(() => {
const fetchData = () => {
    fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json')
        .then((response) => response.json())
        .then((data) => setQuotes(data))
        .catch((error) => console.log('Error al obtener los datos:', error));
    };

      fetchData();
  }, []);


  return (
    <div>
      <h1>Frases de Friends</h1>
      
      <div className='box'>
        {quotes.map((quote, index) => (
          <div key={index} className= 'box_characters'>{quote.quote}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
