import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState({ value: '', name: '' });
  const [movies, setMovies] = useState(
    [{ name: 'Joaquin', age: 34 },
    { name: 'Hector', age: 35 },
    { name: 'Lalo', age: 50 }
    ]
  )

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



  return (
    <div>
      <h1>Hello my name is: {name}</h1>
      <p>My last name is: {lastName.name}</p>
      {movies.map(re => (
        <li>{`${re.name} ${re.age}`}</li>
      ))}
      <form onSubmit={addLastName} >
        <input name="name" type="text" value={lastName.value} onChange={handleChange} />
        <input type="submit" />
      </form>
      <form onSubmit={addName} >
        <input type="submit" name="" />
      </form>
    </div>
  );
}

export default App;