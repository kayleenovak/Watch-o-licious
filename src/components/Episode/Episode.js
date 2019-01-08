import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToTracked, removeFromTracked, toggleFavorite, toggleWatched, toggleWatchList } from '../../actions/index.js'
import { handleTrackedEpisode } from '../../helpers/handleToggleTracked.js'
import './Episode.css'

export class Episode extends Component {
  constructor() {
    super()
    this.state = {
      expanded: false
    }
  }

  expandEpisode = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    if(this.props.episode) {
      const { episode, runtime, summary, title, airdate, image, tracked } = this.props.episode
      const episodeStyle = this.state.expanded ? 'expanded-episode' : 'collapsed-episode' 
      const arrow = this.state.expanded ? 'arrow-up' : 'arrow'
      const watched = tracked.watched ? 'Remove from Watched' : 'Add to Watched'
      const watchlist = tracked.watchlist ? 'Remove from Watch List' : 'Add to Watch List'
      const favoriteIcon = tracked.favorites ? '/favorite.svg' : '/unfavorite.svg'

      return (
        <section className={episodeStyle}>
          <h3 className='episode-title'>Episode {episode}: {title}</h3>
          <button className='favorite-button' onClick={(e) => this.props.handleTracked(e, this.props.episode, this.props.tracked)} value='favorite'><img className='favorite-icon' src={favoriteIcon} />sss</button>
          <button className='watched-button' onClick={(e) => this.props.handleTracked(e, this.props.episode, this.props.tracked)} value='watched'>{watched}</button>
          <button className='watchlist-button' onClick={(e) => this.props.handleTracked(e, this.props.episode, this.props.tracked)} value='watchlist'>{watchlist}</button>
          <img src='/down-arrow.svg' className={arrow} onClick={() => this.expandEpisode()}/>
          {
            !this.state.expanded ? null : <div><p>{summary}</p><p>Runtime: {runtime} minutes</p><p>Original airdate: {airdate}</p></div>
          }
        </section>
      )
    }
  }
}

export const mapStateToProps = (state) => ({
  tracked: state.tracked
})

export const mapDispatchToProps = (dispatch) => ({
  handleTracked: (e, episode, tracked) => dispatch(handleTrackedEpisode(e, episode, tracked)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Episode)
