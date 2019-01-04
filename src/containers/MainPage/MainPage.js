import React, { Component } from 'react'
import { connect } from 'react-redux'
import FeaturedTvShow from '../FeaturedTvShow/FeaturedTvShow.js'

export class MainPage extends Component {
  render() {
    if(this.props.tvShows.length) {
      return <FeaturedTvShow />
    } else {
      return <div>Loading...</div>
    }
  }
}

export const mapStateToProps = (state) => ({
  tvShows: state.tvShows
})

export default connect(mapStateToProps)(MainPage)