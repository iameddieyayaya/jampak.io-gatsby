import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Logo from './images/logo'
import HamburgerButton from './hamburgerButton/hamburgerButton'
import styled from 'styled-components'
import Nav from '../components/nav'

const Overlay = styled.header`
    display: ${({ active }) => active ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    background: #000;
    transform: ${({ active }) => active ? 'translateX(0)' : 'translateX(100%)'};
    min-height: 100vh;
    width: 100vw;
    text-align: left;
    padding: 2rem;
    position: sticky;
    top: 0;
    left: 0;
    transition: transform .5s ease-in-out;
    z-index: 999;
    overflow-x: hidden:
    overflow-y: hidden;


`
const NavWrapper = styled.nav`
    background-color: rgba(0, 0, 0, 0.4);
    margin: 0 auto;
    padding: 0.25rem 1.26rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index 1000;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;

    
    /* Screen >= Tablets */
    @media (min-width: 768px) {
      height: 80px;
      padding: 0.25rem 3rem;

  }


  .dekstop {
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  
  `

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const SiteTitle = styled.h1`
  margin: 0;
  font-size: 1rem
`

const LogoSize = styled.div`
  width: 3em;
  margin-right: 2px;


`

const Header = ({ siteTitle }) => {
const [active, setActive] = useState(false)

  const handleClick = () => {

    setActive(!active)
}
  return (
  <>
    <NavWrapper>
        <LogoWrapper>
            <LogoSize>
                <Logo />
            </LogoSize>
            <SiteTitle>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
                >
                  {siteTitle}
              </Link>
            </SiteTitle>
          </LogoWrapper> 
        <HamburgerButton handleClick={handleClick} active={active} className='mobile' />
        <Nav className='dekstop'/>
      </NavWrapper>
      <Overlay active={active} >
        <Nav />
      </Overlay>
    </>

  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
