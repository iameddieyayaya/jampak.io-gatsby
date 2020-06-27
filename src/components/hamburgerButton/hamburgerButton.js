import React from "react"
import styled from 'styled-components'
import './hamburgerButton.css'


const Button = styled.div`
  border: none;
  outline: none;
  postion: relative;
  top: 0;

  @media (min-width: 768px) {
    display: none;
}

`

const HamburgerButton = (props) => {
  
  return (
    <>
      <Button id="nav-icon" className={props.active ? 'open' : null} onClick={props.handleClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </Button>
    </>
  )
}

export default HamburgerButton