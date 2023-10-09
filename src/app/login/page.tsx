'use client'

import { StyledCard } from "@/components/Card.style";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <StyledCard>
      <Link href="/">Home</Link>
      <h4>Login</h4>
      <label>E-mail</label>
      <input type="text" />
      <label>Senha</label>
      <input type="password" />
      <button>Login</button>
      </StyledCard>
    </>
  )
}