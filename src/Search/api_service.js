const fetchArticles = async event => {
	const results = await fetch(
		`http://content.gaurdianapis.com/search?=${event}$api-key=${API_KEY}`
	)
	return await results.json()
}

export {
    fetchArticles
}
