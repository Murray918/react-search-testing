const range = n => [...Array(n).keys()]

const fetchArticles = () => {
	return Promise.resolve({
		response: {
			results: range(10).map(item => ({
				webUrl: `https://party/${i}`,
				webTitle: `Some titile no${i}`
			}))
		}
	})
}

export default fetchArticles
