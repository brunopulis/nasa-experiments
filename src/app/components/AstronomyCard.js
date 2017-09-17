import React from 'react'

const AstronomyCard = (props) => {
  const { title, url, hdurl, explanation, date, copyright } = props.data

  return(
    <div className="astronomy-card">
      <h2 className="astronomy-title">{ title }</h2>

      <a href={ hdurl } className="astronomy-image-wrapper">
        <img src={ url } alt={ title } />
      </a>

      <p>{ explanation }</p>
      <span>{ date }, { copyright } </span>
    </div>
  )
}

export default AstronomyCard
