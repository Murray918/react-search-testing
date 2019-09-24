import React from 'react'
import { shallow, mount } from 'enzyme'
import Search from './Search'

// Enzyme.configure({ adapter : new Adapter})

describe('Search component', () => {

	test('renders and exists', () => {
		const wrap = shallow(<Search />)
		expect(wrap.exists()).toBe(true)
	})

	test('user text is is properly recorded', () => {
		const wrap = shallow(<Search preformSearch={() => {}} />)
		// simulate the text changing
		wrap.find('input').simulate('change', { target: { value: 'hello' } })
		//set our expectations
		expect(wrap.find('input').props().value).toEqual('hello')
	})

	test('when the form is submitted the event is canceled', () => {
		const wrap = shallow(<Search />)
		let prevented = false
		wrap.find('form').simulate('submit', {
			preventDefault: () => {
				prevented = true
			}
		})
		expect(prevented).toBe(true)
	})

	test('renders search results when the articles change', () => {
		const mountedWrap = mount(<Search articles={[]} />)

		mountedWrap.setProps({
			articles:[ {
				webUrl: 'www.google.com',
				webTitle: "Lets freaking party y'all!!!!"
			}]
		})
		expect(mountedWrap.find('a').prop('href')).toEqual('www.google.com')
	})
})
