import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps } from './App';
import { shallow } from 'enzyme'
import { fetchTvShows } from '../../thunks/fetchTvShows.js'

describe('App', () => {
  it('should fire fetchTvShows on componentDidMount', () => {
    const mockFetchTvShows = jest.fn()
    const wrapper = shallow(<App  fetchTvShows={ mockFetchTvShows } />)

    wrapper.instance().componentDidMount()

    expect(mockFetchTvShows).toHaveBeenCalled()
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params', () => {
      const mockDispatch = jest.fn()
      const mockUrl = 'www.thisurl.com'
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.fetchTvShows(mockUrl)

      expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function))
    })
  })
})
