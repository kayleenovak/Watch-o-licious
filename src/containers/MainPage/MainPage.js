import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FeaturedTvShow } from '../../components/FeaturedTvShow/FeaturedTvShow.js'
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
    if(this.props.isLoading === true) {
      return <Loading />
    } else if (this.props.tvShows){
      const randomTvShow = this.randomFeaturedTvShow()
      return (
        <div className='main-page'>
          {
            randomTvShow
          }
          <CardContainer />
        </div>
      )
    } else if (this.props.hasErrored === true) {
      return <div>Error</div>
    } else {
      return <div>Error</div>
    }
  }
}

export const mapStateToProps = (state) => ({
  tvShows: state.tvShows,
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
})

export default connect(mapStateToProps)(MainPage)
