import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import githubIcon from '../images/github-icon.png'
import linkedinIcon from '../images/linkedin-icon.png'
import twitterIcon from '../images/twitter-icon.png'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    margin-left: 1em;
    display: flex;
    align-items: center;
    &:first-child {
      position: relative;
      margin: 0;
      flex-grow: 1;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    vertical-align: middle;
    &:hover {
      color: white;
    }
    img {
      max-width: 30px;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li>
          <li>
            <a href="https://dpashutskii.com">English blog</a>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank">
              <img src={githubIcon} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dmitrii-pashutskii/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={linkedinIcon} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/guar47"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={twitterIcon} />
            </a>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
