import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [movieName, setMovieName] = useState('');
  const [age, setAge] = useState('');
  const [lastName, setLastName] = useState({ value: '', name: '' });
  const [movies, setMovies] = useState(
    [{ name: 'Joaquin', age: 34 },
    { name: 'Hector', age: 35 },
    { name: 'Lalo', age: 50 }
    ]
  )
  const [test, setTest] = useState('hello world.');

  const addName = (e) => {
    e.preventDefault();
    setName('Joel');
  }

  const addLastName = (e) => {
    e.preventDefault();
    setLastName({ name: lastName.value })
  }


  const handleChange = (e) => {
    setLastName({ value: e.target.value })
  }

  const handleName = (e) => {
    setMovieName(e.target.value)
  }

  const addMovieName = (e) => {
    e.preventDefault();
    setMovies(prevMovie => [...prevMovie, { name: movieName, age: age }]);
  }

  const handleAge = (e) => {
    setAge(e.target.value)
  }

  function solucion(a, b) {
    if (a.length >= b.length) {
      return 'Hello Joel'
    } else {
      return 'hello Yulissa'
    }
  }

  function checkPalandrum(str) {
    var lowerCase = str.toLowerCase();
    if (lowerCase === lowerCase.split('').reverse().join('')) {
      return 'joel';
    } else {
      return 'Yulissa';
    }
  }

  console.log(checkPalandrum('Bob'));

  return (
    <div>
      <h1>Hello my name is: {name}</h1>
      <p>My last name is: {lastName.name}</p>
      {movies.map(re => (
        <li>{`${re.name} ${re.age}`}</li>
      ))}
      <form onSubmit={addLastName} >
        What's your last name?
        <input name="name" type="text" value={lastName.value} onChange={handleChange} />
        <input type="submit" />
      </form>
      <form onSubmit={addName} >
        Click here to add your name
        <input type="submit" name="" />
      </form>
      <form onSubmit={addMovieName}>
        Add a movie and the price
        <input name="name" type="text" value={movieName} onChange={handleName} />
        <input name="age" type="text" value={age} onChange={handleAge} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;