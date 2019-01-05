import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import MainPage from '../../containers/MainPage/MainPage'
import { fetchTvShows } from '../../thunks/fetchTvShows.js'
import { connect } from 'react-redux'
import TvShowModal from '../TvShowModal/TvShowModal.js'
// import { CardContainer } from '../../containers/CardContainer/CardContainer'

export class App extends Component {

  async componentDidMount() {
    await this.props.fetchTvShows()
  }

  render() {
    return (
      <div className="app">
        <Route exact to='/' component={ MainPage } />
        <Route path='/tvshow/:id' render={({ match }) => {
          const { id } = match.params
              return <TvShowModal {...this.props.tvShowInfo} />
          }} 
        />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchTvShows: (url) => dispatch(fetchTvShows(url))
})

export const mapStateToProps = (state) => ({
  tvShowInfo: state.tvShowInfo
})

export default connect(null, mapDispatchToProps)(App)

        // <Route exact to='/favorites' component={ CardContainer } />
        // <Route exact to='/watched' component={ CardContainer } />
        // <Route exact to='/watchlist' component={ CardContainer } />
