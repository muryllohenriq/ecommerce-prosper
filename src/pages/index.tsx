'use client'
import '../app/globals.css'
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from '@/components/Header';

export default function Home({ item }: any) {
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
      <Header/>
      <img src="https://images.unsplash.com/photo-1545165393-011d14b0dcf0?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" height="350px" width="100%" style={{ objectFit: "cover" }} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ display: "grid", gridTemplateColumns: "350px 350px 350px", margin: "50px" }}>
          {products.map((item) => (
            <div style={{ display: "flex", flexDirection: "column", margin: "50px" }} key={item.id}>
              <Link href={`/produto/${item.id}`}>
                <img src={item.thumbnail} alt="" height="250px" width="250px" style={{ objectFit: "cover" }} />
              </Link>
              <Link href={`/produto/${item.id}`}>
                <span>{item.title}</span>
              </Link>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
