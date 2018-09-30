import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 60px;
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
`
const Image = styled.img`
  height: 100px;
  width: 80px;
`
const Movie = ({movie, genresList}) => {
  const link = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <StyledDiv>
      <Image src={link} />
      <Description>
        <div>Title: {movie.title}</div>
        <div>Genres: {genresList.map(g => `${g.name} ` )}</div>
      </Description>
    </StyledDiv>
  )
}

export default Movie;