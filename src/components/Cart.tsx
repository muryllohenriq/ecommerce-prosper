import { useState } from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai"

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCarrinho = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <AiOutlineShoppingCart onClick={() => toggleCarrinho()} style={{ cursor: "pointer", height: "25px", width: "25px" }}/>
    <div style={{ position: 'fixed', top: 0, right: isOpen ? 0 : '-300px', width: '300px', height: '100%', background: '#fff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', transition: '0.3s' }}>
      <h2 style={{ textAlign: 'center' }}>Carrinho</h2>
      <button onClick={toggleCarrinho} style={{ position: 'absolute', bottom: '10px', right: '10px', cursor: 'pointer' }}>
        Fechar Carrinho
      </button>
    </div>
    </>
  );
};

export default Cart;