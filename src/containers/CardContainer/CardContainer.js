import React, { Component } from 'react'
import { connect } from 'react-redux'
import TvShowCard from '../TvShowCard/TvShowCard'
import './CardContainer.css'

export class CardContainer extends Component {
  
  render() {
    const tvCards = this.props.tvShows.map(tvShow => {
      return <TvShowCard {...tvShow} />
    })
    return (
      <section class='card-container'>
        {tvCards}
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  tvShows: state.tvShows
})

export default connect(mapStateToProps)(CardContainer)