const fetchArticles = async value => {
	if (!value) return []
	const results = await fetch(
		`https://content.guardianapis.com/search?=${value}&api-key=${process.env.REACT_APP_API_KEY}`
	)
	const response = await results.json()
	return 	response.response.results
}

export {
    fetchArticles
}

// https://content.guardianapis.com/search?api-key=073851a6-20d6-43df-8dcd-a8a1b8ac8502