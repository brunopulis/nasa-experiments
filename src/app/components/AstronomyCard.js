import React from 'react';

const AstronomyCard = (props) => {
  const { title, url, hdurl, explanation, date, copyright, media_type } = props.data;

  return(
    <div className="astronomy-card">
      <h2 className="astronomy-title">{ title }</h2>
      <span>{ date }, { copyright } </span>
      {
        ( media_type === 'image' ) 
        ? <img src={ hdurl } className="astronomy-card__img" alt={ title } /> 
        : <iframe src="{ url }" width="500"  />
      }

      <div className="astronomy-card__body">
        <p>{ explanation }</p>
      </div>
    </div>
  )
}

export default AstronomyCard;
