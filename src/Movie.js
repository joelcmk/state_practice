import React from 'react';

const Movie = (props) => {
  return (
    <div>
      {props.name}
      {'  ' + props.price}
    </div>
  )
}

export default Movie;