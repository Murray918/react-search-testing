import React from 'react'
import { shallow } from 'enzyme'
import SearchResults from '../SearchResults'

const mockArticles = [
	{
		webUrl: 'www.google.com',
		webTitle: "Lets freaking party y'all!!!!"
	}
]

describe('Search Results', () => {
	test('renders the articles', () => {
		const wrap = shallow(<SearchResults articles={mockArticles} />)
		expect(wrap).toMatchSnapshot()
	})
	
	test('returns the default empty array when there is no data to map through', ()=> {
		const wrap = shallow(<SearchResults />)
		expect(wrap).toMatchSnapshot()
	})
    
	test('does not break without any articles', () => {
		const wrap = shallow(<SearchResults />) 
		expect(wrap.find('li')).toHaveLength(0)
	})

	test('does not break with an empty array', () => {
		const wrap = shallow(<SearchResults articles={[]} />)
		expect(wrap.find('li')).toHaveLength(0)
	})

})
