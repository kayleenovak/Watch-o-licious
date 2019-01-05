import React, { Component } from 'react'
import { connect } from 'react-redux'
import './FeaturedTvShow.css'

export default class FeaturedTvShow extends Component {

  render() {
    const {title, runtime, premiered, rating, summary, image} = this.props
    return (
      <section className='featured-tv-show'>
        <article className='featured-info'>
          <h3 className='featured-title'>{title}</h3>
          <p className='featured-summary'>{summary}</p>
          <p className='featured-runtime'>Runtime: {runtime} minutes</p>
          <p className='featured-date'>Premiere date: {premiered}</p>
          <p className='featured-rating'>{rating}</p>
        </article>
        <img className='featured-img' src={image} />
      </section>
    )
  }
}

