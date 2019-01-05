import React from 'react'
import { shallow } from 'enzyme'
import { MainPage, mapStateToProps } from './MainPage.js'
import FeaturedTvShow from '../FeaturedTvShow/FeaturedTvShow.js'
import CardContainer from '../CardContainer/CardContainer.js'
import { mockCleanCakeShows } from '../../mockCleanData.js'

describe('MainPage', () => {
  it('should render a FeaturedTvShow and CardContainer component if there are tvShows', () => {
    const wrapper = shallow(<MainPage tvShows={ mockCleanCakeShows } />)

    expect(wrapper.find(FeaturedTvShow).length).toEqual(1)
    expect(wrapper.find(CardContainer).length).toEqual(1)
  })

  it('should not render FeaturedTvShow or CardContainer if there are no tvShows', () => {
    const wrapper = shallow(<MainPage />)

    expect(wrapper.find(FeaturedTvShow).length).toEqual(0)
    expect(wrapper.find(CardContainer).length).toEqual(0)
  })

  describe('mapStateToProps', () => {
    it('should return an object with tvShows as a key', () => {
      const mockState = {
        tvShows: mockCleanCakeShows,
        isLoading: false,
        hasErrored: false
      }
      const expected = {
        tvShows: mockCleanCakeShows
      }
      
      const result = mapStateToProps(mockState)

      expect(result).toEqual(expected)
    })
  })
})