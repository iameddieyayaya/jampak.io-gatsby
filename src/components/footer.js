import React from 'react'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Logo from './images/logo'

const Div = styled.div`
    background: #000;
    color: #fff;
    height: 140px;
    padding: 10px;
`

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`

const SiteTitle = styled.h1`
    margin: 0;
    font-size: 1rem;
`

const LogoSize = styled.div`
    width: 3em;
    margin-right: 2px;
`

const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`

const DateWrapper = styled.div`
    text-align: right;
    font-size: 0.75rem;
    padding-top: 20px;
`


const Footer = ({ siteTitle }) => {
    return (
        <>
            <Div>
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
                <LinkWrapper>
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                        >
                            Contact
                    </Link>
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                        >
                            Support
                    </Link>
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                        >
                            Hosting
                    </Link>
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                        >
                            Performing
                    </Link>
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                        >
                            About
                    </Link>
                </LinkWrapper>
            


                    <DateWrapper>
                        © {new Date().getFullYear()}, Built with ❤️
                    </DateWrapper>
            </Div>
        </>
    )
}

Footer.propTypes = {
    siteTitle: PropTypes.string,
  }


Footer.defaultProps = {
    siteTitle: ``,
  }

export default Footer;