import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState({ value: '' });
  const [movies, setMovies] = useState(
    [{ name: 'Joaquin', age: 34 },
    { name: 'Hector', age: 35 },
    { name: 'Lalo', age: 50 }
    ]
  )

  const updateName = (e) => {
    e.preventDefault();
    setName('Joel');
  }


  const handleChange = (e) => {
    setLastName({ value: e.target.value })
  }



  return (
    <div>
      <h1>Hello my name is: {name}</h1>
      <p>My last name is: {lastName.value}</p>
      {movies.map(re => (
        <li>{`${re.name} ${re.age}`}</li>
      ))}
      <form onSubmit={updateName}>
        <input name="name" type="text" value={lastName.value} onChange={handleChange} />
        <button>Click Here</button>
      </form>
    </div>
  );
}

export default App;