import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import MainPage from '../../containers/MainPage/MainPage'
import { fetchTvShows } from '../../thunks/fetchTvShows.js'
import { connect } from 'react-redux'
// import { CardContainer } from '../../containers/CardContainer/CardContainer'

export class App extends Component {

  async componentDidMount() {
    const cakeUrl = 'http://api.tvmaze.com/search/shows?q=cake'
    const bakeUrl = 'http://api.tvmaze.com/search/shows?q=bake'
    const bakingUrl = 'http://api.tvmaze.com/search/shows?q=baking'
    await this.props.fetchTvShows(cakeUrl)
    await this.props.fetchTvShows(bakeUrl)
    await this.props.fetchTvShows(bakingUrl)
  }

  render() {
    return (
      <div className="App">
        <Route exact to='/' component={ MainPage } />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchCakeShows: (url) => dispatch(fetchTvShows(url))
})

export default connect(null, mapDispatchToProps)(App)

        // <Route exact to='/favorites' component={ CardContainer } />
        // <Route exact to='/watched' component={ CardContainer } />
        // <Route exact to='/watchlist' component={ CardContainer } />
