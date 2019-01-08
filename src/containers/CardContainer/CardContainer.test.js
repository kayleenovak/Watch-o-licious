import React from 'react'
import { shallow } from 'enzyme'
import { isLoading, hasErrored} from '../../actions/index.js'
import { CardContainer, mapStateToProps} from './CardContainer.js'
import { mockCleanCakeShows } from '../../mockCleanData.js'
import TvShowCard from '../TvShowCard/TvShowCard.js'

describe('CardContainer', () => {
  it('should render two TvShowCards', () => {
    const mockLocation = ['/favorites']
    const wrapper = shallow(<CardContainer tvShows={ mockCleanCakeShows } location={mockLocation}/>)

    expect(wrapper.find(TvShowCard).length).toBe(2)
  })

  describe('mapStateToProps', () => {
    const mockState = {
      tvShows: mockCleanCakeShows,
      isLoading,
      hasErrored
    }
    const expected = {
      tvShows: mockCleanCakeShows
    }

    const result = mapStateToProps(mockState)

    expect(result).toEqual(expected)
  })
})