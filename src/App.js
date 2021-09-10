import React, { useState } from 'react';
import Movie from './Movie';

const App = () => {

  const [movies, setMovies] = useState([
    { name: 'Hombre araña', price: 23, id: 44 },
    { name: 'Hulk', price: 25, id: 795 },
    { name: 'Los Increibles', price: 48, id: 3470 }
  ]
  )

  console.log(movies[2].name)
  return (

    < div >
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.price} />
      ))}

      <form>
        <input type='text' name='name' />
        <input type='text' name='price' />
        <button>Submit</button>
      </form >
    </div >
  );
}

export default App;