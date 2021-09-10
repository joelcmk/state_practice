import React from 'react';

const Movie = (props) => {
  console.log(props.name)
  return (
    <div>
      {props.name}
      {'  ' + props.price}
    </div>
  )
}

export default Movie;