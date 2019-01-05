import React, { Component } from 'react'
import { connect } from 'react-redux'
import TvShowCard from '../TvShowCard/TvShowCard'
import './CardContainer.css'

export class CardContainer extends Component {

  shuffleTvShows = (tvShows) => {
    for (let i = tvShows.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tvShows[i], tvShows[j]] = [tvShows[j], tvShows[i]];
    }
    return tvShows
  }
  
  render() {
    const shuffledTvShows = this.shuffleTvShows(this.props.tvShows)
    const tvCards = shuffledTvShows.map(tvShow => {
      return <TvShowCard {...tvShow} />
    })
    return (
      <section className='card-container'>
        {tvCards}
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  tvShows: state.tvShows
})

export default connect(mapStateToProps)(CardContainer)