import React, { Component } from 'react'
import { connect } from 'react-redux'
import './TvShowCard.css'

export default class TvShowCard extends Component {
  render() {
    const { title, network, image} = this.props
    return (
      <article className='tv-show-card'>
      <img src={image} className='tv-card-img'/>
        <h3 className='tv-card-title'>{title}</h3>
        <p className='tv-card-network'>Network: {network}</p>
      </article>
    )
  }
}

