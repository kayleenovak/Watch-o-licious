import React from 'react'
import { shallow } from 'enzyme'
import { Episode, mapDispatchToProps, mapStateToProps } from './Episode.js'

describe('Episode', () => {
  let wrapper
  let mockHandleTracked
  let mockEpisode
  let mockTrackedShows

  beforeEach(() => {
    mockHandleTracked = jest.fn()
    mockEpisode = {
      showId: '6407',
      url: 'http://www.tvmaze.com/episodes/377894/holiday-baking-championship-1x01-holiday-cookie-madness',
      title: 'Holiday Cookie Madness',
      episode: 1,
      runtime: 60,
      summary: 'This is a summary',
      airdate: '2014-11-09',
      tracked: {
        favorites: false,
        watched: false,
        watchlist: false
      }
    }
    mockTrackedShows = [{
      showId: '6407',
      url: 'http://www.tvmaze.com/episodes/377894/holiday-baking-championship-1x01-holiday-cookie-madness',
      title: 'Holiday Cookie Madness',
      episode: 1,
      runtime: 60,
      summary: 'This is a summary',
      airdate: '2014-11-09',
      tracked: {
        favorites: false,
        watched: false,
        watchlist: false
      }
    }]
    wrapper = shallow(<Episode 
      handleTracked={ mockHandleTracked }
      tracked={ mockTrackedShows }
      episode={ mockEpisode }
    />)
  })
  
  it('should return a section and an h3 if the state is false', () => {
    expect(wrapper.find('section').length).toEqual(1)
    expect(wrapper.find('h3').length).toEqual(1)
    expect(wrapper.find('div').length).toEqual(0)
  })

  it('should return a section, h3, div, and two p elements if the state is true', () => {
    wrapper.instance().expandEpisode()

    expect(wrapper.find('section').length).toEqual(1)
    expect(wrapper.find('h3').length).toEqual(1)
    expect(wrapper.find('div').length).toEqual(1)
    expect(wrapper.find('p').length).toEqual(3)
  })

  it('should invoke handleTracked on click of the favorite, watched, and watchlist buttons', () => {
    const mockEvent = {
      target: {
        value: 'favorite'
      }
    }

    wrapper.find('.favorite-button').simulate('click', mockEvent)

    expect(mockHandleTracked).toHaveBeenCalledWith(mockEvent, mockEpisode, mockTrackedShows)
  })

  it('should invoke handleTracked on click of the favorite, watched, and watchlist buttons', () => {
    const mockEvent = {
      target: {
        value: 'watched'
      }
    }

    wrapper.find('.watched-button').simulate('click', mockEvent)

    expect(mockHandleTracked).toHaveBeenCalledWith(mockEvent, mockEpisode, mockTrackedShows)
  })

  it('should invoke handleTracked on click of the favorite, watched, and watchlist buttons', () => {
    const mockEvent = {
      target: {
        value: 'watchlist'
      }
    }

    wrapper.find('.watchlist-button').simulate('click', mockEvent)

    expect(mockHandleTracked).toHaveBeenCalledWith(mockEvent, mockEpisode, mockTrackedShows)
  })

  describe('expandEpisode', () => {
    let wrapper

    beforeEach(() => {
      const mockAddToTracked = jest.fn()
      const mockRemoveFromTracked = jest.fn()
      const mockToggleFavorite = jest.fn()
      const mockToggleWatched = jest.fn()
      const mockToggleWatchList = jest.fn()
      const mockEpisode = {
        showId: '6407',
        url: 'http://www.tvmaze.com/episodes/377894/holiday-baking-championship-1x01-holiday-cookie-madness',
        title: 'Holiday Cookie Madness',
        episode: 1,
        runtime: 60,
        summary: 'This is a summary',
        airdate: '2014-11-09',
        tracked: {
          favorites: false,
          watched: false,
          watchlist: false
        }
      }
      const mockTrackedShows = [{
        showId: '6407',
        url: 'http://www.tvmaze.com/episodes/377894/holiday-baking-championship-1x01-holiday-cookie-madness',
        title: 'Holiday Cookie Madness',
        episode: 1,
        runtime: 60,
        summary: 'This is a summary',
        airdate: '2014-11-09',
        tracked: {
          favorites: false,
          watched: false,
          watchlist: false
        }
      }]
      wrapper = shallow(<Episode 
        addToTracked={ mockAddToTracked }
        removeFromTracked={ mockRemoveFromTracked }
        toggleFavorite={ mockToggleFavorite }
        toggleWatched={ mockToggleWatched }
        toggleWatchList={ mockToggleWatchList }
        tracked={ mockTrackedShows }
        episode={ mockEpisode }
      />)
    })
    it('expandEipsodshould toggle the state of expanded', () => {
      const wrapper = shallow(<Episode />)

      wrapper.instance().expandEpisode()

      expect(wrapper.state().expanded).toEqual(true)

      wrapper.instance().expandEpisode()

      expect(wrapper.state().expanded).toEqual(false)
    })

    it('should invoke expandEpisode on click', () => {
      const spyExpandEpisode = jest.spyOn(wrapper.instance(), 'expandEpisode')
      wrapper.instance().forceUpdate()

      wrapper.find('.arrow').simulate('click')

      expect(spyExpandEpisode).toHaveBeenCalled()
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with a key of tracked', () => {
      const mockState = {
        isLoading: false, 
        hasErrored: false,
        tracked: []
      }
      const expected = {
        tracked: []
      }

      const result = mapStateToProps(mockState)

      expect(result).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params', () => {
      const mockDispatch = jest.fn()
      const mockEvent = {
        target: {
          value: 'favorite'
        }
      }
      const mockEpisode = {
        showId: '6407',
        url: 'http://www.tvmaze.com/episodes/377894/holiday-baking-championship-1x01-holiday-cookie-madness',
        title: 'Holiday Cookie Madness',
        episode: 1,
        runtime: 60,
        summary: 'This is a summary',
        airdate: '2014-11-09',
        tracked: {
          favorites: false,
          watched: false,
          watchlist: false
        }
      }
      const mockTrackedShows = [{
        showId: '6407',
        url: 'http://www.tvmaze.com/episodes/377894/holiday-baking-championship-1x01-holiday-cookie-madness',
        title: 'Holiday Cookie Madness',
        episode: 1,
        runtime: 60,
        summary: 'This is a summary',
        airdate: '2014-11-09',
        tracked: {
          favorites: false,
          watched: false,
          watchlist: false
        }
      }]
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.handleTracked(mockEvent, mockEpisode, mockTrackedShows)

      expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function))
    })
  })
})