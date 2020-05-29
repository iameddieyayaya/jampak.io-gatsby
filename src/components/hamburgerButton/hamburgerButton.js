import React, {useState} from "react"
import styled from 'styled-components'
import './hamburgerButton.css'


const Button = styled.div`
  border: none
`

const HamburgerButton = () => {
    const [active, setActive] = useState(false)
  
  return (
    <Button id="nav-icon" className={active ? 'open' : null} onClick={() => {setActive(!active)}}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </Button>
  )
}

export default HamburgerButton