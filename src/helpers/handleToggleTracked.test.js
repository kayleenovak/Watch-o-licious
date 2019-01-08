import { addToTracked, removeFromTracked, toggleFavorite, toggleWatched, toggleWatchList } from '../actions/index.js'
import { handleTrackedEpisode, handleToggleTracked, handleRemoveTracked } from './handleToggleTracked.js'

const handleTracked = require('./handleToggleTracked.js')

describe('handleTrackedEpisode', () => {
  let mockEvent
  let mockEpisode
  let mockTracked
  let mockDispatch
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
    mockDispatch = jest.fn()
  })

  it('should call addToTracked if matchedEpisode is undefined', () => {
    const trackedFunction = handleTrackedEpisode(mockEvent, mockEpisode, mockTrackedSecond)
    
    trackedFunction(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(addToTracked(mockEpisode))
  })

  it('should call handleToggleTracked if matchedEpisode is undefined', () => {
    const trackedFunction = handleTrackedEpisode(mockEvent, mockEpisode, mockTrackedSecond)
    
    trackedFunction(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function))
  })

  it('should call handleToggleTracked if matchedEpisode is defined', () => {
    const trackedFunction = handleTrackedEpisode(mockEvent, mockEpisode, mockTracked)
    
    trackedFunction(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function))
  })
})

describe('handleToggleTracked', () => {
  let mockEpisode
  let mockTracked
  let mockDispatch
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
    mockDispatch = jest.fn()
  })

  it('should call dispatch with toggleFavorite if the target is favorite and handleRemoveTracked', () => {
    const mockEvent =  {
      target: {
        value: 'favorites'
      }
    }
    const trackedFunction = handleToggleTracked(mockEvent, mockEpisode, mockTracked)
    trackedFunction(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(toggleFavorite(mockEpisode))
    expect(mockDispatch).toHaveBeenCalledTimes(2)
  })

  it('should call dispatch with toggleWatched if the target is watched and handleRemoveTracked', () => {
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
    let mockDispatch

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
      mockDispatch = jest.fn()
    })

    it('should call dispatch if favorites, watchlist, and watched are all false', () => {
      const trackedFunction = handleRemoveTracked(mockTracked, mockEpisode)

      trackedFunction(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(removeFromTracked(mockEpisode))
    })

  })
})