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

  const [errors, setErrors] = useState({})

  const handleChange = (e: any) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, [name] : value
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const validationErrors = {}

    if(!formData.name.trim()) {
      validationErrors.name = "Nome é necessário"
    }

    if(!formData.email.trim()) {
      validationErrors.email = "E-mail é necessário"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
      validationErrors.email = "E-mail não válido"
    }

    if(!formData.telephone.trim()) {
      validationErrors.telephone = "Telefone é necessário"
    }

    if(!formData.address.trim()) {
      validationErrors.address = "Endereço é necessário"
    }

    if(!formData.zip.trim()) {
      validationErrors.zip = "Cep é necessário"
    }

    if(!formData.number.trim()) {
      validationErrors.number = "Número é necessário"
    }

    if(!formData.complement.trim()) {
      validationErrors.complement = "Complemento é necessário"
    }

    if(!formData.neighborhood.trim()) {
      validationErrors.neighborhood = "Bairro é necessário"
    }

    if(!formData.city.trim()) {
      validationErrors.city = "Cidade é necessário"
    }

    if(!formData.state.trim()) {
      validationErrors.state = "Estado é necessário"
    }

    if(!formData.password.trim()) {
      validationErrors.password = "Senha é necessária"
    } else if(formData.password.length < 8){
      validationErrors.password = "Senha precisa conter mais que 8 caracteres."
    }

    if(!formData.confirmPassword.trim()) {
      validationErrors.confirmPassword = "Confirmar senha é necessário"
    } else if(formData.confirmPassword !== formData.password){
      validationErrors.confirmPassword = "Senhas precisam ser iguais"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
      alert("Cadastro criado com sucesso!")
    }
  }

  return (
    <>
      <StyledCard>
        <Link href="/">Home</Link>
        <h4>Cadastro</h4>
        <form onSubmit={handleSubmit}>      
        <div>
          <label>Nome completo</label>
          <input
            type="text"
            name="name"
            onChange={handleChange} />
            {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            onChange={handleChange} />
            {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Telefone</label>
          <input
            type="text"
            name="telephone"
            onChange={handleChange} />
            {errors.telephone && <span>{errors.telephone}</span>}
        </div>
        <div>
          <label>Endereço</label>
          <input
            type="text"
            name="address"
            onChange={handleChange} />
            {errors.address && <span>{errors.address}</span>}
        </div>
        <div>
          <label>CEP</label>
          <input
            type="text"
            name="zip"
            onChange={handleChange} />
            {errors.zip && <span>{errors.zip}</span>}
        </div>
        <div>
          <label>Número</label>
          <input
            type="number"
            name="number"
            onChange={handleChange} />
            {errors.number && <span>{errors.number}</span>}
        </div>
        <div>
          <label>Complemento</label>
          <input
            type="text"
            name="complement"
            onChange={handleChange} />
            {errors.complement && <span>{errors.complement}</span>}
        </div>
        <div>
          <label>Bairro</label>
          <input
            type="text"
            name="neighborhood"
            onChange={handleChange} />
            {errors.neighborhood && <span>{errors.neighborhood}</span>}
        </div>
        <div>
          <label>Cidade</label>
          <input
            type="text"
            name="city"
            onChange={handleChange} />
            {errors.city && <span>{errors.city}</span>}
        </div>
        <div>
          <label>Estado</label>
          <input
            type="text"
            name="state"
            onChange={handleChange} />
            {errors.state && <span>{errors.state}</span>}
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            name="password"
            onChange={handleChange} />
            {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Confirmar senha</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange} />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <div>
          <label>Políticas de privacidade</label>
          <input
            type="checkbox"
            name="privacyPolicy" />
        </div>
        <button type="submit">Cadastrar</button>
        </form>
      </StyledCard>
    </>
  )
}