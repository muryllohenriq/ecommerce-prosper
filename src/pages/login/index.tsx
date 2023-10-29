'use client'

import { StyledCard } from "../../components/Card.style";
import Link from "next/link";

export default function Login() {

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Login feito com sucesso!');
  }

  return (
    <>
      <StyledCard>
      <Link href="/">Home</Link>
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
      <label>E-mail</label>
      <input type="text" />
      <label>Senha</label>
      <input type="password" />
      <button type="submit">Login</button>
      </form>
      </StyledCard>
    </>
  )
}