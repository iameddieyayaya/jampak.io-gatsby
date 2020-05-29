import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from './images/logo'
import HamburgerButton from './hamburgerButton/hamburgerButton'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  background: #000
`


const NavWrapper = styled.div`
    margin: 0 auto;
    padding: 0.25rem 1.0875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* Screen >= Tablets */
    @media (min-width: 768px) {
      height: 80px;
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


const Header = ({ siteTitle }) => (
  <HeaderWrapper>
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
      <HamburgerButton />
    </NavWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
