import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding-right: 5px;
`
class Genre extends Component {

  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  render() {
    const {genre, onChange} = this.props
    return(
      <StyledDiv>
        <input type="checkbox" onChange={onChange} defaultChecked={this.state.checked}/>
        <p>{genre.name}</p>
      </StyledDiv>
    )
  }
}

export default Genre;