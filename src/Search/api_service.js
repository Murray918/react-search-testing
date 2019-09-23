const fetchArticles = async event => {
	const results = await fetch(
		`http://content.gaurdianapis.com/search?=${event}$api-key=${process.env.REACT_APP_API_KEY}`
	)
	return await results.json()
}

export {
    fetchArticles
}
