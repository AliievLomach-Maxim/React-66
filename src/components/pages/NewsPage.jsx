import { useState } from 'react'
import Search from '../Search/Search'
import ContentInfo from '../ContentInfo/ContentInfo'

const NewsPage = () => {
	const [searchText, setSearchText] = useState('')

	const handleSearch = (searchText) => {
		setSearchText(searchText)
	}
	return (
		<>
			<Search handleSearch={handleSearch} />
			<ContentInfo searchText={searchText} />
		</>
	)
}

export default NewsPage
