import React from 'react'
import PropTypes from 'prop-types'

const SearchResults = ({ articles = [] }) => {
	//create the li elements
	const composedArticles = articles.map(({webUrl, webTitle}) => {
 (
			<li key={webTitle}>
				<a href={webUrl} target="_blank" rel="noopener noreferrer">
					{webTitle}
				</a>
			</li>
		)
	})
	return (
		<ul className="search-results">
			{composedArticles}
		</ul>
	)
}
// export our component
export default SearchResults

//set up the proptypes
SearchResults.propTypes = {
	articles: PropTypes.array
}
