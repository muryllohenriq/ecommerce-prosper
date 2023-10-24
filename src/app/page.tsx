'use client'

import { StyledLi } from "@/components/Li.style";
import { StyledUl } from "@/components/Ul.style";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=8");
      const data = await response.json();

      setProducts(data.products);
    } catch (error) {
      throw new Error(JSON.stringify(error))
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

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
      {products.map((item) => (
        <div>{item.title}</div>
      ))}
    </main>
  )
}
