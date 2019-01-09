import React from 'react'
import { Link } from 'react-router-dom'
import './FeaturedTvShow.css'
import PropTypes from 'prop-types'

export const FeaturedTvShow = (props) => {
    const {title, runtime, premiered, rating, summary, image, id} = props
    return (
      <section className='featured-tv-show'>
        <article className='featured-info'>
          <h3 className='featured-title'>{title}</h3>
          <p className='featured-summary'>{summary}</p>
          <p className='featured-runtime'>Runtime: {runtime} minutes</p>
          <p className='featured-date'>Premiere date: {premiered}</p>
          <p className='featured-rating'>{rating}</p>
          <Link to={`/tvshow/${id}`} key={id}>
            <button className='view-series-btn'>View Series</button>
          </Link>
        </article>
        <img alt='series-poster' className='featured-img' src={image} />
      </section>
    )
}

FeaturedTvShow.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  premiered: PropTypes.string.isRequired,
  schedule: PropTypes.object,
  network: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

