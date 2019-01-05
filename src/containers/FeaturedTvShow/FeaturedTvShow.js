import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class FeaturedTvShow extends Component {

  render() {
    const {title, runtime, premiered, rating, summary, image} = this.props
    return (
      <section className='featured-tv-show'>
        <h3>{title}</h3>
        <p>{summary}</p>
        <p>{runtime}</p>
        <p>{premiered}</p>
        <p>{rating}</p>
        <img src={image} />
      </section>
    )
  }
}

