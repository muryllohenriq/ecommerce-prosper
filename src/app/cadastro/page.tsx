'use client'

import { StyledCard } from "@/components/Card.style";
import Link from "next/link";
import { useState } from "react";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    address: '',
    zip: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    password: '',
    confirmPassword: '',
    privacyPolicy: ''
  })

  return (
    <>
      <StyledCard>
        <Link href="/">Home</Link>
        <h4>Cadastro</h4>
        <div>
          <label>Nome completo</label>
          <input
            type="text"
            name="name"
            onChange={handleChange} />
        </div>
        <div>
          <label>E-mail</label>
          <input
            type="email"
            name="email" />
        </div>
        <div>
          <label>Telefone</label>
          <input
            type="text"
            name="telephone" />
        </div>
        <div>
          <label>Endereço</label>
          <input
            type="text"
            name="address" />
        </div>
        <div>
          <label>CEP</label>
          <input
            type="text"
            name="zip" />
        </div>
        <div>
          <label>Número</label>
          <input
            type="number"
            name="number" />
        </div>
        <div>
          <label>Complemento</label>
          <input
            type="text"
            name="complement" />
        </div>
        <div>
          <label>Bairro</label>
          <input
            type="text"
            name="neighborhood" />
        </div>
        <div>
          <label>Cidade</label>
          <input
            type="text"
            name="city" />
        </div>
        <div>
          <label>Estado</label>
          <input
            type="text"
            name="state" />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            name="password" />
        </div>
        <div>
          <label>Confirmar senha</label>
          <input
            type="password"
            name="confirmPassword" />
        </div>
        <div>
          <label>Políticas de privacidade</label>
          <input
            type="checkbox"
            name="privacyPolicy" />
        </div>
        <button>Cadastrar</button>
      </StyledCard>
    </>
  )
}