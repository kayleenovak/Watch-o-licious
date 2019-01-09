import React, { Component } from 'react'
import { fetchTvShowInfo } from '../../thunks/fetchTvShowInfo.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { removeShow } from '../../actions/index.js'
import Episode from '../Episode/Episode.js'
import './TvShowModal.css'
import { Loading } from '../../components/Loading/Loading.js'
const uuidv1 = require('uuid/v1');

export class TvShowModal extends Component {
  constructor() {
    super()
    this.state = {
      season: 1
    }
  }

  componentDidMount() {
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
      const uniqueKey = uuidv1()
      return <h5 key={uniqueKey} className={parseInt(this.state.season) === parseInt(season.season) ? 'season-selected' : 'series-season'} onClick={(e) => this.updateSeason(e)} value={season.season}>{season.season}</h5>
    })
    return seasons
  }

  displayEpisodes = () => {
    const season = this.props.tvShowEpisodes.find(season => {
      return season.season === parseInt(this.state.season)
    }) 
    const episodes = season.episodes.map(episode => {
      const uniqueKey = uuidv1()
      return <Episode episode={episode} key={uniqueKey}/>
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
                <img alt='card background' className='series-background' src={tvShowInfo.image} />
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
                <button onClick={() => this.collapseModal()} className='collapse-modal'><img alt='arrow' src='/add.svg' className='collapse-modal-icon' /></button>
                <div className='episodes'>
                  <div className='image-wrapper'>
                    <img alt='series poster' src={tvShowInfo.largeImage} className='series-image'/>
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
      return <Loading />
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

TvShowModal.propTypes = {
tvShows: PropTypes.array.isRequired,
tvShowEpisodes: PropTypes.array.isRequired,
tracked: PropTypes.array.isRequired,
fetchShowInfo: PropTypes.func.isRequired,
removeShow: PropTypes.func.isRequired,
id: PropTypes.string.isRequired
}

