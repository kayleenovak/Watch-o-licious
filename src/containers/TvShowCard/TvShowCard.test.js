import React from 'react'
import { TvShowCard } from './TvShowCard.js'
import { mockCleanCakeShows } from '../../mockCleanData.js'
import { shallow } from 'enzyme'

describe('TvShowCard', () => {
  it('should return an article with an imaage, h3, 2 p elements', () => {
    const wrapper = shallow(<TvShowCard title={'Cake Boss'} />)

    expect(wrapper.find('article').length).toEqual(1)
    expect(wrapper.find('h3').length).toEqual(1)
    expect(wrapper.find('img').length).toEqual(1)
    expect(wrapper.find('p').length).toEqual(1)
  })
})