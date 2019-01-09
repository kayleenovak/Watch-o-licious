import React, { Component } from 'react'
import { fetchTvShowInfo } from '../../thunks/fetchTvShowInfo.js'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { removeShow } from '../../actions/index.js'
import Episode from '../../components/Episode/Episode.js'
import './TvShowModal.css'

export class TvShowModal extends Component {
  constructor() {
    super()
    this.state = {
      season: 1
    }
  }

  componentDidMount() {
    console.log(this.props.tracked)
    this.props.fetchShowInfo(this.props.id, this.props.tracked)
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
      return <h5 className={parseInt(this.state.season) === parseInt(season.season) ? 'season-selected' : 'series-season'} onClick={(e) => this.updateSeason(e)} value={season.season}>{season.season}</h5>
    })
    return seasons
  }

  displayEpisodes = () => {
    const season = this.props.tvShowEpisodes.find(season => {
      return season.season === parseInt(this.state.season)
    }) 
    const episodes = season.episodes.map(episode => {
      return <Episode episode={episode}/>
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
        <div className='tv-show-modal-container'>
          <section className='tv-show-modal'>
            <div className='modal'>
              <div className='image-container'>
                <img className='series-background' src={tvShowInfo.image} />
                <div className='overlay'></div>
              </div>
              <article className='series-info'>
                <div className='seasons'>
                  <h3 className='series-title'>{tvShowInfo.title}</h3>
                  <p className='series-summary'>{tvShowInfo.summary}</p>
                  <h3 className='seasons-heading'>Seasons</h3>
                  <section className='series-seasons'>
                    {seasons}
                  </section>
                </div>
                <button onClick={() => this.collapseModal()} className='collapse-modal'><img src='/add.svg' className='collapse-modal-icon' /></button>
                <div className='episodes'>
                  <div className='image-wrapper'>
                    <img src={tvShowInfo.largeImage} className='series-image'/>
                  </div>
                  <div className='series-episodes'>
                    {episodes}
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export const mapStateToProps = (state) => ({
  tvShows: state.tvShows,
  tvShowEpisodes: state.tvShowEpisodes,
  tracked: state.tracked
})

export const mapDispatchToProps = (dispatch) => ({
  fetchShowInfo: (id, tracked) => dispatch(fetchTvShowInfo(id, tracked)),
  removeShow: () => dispatch(removeShow())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TvShowModal))

