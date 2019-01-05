import React, { Component } from 'react'
import { connect } from 'react-redux'
import FeaturedTvShow from '../FeaturedTvShow/FeaturedTvShow.js'
import CardContainer from '../CardContainer/CardContainer.js'

export class MainPage extends Component {

  randomFeaturedTvShow = () => {
    const max = this.props.tvShows.length - 1
    const min = 0
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return <FeaturedTvShow {...this.props.tvShows[randomNumber]} />
  }

  render() {
    if(this.props.tvShows) {
      const randomTvShow = this.randomFeaturedTvShow()
      return (
        <div>
          {
            randomTvShow
          }
          <CardContainer />
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export const mapStateToProps = (state) => ({
  tvShows: state.tvShows
})

export default connect(mapStateToProps)(MainPage)