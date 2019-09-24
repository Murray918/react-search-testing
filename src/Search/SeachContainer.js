import React, { Component } from 'react'
import Search from './Search'
import { fetchArticles } from './api_service'
import SearchResults from './SearchResults'

// here is the container for the search component it stores most of the logic pertaining to the API
class SearchContainer extends Component {
	state = {
		articles: []
	}
	// make our api call and set the state
	preformSearch = async event => {
		try {
			const articles = await fetchArticles(event)
			this.setState({ articles: articles })
		} catch (error) {
			console.error(error)
		}
	}
	render() {
		return (
			<div className="Search">
				<Search preformSearch={this.preformSearch} />
				<SearchResults articles={this.state.articles} />
			</div>
		)
	}
}

export default SearchContainer
