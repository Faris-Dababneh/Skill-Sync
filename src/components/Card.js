import React from 'react';

const Card = (props) => {
    return (
      <div className='card'>
          <img src={props.img} className='card_image'></img>
          <h2 className='card_title'>{props.title}</h2>
      </div>
    );
  };
  
  export default Card;