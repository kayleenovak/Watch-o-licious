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

  it('should call dispatch with toggleFavorite if the target is favorite', () => {
    const mockEvent =  {
      target: {
        value: 'favorites'
      }
    }
    const trackedFunction = handleToggleTracked(mockEvent, mockEpisode, mockTracked)
    trackedFunction(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(toggleFavorite(mockEpisode))
  })

  it('should call dispatch with toggleWatched if the target is watched', () => {
    const mockEvent =  {
      target: {
        value: 'watched'
      }
    }
    const trackedFunction = handleToggleTracked(mockEvent, mockEpisode, mockTracked)
    trackedFunction(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(toggleWatched(mockEpisode))
  })

  it('should call dispatch with toggleWatchList if the target is watchlist', () => {
    const mockEvent =  {
      target: {
        value: 'watchlist'
      }
    }
    const trackedFunction = handleToggleTracked(mockEvent, mockEpisode, mockTracked)
    trackedFunction(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(toggleWatchList(mockEpisode))
  })


})