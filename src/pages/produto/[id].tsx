import '../../app/globals.css'
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Produto: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        try {
          const response = await fetch(`https://dummyjson.com/products/${id}`);
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      }
    };

    getProduct();
  }, [id]);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const addToCart = () => {
    console.log(`Produto: ${product.title}, Quantidade: ${quantity}`);
  };

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <>
    <Header/>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <div>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <img src={product.thumbnail} alt={product.title} height="350px" width="350px" style={{ objectFit: "cover" }} />
        <div>
          <label htmlFor="quantity">Quantidade:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={quantity}
            style={{ width: "30px"}}
            onChange={handleQuantityChange}
          />
          <button onClick={addToCart}>Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Produto;