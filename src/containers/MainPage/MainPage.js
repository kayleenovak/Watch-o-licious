import React, { Component } from 'react'
import { connect } from 'react-redux'
import FeaturedTvShow from '../FeaturedTvShow/FeaturedTvShow.js'
import CardContainer from '../CardContainer/CardContainer.js'
import { Loading } from '../../components/Loading/Loading.js'


export class MainPage extends Component {

  randomFeaturedTvShow = () => {
    const max = this.props.tvShows.length - 1
    const min = 0
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return <FeaturedTvShow {...this.props.tvShows[randomNumber]} />
  }

  render() {
    if(this.props.tvShows.length) {
      const randomTvShow = this.randomFeaturedTvShow()
      return (
        <div className='main-page'>
          {
            randomTvShow
          }
          <CardContainer />
        </div>
      )
    } else {
      return <Loading />
    }
  }
}

export const mapStateToProps = (state) => ({
  tvShows: state.tvShows
})

export default connect(mapStateToProps)(MainPage)