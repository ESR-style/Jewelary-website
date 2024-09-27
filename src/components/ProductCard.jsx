import React, { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext';
import { WishlistContext } from '../components/WhislistContext';

const ProductCard = ({ product }) => {
  const { cart, addToCart, updateCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleWishlistClick = () => {
    addToWishlist(product);
    setIsInWishlist(!isInWishlist);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    updateCart(product, quantity);
  };

  const cartItem = cart.find(item => item.id === product.id);

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure><img src={product.image} alt={product.name} /></figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <p className="text-lg font-bold">${product.price}</p>
        <div className="card-actions justify-end">
          {cartItem ? (
            <div className="flex items-center">
              <input
                type="number"
                className="input input-bordered w-16"
                value={cartItem.quantity}
                onChange={handleQuantityChange}
                min="1"
              />
            </div>
          ) : (
            <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
          )}
          <button className="btn btn-ghost" onClick={handleWishlistClick}>
            <i className={`heart-icon ${isInWishlist ? 'text-red-500' : ''}`}>❤️</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;