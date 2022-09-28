import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    return (
        <Wrapper id='header'>
            <Link to='/'>Customer List</Link>
            <Link to='/favorite-customers'>Favorite Customers</Link>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background: black;
  padding: 20px;
  a{
    color: white;
    font-size: 20px;
  }
`;