import React from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const StyledHeaderImage = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 100vh;
	position: relative;
	@media only screen and (max-width: 800px) {
		height: 78vh;
	}
`

const Thumbnail = styled.div`
	width: 100%;
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 0;
	@media only screen and (max-width: 800px) {
		height: 78vh;
	}
`
const Title = styled(BlockContent)`
	color: ${({ theme }) => theme.secondaryLight};
	padding-left: 6rem;
	width: 70%;
	padding-top: 20%;
	max-width: 900px;
	height: auto;
	text-align: left;
	text-decoration: none;
	z-index: 1;
	font-style: italic;


	li {
		list-style-type: none;
		text-decoration: none;
	}
	@media screen and (min-width: 1500px) {
		margin-bottom: 32px;
	}
	@media screen and (max-width: 1000px) {
		margin-bottom: 0;
	}
	@media screen and (max-width: 800px) {
		padding-top: 50px;
		font-size: 42px;
		width: 80%;
		max-width: 700px;
	}
	@media screen and (max-height: 700px) {
		padding-top: 15%;
		font-size: 42px;
	}
	@media screen and (max-height: 600px) {
		padding-top: 12%;
		font-size: 42px;
	}
	@media screen and (max-width: 500px) {
		font-size: 18px;
		padding-left: 3.5rem;
	}
	@media screen and (max-width: 350px) {
		font-size: 18px;
		width: 80%;
		padding-left: 2.5rem;
		ul { 
			padding: 0 0 0 20px;
			}
	}
`
const Overlay = styled.div`
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.3);
	position: absolute;
	left: 0;
	top: 0;
	z-index: 0;
	@media only screen and (max-width: 800px) {
		height: 83vh;
	}
`

const HeaderImage = ({ slider }) => {
	return (
		<StyledHeaderImage>
			<Thumbnail
				style={{ backgroundImage: `url(${urlFor(slider.thumbnail).quality(60).auto('format').url()})` }}
			/>
			<Overlay />
			<Title blocks={slider.heroText}></Title>
		</StyledHeaderImage>
	)
}

export default HeaderImage
