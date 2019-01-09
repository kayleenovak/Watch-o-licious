import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleTrackedEpisode } from '../../helpers/handleToggleTracked.js'
import './FavoriteCard.css'
import { Link } from 'react-router-dom'


export class FavoriteCard extends Component {

  findMatchedTvShow = () => {
    const match = this.props.tvShows.find(show => {
      return show.id === parseInt(this.props.episode.showId)
    })
    return match
  }

  render() {
    const { tracked, showId, title, runtime, airdate } = this.props.episode
    const matchedTvShow = this.findMatchedTvShow()
    const watched = tracked.watched ? 'Remove from Watched' : 'Add to Watched'
    const watchlist = tracked.watchlist ? 'Remove from Watch List' : 'Add to Watch List'
    const favoriteText = tracked.favorites ? 'Unfavorite' : 'Favorite'

    return (
      <section className='fav-card'>
        <div className='fav-card-background'></div>
        <img alt='series' src={matchedTvShow.image} className='fav-card-image'/>
        <article className='fav-card-info'>
          <h3 className='episode-information'>Episode: {title}</h3>
          <h5 className='episode-series'>{matchedTvShow.title}</h5>
          <Link to={`/tvshow/${showId}`} key={showId}>
            <button className='view-series-btn'>View Series</button>
          </Link>
          <p className='episode-runtime'>Runtime: {runtime}</p>
          <p className='episode-airdate'>Air date: {airdate}</p>
          <button className='fav-card-btns favorite-btn' onClick={(e) => this.props.handleTracked(e, this.props.episode, this.props.tracked)} value='favorite'>{favoriteText}</button>
          <button className='fav-card-btns watch-list-btn' onClick={(e) => this.props.handleTracked(e, this.props.episode, this.props.tracked)} value='watchlist'>{watchlist}</button>
          <button className='fav-card-btns watched-btn' onClick={(e) => this.props.handleTracked(e, this.props.episode, this.props.tracked)} value='watched'>{watched}</button>
        </article>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  tvShows: state.tvShows,
  tracked: state.tracked
})

export const mapDispatchToProps = (dispatch) => ({
  handleTracked: (e, episode, tracked) => dispatch(handleTrackedEpisode(e, episode, tracked)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCard)