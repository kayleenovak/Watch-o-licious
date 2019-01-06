import React from 'react'
import { shallow } from 'enzyme'
import Episode from './Episode.js'

describe('Episode', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Episode />)
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

  describe('expandEpisode', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<Episode />)
    })
    it('should toggle the state of expanded', () => {
      const wrapper = shallow(<Episode />)

      wrapper.instance().expandEpisode()

      expect(wrapper.state().expanded).toEqual(true)

      wrapper.instance().expandEpisode()

      expect(wrapper.state().expanded).toEqual(false)
    })
  })
})