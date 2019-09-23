import React from 'react'
import { shallow } from 'enzyme'
import Search from './Search'

// Enzyme.configure({ adapter : new Adapter})

describe('Search component', () => {
	test('renders', () => {
		const wrap = shallow(<Search />)
		expect(wrap.exists()).toBe(true)
	})
	test('user text is echoed', () => {
		const wrap = shallow(<Search preformSearch={() => {}} />)
		// simulate the text changing
		wrap.find('input').simulate('change', { target: { value: 'hello' } })
		//set our expectations
		expect(wrap.find('input').props().value).toEqual('hello')
	})
	test('when the form is submited the event is canceled', () => {
		const wrap = shallow(<Search />)
		let prevented = false
		wrap.find('form').simulate('submit', {
			preventDefault: () => {
				prevented = true
			}
        })
        expect(prevented).toBe(true)
	})
})
