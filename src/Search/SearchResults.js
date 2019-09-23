import React from 'react'
import PropTypes from 'prop-types'

const SearchResults = ({ articles }) => {
	return (
		<ul className="search-results">
			{articles.map(({webUrl, webTitle}) => {
				return (
					<li key={webTitle}>
						<a href={webUrl} target="_blank" rel="noopener noreferrer">
							{webTitle}
						</a>
					</li>
				)
			})}
		</ul>
	)
}

export default SearchResults

SearchResults.propTypes = {
	articles: PropTypes.array
}
