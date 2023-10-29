import Link from 'next/link'
import React from 'react'
import { StyledUl } from './Ul.style'
import { StyledLi } from './Li.style'
import Cart from './Cart'
import {BsFillPersonFill} from "react-icons/bs"

export default function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between"}}>
        <div>
          <StyledUl>
          <StyledLi>
              <Link href="/">Home</Link>
            </StyledLi>
            <StyledLi>
              <Link href="login">Login</Link>
            </StyledLi>
            <StyledLi>
              <Link href="cadastro">Cadastro</Link>
            </StyledLi>
          </StyledUl>
        </div>
        <div>
          <StyledUl>
            <StyledLi>
              <Cart />
            </StyledLi>
            <StyledLi>
              <BsFillPersonFill style={{ cursor: "pointer", height: "25px", width: "25px" }}/>
            </StyledLi>
          </StyledUl>
        </div>
      </div>
  )
}
