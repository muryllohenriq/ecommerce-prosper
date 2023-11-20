import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { useEffect, useState } from "react";

export function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=10");
        const data = await response.json();
        setProducts(data.products);
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.map((product: JSX.IntrinsicAttributes & { id: number; title: string; price: number; thumbnail: string; }) => (
          <Col key={product.id}>
            <StoreItem {...product} />
          </Col>
        ))}
      </Row>
    </>
  );
}