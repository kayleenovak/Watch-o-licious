import React from 'react'
import { shallow } from 'enzyme'
import { NoMatch } from './NoMatch'
import { NavLink } from 'react-router-dom'

describe('NoMatch', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<NoMatch />)

    expect(wrapper).toMatchSnapshot()
  })
  it('should return a Redirect', () => {
    const wrapper = shallow(<NoMatch />)

    expect(wrapper.find(NavLink).length).toBe(1)
    expect(wrapper.find('h3').length).toBe(1)
    expect(wrapper.find('section').length).toBe(1)
  })
})