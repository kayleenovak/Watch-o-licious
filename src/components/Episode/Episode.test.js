import React from 'react'
import { shallow } from 'enzyme'
import { Episode } from './Episode.js'

describe('Episode', () => {
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

  describe('Episode methods', () => {
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
})