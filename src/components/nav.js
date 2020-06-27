import React from 'react';
import styled from 'styled-components'
import { Link } from "gatsby"


const UL = styled.ul`
    margin: 0;
    color: #fff;
    list-style: none;
    font-size: 30px;
    position: relative;
    font-weight: 700;
    line-height: 1;
    
    .seperate {
        border: 1px solid #fff;
        width: 1.5rem;
        padding: 0;
    }


    li {
        padding: 0 0 25px;
    }

    .sub {
        font-size: 24px;
        font-weight: 400;
        color: ##d9dadc;
    }

    /* Screen >= Tablets */
    @media (min-width: 768px) {
        display: flex;
        padding: 0;
        margin: 0;
        height: 100%;
        align-items: center;
        justify-content: space-around;
        width: 55%;

        li, .sub {
            font-size: 16px;
            margin: 0;
            padding: 0;

        }

        .seperate {
            border: 1px solid #fff;
            height: 1.5rem;
            width: 0;
        }
    }
`

const Nav = ({className}) => {
    

    return (
        <>
            <UL className={className}>
                <li>                    
                    <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                    >
                        How it Works
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                        >
                        Perform
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                        >
                        Host
                    </Link>
                </li>
                <li>                    
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                    }}
                    >
                        Donate
                    </Link>
                </li>
                <li role="separator" className="seperate"></li>
                <li>                    
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                    }}
                         className="sub"
                    >
                        Sign up
                    </Link>
                </li>
                <li>                    
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                        className="sub"
                    >
                        Log In
                    </Link>
                </li>
            </UL>
        </>
    )
}

export default Nav;