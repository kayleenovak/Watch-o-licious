import React from 'react'
import { shallow } from 'enzyme'
import { Episode, mapDispatchToProps, mapStateToProps } from './Episode.js'
import { handleTrackedEpisode } from '../../helpers/handleToggleTracked'

jest.mock('../../helpers/handleToggleTracked')

describe('Episode', () => {
  let wrapper
  let mockHandleTracked
  let mockEpisode
  let mockTrackedShows

  beforeEach(() => {
    mockHandleTracked = jest.fn()
    mockEpisode = {
      showId: 6407,
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
      showId: 6407,
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
      trackedEpisodes={ mockTrackedShows }
      episode={ mockEpisode }
    />)
  })

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })
  
  it('should return a section, h3, button(3), div(1), img(1) if the state is false', () => {
    expect(wrapper.find('section').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(3)
    expect(wrapper.find('h3').length).toEqual(1)
    expect(wrapper.find('div').length).toEqual(1)
    expect(wrapper.find('img').length).toEqual(1)
  })

  it('should return a section, h3, div(2), img(1) and two p elements if the state is true', () => {
    wrapper.instance().expandEpisode()

    expect(wrapper.find('section').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(3)
    expect(wrapper.find('h3').length).toEqual(1)
    expect(wrapper.find('div').length).toEqual(2)
    expect(wrapper.find('p').length).toEqual(3)
    expect(wrapper.find('img').length).toEqual(1)
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
    let mockHandleTracked
    let mockTrueEpisode
    let mockTrueTrackedShows

    beforeEach(() => {
      mockHandleTracked = jest.fn()
      const mockEpisode = {
        showId: 6407,
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
      mockTrueEpisode = {
        showId: 6407,
        url: 'http://www.tvmaze.com/episodes/377894/holiday-baking-championship-1x01-holiday-cookie-madness',
        title: 'Holiday Cookie Madness',
        episode: 1,
        runtime: 60,
        summary: 'This is a summary',
        airdate: '2014-11-09',
        tracked: {
          favorites: true,
          watched: true,
          watchlist: true
        }
      }
      const mockTrackedShows = [{
        showId: 6407,
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
      mockTrueTrackedShows = [{
        showId: 6407,
        url: 'http://www.tvmaze.com/episodes/377894/holiday-baking-championship-1x01-holiday-cookie-madness',
        title: 'Holiday Cookie Madness',
        episode: 1,
        runtime: 60,
        summary: 'This is a summary',
        airdate: '2014-11-09',
        tracked: {
          favorites: true,
          watched: true,
          watchlist: true
        }
      }]
      wrapper = shallow(<Episode 
        handleTracked = { mockHandleTracked }
        tracked={ mockTrackedShows }
        episode={ mockEpisode }
      />)
    })
    it('expandEpisodshould toggle the state of expanded', () => {
      const wrapper = shallow(<Episode handleTracked = { mockHandleTracked } episode={ mockEpisode } />)

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

    it('should render add to watched in the watched button if tracked.watched is false', () => {

      expect(wrapper.find('.watched-button').text()).toEqual('Add to Watched')
    })

    it('should render remove from watched in the watched button if tracked.watched is true', () => {
      const trueWrapper = shallow(<Episode episode={ mockTrueEpisode } tracked={ mockTrueTrackedShows } handleTracked={ mockHandleTracked }/>)
      
      expect(trueWrapper.find('.tracked-watched').text()).toEqual('Remove from Watched')
    })

    it('should render add to watch list in the watch list button if tracked.watchlist is false', () => {

      expect(wrapper.find('.watchlist-button').text()).toEqual('Add to Watch List')
    })

    it('should render remove from watched in the watched button if tracked.watched is true', () => {
      const trueWrapper = shallow(<Episode episode={ mockTrueEpisode } tracked={ mockTrueTrackedShows } handleTracked={ mockHandleTracked }/>)
      
      expect(trueWrapper.find('.tracked-watchlist').text()).toEqual('Remove from Watch List')
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
        trackedEpisodes: []
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
        showId: 6407,
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
        showId: 6407,
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

      expect(mockDispatch).toHaveBeenCalledWith(handleTrackedEpisode(mockEvent, mockEpisode, mockTrackedShows))
    })
  })
})