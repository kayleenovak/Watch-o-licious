import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
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
      const { episode, runtime, summary, title, airdate, tracked } = this.props.episode
      const episodeStyle = this.state.expanded ? 'expanded-episode' : 'collapsed-episode' 
      const arrow = this.state.expanded ? 'arrow-up' : 'arrow'
      const watched = tracked.watched ? 'Remove from Watched' : 'Add to Watched'
      const watchlist = tracked.watchlist ? 'Remove from Watch List' : 'Add to Watch List'
      const favoriteText = tracked.favorites ? 'Unfavorite' : 'Favorite'

      return (
        <section className={episodeStyle}>
          <h3 className='episode-title'>Episode {episode}: {title}</h3>
          <div className='episode-btn-wrapper'>
            <button className={tracked.favorites ? 'tracked-favorite' : 'favorite-button'} onClick={(e) => this.props.handleTracked(e, this.props.episode, this.props.trackedEpisodes)} value='favorite'>{favoriteText}</button>
            <button className={tracked.watched ? 'tracked-watched' : 'watched-button'} onClick={(e) => this.props.handleTracked(e, this.props.episode, this.props.trackedEpisodes)} value='watched'>{watched}</button>
            <button className={tracked.watchlist ? 'tracked-watchlist' : 'watchlist-button'} onClick={(e) => this.props.handleTracked(e, this.props.episode, this.props.trackedEpisodes)} value='watchlist'>{watchlist}</button>
          <img alt='expand-arrow' src='/down-arrow.svg' className={arrow} onClick={() => this.expandEpisode()}/>
          </div>
          {
            !this.state.expanded ? null : <div className='episode-info'><p className='episode-summary'>{summary}</p><p>Runtime: {runtime} minutes</p><p>Original airdate: {airdate}</p></div>
          }
        </section>
      )
    }
  }
}

export const mapStateToProps = (state) => ({
  trackedEpisodes: state.tracked
})

export const mapDispatchToProps = (dispatch) => ({
  handleTracked: (e, episode, tracked) => dispatch(handleTrackedEpisode(e, episode, tracked)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Episode)

Episode.propTypes = {
  episode: PropTypes.object.isRequired,
  trackedEpisodes: PropTypes.array,
  handleTracked: PropTypes.func.isRequired 
}
