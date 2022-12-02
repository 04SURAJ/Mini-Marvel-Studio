import React from 'react';
import '../index.css'

function Card({name,img,desc}) {
  return (
    <center>
    <div className='movie_card'>
      
      <img src={img} alt="" className='img'/>
      
      <h6 className='text'>{name}</h6>

        <button className='btn btn-warning'>Watch</button>
    </div>
    </center>
  );
}

export default Card;
