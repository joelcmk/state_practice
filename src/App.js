import React, { useState } from 'react';
import Movie from './Movie';

const App = () => {

  const [movies, setMovies] = useState([
    { name: 'Hombre araña', price: 23, id: 44 },
    { name: 'Hulk', price: 25, id: 795 },
    { name: 'Los Increibles', price: 48, id: 3470 }
  ])

  const [price, setPrice] = useState('');
  const [name, setName] = useState('');


  const updateName = (e) => {
    setName(e.target.value)
  }

  const updatePrice = (e) => {
    setPrice(e.target.value)
  }

  const addMovie = (e) => {
    e.preventDefault()
    setMovies(prevMovie => [...prevMovie, { name: name, price: price }]);
  }

  console.log(price)
  return (

    < div >
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.price} />
      ))}

      <form onSubmit={addMovie}>
        <input type='text' name='name' value={name} onChange={updateName} />
        <input type='text' name='price' value={price} onChange={updatePrice} />
        <button>Submit</button>
      </form >
    </div >
  );
}

export default App;