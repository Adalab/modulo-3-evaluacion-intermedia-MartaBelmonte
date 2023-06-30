import React, { useEffect, useState } from 'react';
import '../styles/App.scss';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [quoteSearch, setQuoteSearch] = useState('');

  useEffect(() => {
    const fetchData = () => {
      fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json')
        .then((response) => response.json())
        .then((data) => setQuotes(data))
    };

    fetchData();
  }, []);

  const handleQuoteSearch = () => {
    setQuoteSearch(quoteSearch.toLowerCase());
  };

  const handleCharacterSelectChange = (event) => {
    setSelectedCharacter(event.target.value);
  };

  const handleQuoteInputChange = (event) => {
    setQuoteSearch(event.target.value);
  };

  const filteredQuotes = quotes.filter(quote =>
  (
    selectedCharacter === '' ||
    quote.character.toLowerCase() === selectedCharacter.toLowerCase()
  ) &&
  quote.quote.toLowerCase().includes(quoteSearch.toLowerCase())
);

  return (
  <div className="general">
  <header>
    <h1>Frases de Friends</h1>
  </header>
  <form>
    <section className="inputs">
      <div className="button1">
        <label htmlFor="characterSelect">Seleccionar personaje:</label>
        <select id="characterSelect" value={selectedCharacter} onChange={handleCharacterSelectChange}>
          <option value="">Todos los personajes</option>
          <option value="Rachel">Rachel</option>
          <option value="Ross">Ross</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Chandler">Chandler</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
        </select>
      </div>
    </section>
  </form>
  <form>
    <section className="inputs">
      <div className="button2">
        <label htmlFor="quoteInput">Buscar frase:</label>
        <input
          type="text"
          id="quoteInput"
          value={quoteSearch}
          onChange={handleQuoteInputChange}
          placeholder="Buscar frase"
        />
        <button onClick={handleQuoteSearch}>Buscar frases</button>
      </div>
    </section>
  </form>
  <div className="box">
    {filteredQuotes.map((quote, index) => (
      <div key={index} className="box_characters">
        <div className="character">{quote.character}:</div>
        <div className="quote">{quote.quote}</div>
      </div>
    ))}
  </div>
</div>
  );
}

export default App;

