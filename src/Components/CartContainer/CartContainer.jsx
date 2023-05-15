import React, { useContext } from 'react';
import "./CartContainer.css";
import { cartContext } from '../../Context/cartContext';
import { createOrder } from '../services/firestore';
import { useNavigate } from "react-router-dom";
import FormCheckout from "./FormCheckout";
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function CartContainer() {
  const context = useContext(cartContext);
  const { cart, itemsInCart, removeItem, totalPriceInCart, clearCart } = context;

  const navigate = useNavigate();

  async function handleCheckOut(userData) {
    const order = {
      items: cart,
      buyer: userData,
      date: new Date(),
      total: totalPriceInCart(),
    };

    const orderId = await createOrder(order);
    navigate(`/checkout/${orderId}`);
    clearCart();
  }

  if (cart.length === 0)
    return (
      <div className="cart-container">
        <h1>Carrito Vacío</h1>
      
      <Link to="/productos">
        <Button>Volver</Button>
      </Link>
      </div>
    );

  return (
    <div>
      <h1>Tu Carrito</h1>

      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Quitar</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="background">
          {cart.map((item) => (
            <tr key={item.id} className="cartList_row">
              <td>
                <img height={50} src={item.imagen} alt={item.nombre} />
              </td>
              <td>{item.nombre}</td>
              <td>$ {item.precio}</td>
              <td>{item.count}</td>
              <td>
                <button className="button3" onClick={() => removeItem(item.id)}>
                  X
                </button>
              </td>
              <th>${item.count * item.precio} </th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cartList_detail">
        <h4>El total de tu compra es de ${totalPriceInCart()}</h4>
        <FormCheckout onCheckout={handleCheckOut} />
      </div>
    </div>
  );
}


export default CartContainer;