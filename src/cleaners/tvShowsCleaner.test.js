import { tvShowsCleaner } from './tvShowsCleaner.js'
import { mockCakeShows, mockBakeShows, mockBakingShows } from '../mockData.js'
import { mockCleanCakeShows, mockCleanBakeShows, mockCleanBakingShows } from '../mockCleanData.js'

describe('tvShowCleaner', () => {
  it('should return an array of cleaned tvShows', () => {
    const expected = [...mockCleanCakeShows, ...mockCleanBakeShows, ...mockCleanBakingShows]
    const result = tvShowsCleaner(mockCakeShows, mockBakeShows, mockBakingShows)

    expect(result).toEqual(expected)
  })
})