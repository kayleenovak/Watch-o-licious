import { addToTracked, removeFromTracked, toggleFavorite, toggleWatched, toggleWatchList } from '../actions/index.js'
import { handleTrackedEpisode, handleToggleTracked, handleRemoveTracked, toggleTracked } from './handleToggleTracked.js'

const handleTracked = require('./handleToggleTracked.js')

describe('handleTrackedEpisode', () => {
  let mockEvent
  let mockEpisode
  let mockTracked
  let mockTrackedSecond

  beforeEach(() => {
    mockEvent = {
      target: {
        value: 'favorite'
      }
    }
    mockEpisode = {
      title: 'Cake Boss',
      url: 'www.cakeboss.com'
    }
    mockTracked = [{
      title: 'Cake Boss',
      url: 'www.cakeboss.com'
    }]
    mockTrackedSecond = [{
      title: 'Cake Wars',
      url: 'www.cakewars.com'
    }]
  })

  it('should call addToTracked if matchedEpisode is undefined', () => {
    const mockDispatch = jest.fn()
    const trackedFunction = handleTrackedEpisode(mockEvent, mockEpisode, mockTrackedSecond)
    
    trackedFunction(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(addToTracked(mockEpisode))
  })

  it('should call handleToggleTracked if matchedEpisode is undefined', () => {
    const mockDispatch = jest.fn()
    const trackedFunction = handleTrackedEpisode(mockEvent, mockEpisode, mockTrackedSecond)
    
    trackedFunction(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function))
  })

  it('should call handleToggleTracked if matchedEpisode is defined', () => {
    const mockDispatch = jest.fn()
    const trackedFunction = handleTrackedEpisode(mockEvent, mockEpisode, mockTracked)
    
    trackedFunction(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function))
  })
})

describe('handleToggleTracked', () => {
  let mockEpisode
  let mockTracked
  let mockTrackedSecond

  beforeEach(() => {
    mockEpisode = {
      title: 'Cake Boss',
      url: 'www.cakeboss.com'
    }
    mockTracked = [{
      title: 'Cake Boss',
      url: 'www.cakeboss.com'
    }]
    mockTrackedSecond = [{
      title: 'Cake Wars',
      url: 'www.cakewars.com'
    }]
  })

  it('should call dispatch with toggleFavorite if the target is favorite and handleRemoveTracked', () => {
    const mockDispatch = jest.fn()
    const mockEvent =  {
      target: {
        value: 'favorite'
      }
    }
    const trackedFunction = handleToggleTracked(mockEvent, mockEpisode, mockTracked)
    trackedFunction(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(toggleFavorite(mockEpisode))
    expect(mockDispatch).toHaveBeenCalledTimes(2)
  })

  it('should call dispatch with toggleWatched if the target is watched and handleRemoveTracked', () => {
    const mockDispatch = jest.fn()
    const mockEvent =  {
      target: {
        value: 'watched'
      }
    }
    const trackedFunction = handleToggleTracked(mockEvent, mockEpisode, mockTracked)
    trackedFunction(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(toggleWatched(mockEpisode))
    expect(mockDispatch).toHaveBeenCalledTimes(2)
  })

  it('should call dispatch with toggleWatchList if the target is watchlist and handleRemoveTracked', () => {
    const mockDispatch = jest.fn()
    const mockEvent =  {
      target: {
        value: 'watchlist'
      }
    }
    const trackedFunction = handleToggleTracked(mockEvent, mockEpisode, mockTracked)
    trackedFunction(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(toggleWatchList(mockEpisode))
    expect(mockDispatch).toHaveBeenCalledTimes(2)
  })

  describe('handleRemoveTracked', () => {
    let mockEpisode
    let mockTracked

    beforeEach(() => {
      mockEpisode = {
        title: 'Cake Boss',
        url: 'www.cakeboss.com',
        tracked: {
          favorites: false,
          watched: false,
          watchlist: false
        }
      }
      mockTracked = {
        title: 'Cake Boss',
        url: 'www.cakeboss.com',
        tracked: {
          favorites: false,
          watched: false,
          watchlist: false
        }
      }
    })

    it('should call dispatch if favorites, watchlist, and watched are all false', () => {
      const mockDispatch = jest.fn()
      const trackedFunction = handleRemoveTracked(mockEpisode)

      trackedFunction(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(removeFromTracked(mockEpisode))
    })
  })

  describe('toggleTracked', () => {
    it('should return a new array with an episode that has a toggled value of the key', () => {
      const mockState = [{
        title: 'Cake Boss',
        url: 'www.cakeboss.com',
        tracked: {
          favorites: false,
          watched: false,
          watchlist: false
        }
      }]
      const mockEpisode = {
        title: 'Cake Boss',
        url: 'www.cakeboss.com',
        tracked: {
          favorites: false,
          watched: false,
          watchlist: false
        }
      }
      const mockAction = {
        type: 'TOGGLE_FAVORITE',
        episode: mockEpisode
      }
      const expected = [{
        title: 'Cake Boss',
        url: 'www.cakeboss.com',
        tracked: {
          favorites: true,
          watched: false,
          watchlist: false
        }
      }]

      const result = toggleTracked(mockState, mockAction, 'favorites')

      expect(result).toEqual(expected)
    })
  })
})