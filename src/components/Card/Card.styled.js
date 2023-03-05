import styled from 'styled-components'

export const Container = styled.div`
	background-color: ${({ isHide }) => (isHide ? 'blue' : 'black')};
	width: 300px;
	&:hover {
		background-color: red;
	}
	div > h5 {
		color: green;
	}
`
export const Photo = styled.img`
	width: 300px;
`
