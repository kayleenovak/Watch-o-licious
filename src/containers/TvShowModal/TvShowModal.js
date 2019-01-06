import React, { Component } from 'react'
import { fetchTvShowInfo } from '../../thunks/fetchTvShowInfo.js'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { removeShow } from '../../actions/index.js'
import Episode from '../../components/Episode/Episode.js'

export class TvShowModal extends Component {
  constructor() {
    super()
    this.state = {
      season: 1
    }
  }

  componentDidMount() {
    this.props.fetchShowInfo(this.props.id)
  }

  findTvShow = () => {
    const matchingShow = this.props.tvShows.find(tvShow => {
      return parseInt(tvShow.id) === parseInt(this.props.id)
    })
    return matchingShow
  }

  updateSeason = (e) => {
    e.preventDefault()
    const season = e.target.innerText
    this.setState({
      season
    })
  }

  displaySeasons = () => {
    const seasons = this.props.tvShowEpisodes.map(season => {
      return <h5 onClick={(e) => this.updateSeason(e)} value={season.season}>{season.season}</h5>
    })
    return seasons
  }

  displayEpisodes = () => {
    const season = this.props.tvShowEpisodes.find(season => {
      return season.season === parseInt(this.state.season)
    }) 
    const episodes = season.episodes.map(episode => {
      console.log(episode)
      return <Episode {...episode}/>
    })
    return episodes
  }

  collapseModal = () => {
    this.props.removeShow()
    this.props.history.push('/')
  }


  render() {
    if(this.props.tvShows.length && this.props.tvShowEpisodes.length) {
      const tvShowInfo = this.findTvShow()
      const seasons = this.displaySeasons()
      const episodes = this.displayEpisodes()
      return (
        <section className='tv-show-modal'>
          <h3>{tvShowInfo.title}</h3>
          <p>{tvShowInfo.summary}</p>
          <button onClick={() => this.collapseModal()} className='collapse-modal'>X</button>
          <div>
            <h3>Seasons</h3>
            {seasons}
          </div>
          <div className='episodes'>
            {episodes}
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
  fetchShowInfo: (id) => dispatch(fetchTvShowInfo(id)),
  removeShow: () => dispatch(removeShow())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TvShowModal))

