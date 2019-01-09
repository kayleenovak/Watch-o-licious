import React from 'react'
import { Header } from './Header.js'
import { shallow } from 'enzyme'
import { NavLink } from 'react-router-dom'

describe('Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

  it('should render 4 NavLinks', () => {
    expect(wrapper.find(NavLink).length).toEqual(4)
  })
})