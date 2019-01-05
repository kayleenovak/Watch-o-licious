import React, { Component } from 'react'
import { fetchTvShowInfo } from '../../thunks/fetchTvShowInfo.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export class TvShowModal extends Component {
  constructor() {
    super()
    this.state = {
      season: 1
    }
  }

  findTvShow = () => {
    const matchingShow = this.props.tvShows.find(tvShow => {
      console.log(this.props.id, tvShow.id, parseInt(tvShow.id) === parseInt(this.props.id))
      return parseInt(tvShow.id) === parseInt(this.props.id)
    })
    return matchingShow
  }

  displaySeason(e) {
    e.preventDefault()
    const season = e.target.innerText
    this.setState({
      season
    })
  }

  componentDidMount() {
    console.log('mounted')
    this.props.fetchShowInfo(this.props.id)
    
  }

  render() {
    if(this.props.tvShows.length && this.props.tvShowEpisodes.length) {
      const seasons = this.props.tvShowEpisodes.map(season => {
        return <h5 onClick={(e) => this.displaySeason(e)} value={season.season}>{season.season}</h5>
      })
      const episodes = this.props.tvShowEpisodes.find(season => {
        return season.season === parseInt(this.state.season)
      })
      const seasonEpisodes = episodes.episodes.map(episode => {
        return <p>{episode.title}</p>
      })
      const tvShowInfo = this.findTvShow()
      return (
        <section className='tv-show-modal'>
          <h3>{tvShowInfo.title}</h3>
          <p>{tvShowInfo.summary}</p>
          <div>
            <h3>Seasons</h3>
            {seasons}
          </div>
          <div className='episodes'>
            {seasonEpisodes}
          </div>
          <img src={tvShowInfo.image} />
        </section>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export const mapStateToProps = (state) => ({
  tvShows: state.tvShows,
  tvShowEpisodes: state.tvShowEpisodes
})

export const mapDispatchToProps = (dispatch) => ({
  fetchShowInfo: (id) => dispatch(fetchTvShowInfo(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TvShowModal))

