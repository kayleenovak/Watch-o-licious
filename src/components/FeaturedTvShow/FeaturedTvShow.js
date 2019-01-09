import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './FeaturedTvShow.css'

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
  id: PropTypes.number,
  title: PropTypes.string,
  runtime: PropTypes.number,
  premiered: PropTypes.string,
  schedule: PropTypes.object,
  network: PropTypes.string,
  summary: PropTypes.string,
  image: PropTypes.string
}

