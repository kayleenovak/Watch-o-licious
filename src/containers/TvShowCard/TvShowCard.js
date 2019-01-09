import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchTvShowInfo } from '../../thunks/fetchTvShowInfo.js'
import './TvShowCard.css'
import { Link } from 'react-router-dom'

export const TvShowCard = (props) => {
  const { title, network, image, id } = props
  return (
    <article className='tv-show-card'>
      <Link to={`/tvshow/${id}`} key={id}>
        <div className='tv-card-img'>
          <img alt='series poster' src={image} className='tv-card-image'/>
        </div>
      </Link>
      <h3 className='tv-card-title'>{title}</h3>
      <p className='tv-card-network'>Network: {network}</p>
    </article>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  fetchShowInfo: (id) => dispatch(fetchTvShowInfo(id))
})

export default connect(null, mapDispatchToProps)(TvShowCard)

TvShowCard.propTypes = {
  fetchShowInfo: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  network: PropTypes.string.isRequired,
  image: PropTypes.string,
  id: PropTypes.number.isRequired,
}
