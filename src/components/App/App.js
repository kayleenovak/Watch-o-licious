import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import { MainPage } from '../../conatiners/MainPage/MainPage'
import { CardContainer } from '../../containers/CardContainer/CardContainer'
import

class App extends Component {

  componentDidMount() {
    const cakeUrl = ''
    const bakeUrl = ''
    const bakingUrl = ''
    this.props.fetchTvShows(cakeUrl)
    this.props.fetchTvShows(bakeUrl)
    this.props.fetchTvShows(bakingUrl)
  }

  render() {
    return (
      <div className="App">
        <Route exact to='/' component={ MainPage } />
        <Route exact to='/favorites' component={ CardContainer } />
        <Route exact to='/watched' component={ CardContainer } />
        <Route exact to='/watchlist' component={ CardContainer } />
        <Route component={ NoMatch } />
      </div>
    );
  }
}

export default App;
