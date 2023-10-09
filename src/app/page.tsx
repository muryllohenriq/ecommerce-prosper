'use client'

import { StyledLi } from "@/components/Li.style";
import { StyledUl } from "@/components/Ul.style";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <StyledUl>
        <StyledLi>
          <Link href="login">Login</Link>
        </StyledLi>
        <StyledLi>
          <Link href="cadastro">Cadastro</Link>
        </StyledLi>
      </StyledUl>
    </main>
  )
}
