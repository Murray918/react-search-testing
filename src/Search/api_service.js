const fetchArticles = async value => {
	// if (!value) return []
	const results = await fetch(
		`https://content.guardianapis.com/search?=${value}&api-key=${process.env.REACT_APP_API_KEY}`
	)
	const response = await results.json()
	return 	response.response.results
}

export {
    fetchArticles
}