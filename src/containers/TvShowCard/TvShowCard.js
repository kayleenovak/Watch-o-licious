import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class TvShowCard extends Component {
  render() {
    const { title, network, rating, image} = this.props
    return (
      <article>
      <img src={image} />
        <h3>{title}</h3>
        <p>Network: {network}</p>
        <p>{rating}</p>
      </article>
    )
  }
}

