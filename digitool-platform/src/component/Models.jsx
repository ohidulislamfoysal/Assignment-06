import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const tagColors = {
  "New": "bg-green-100 text-green-700",
  "Popular": "bg-purple-100 text-purple-700",
  "Best Seller": "bg-yellow-100 text-yellow-700"
};

const Models = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch("/models.json")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const addToCart = (product) => {
    const isFound = cart.find(item => item.id === product.id);
    if (isFound) {
      toast.error("Item already in cart!");
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.warn("Item removed from cart");
  };

  const handleCheckout = () => {
    setCart([]);
    toast.success("Checkout Successful!");
  };

  const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => {
      const priceValue = typeof item.price === 'string' 
        ? parseInt(item.price.replace('$', '')) 
        : item.price;
      return total + priceValue;
    }, 0);
  };

  if (products.length === 0)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-extrabold mb-3 text-center">Premium Digital Tools</h1>
      <p className="text-center text-gray-500 mb-10">
        Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.
      </p>

      <div className="flex justify-center mb-10 space-x-2">
        <button 
          onClick={() => setShowCart(false)}
          className={`${!showCart ? 'bg-purple-600 text-white' : 'border border-gray-300'} px-6 py-2 rounded-full shadow-md transition`}
        >
          Products
        </button>
        <button 
          onClick={() => setShowCart(true)}
          className={`${showCart ? 'bg-purple-600 text-white' : 'border border-gray-300'} px-6 py-2 rounded-full transition`}
        >
          Cart ({cart.length})
        </button>
      </div>

      {!showCart ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductItem 
              key={product.id} 
              product={product} 
              onAdd={addToCart} 
              isAdded={!!cart.find(item => item.id === product.id)}
            />
          ))}
        </div>
      ) : (
        <CartView 
          cart={cart} 
          onRemove={removeFromCart} 
          onCheckout={handleCheckout} 
          totalPrice={calculateTotal(cart)}
        />
      )}
    </div>
  );
};

const ProductItem = ({ product, onAdd, isAdded }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col hover:shadow-lg transition">
    <div className="flex justify-between items-start mb-4">
      <img src={product.image} alt={product.name} className="w-12 h-12"/>
      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${tagColors[product.tag]}`}>
        {product.tag}
      </span>
    </div>
    <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
    <p className="text-gray-500 text-sm mb-4">{product.description}</p>
    <ul className="text-sm mb-6 space-y-2">
      {product.features.map((f, i) => (
        <li key={i} className="flex items-center">
          <span className="text-green-500 mr-2">✔</span> {f}
        </li>
      ))}
    </ul>
    <div className="mt-auto flex justify-between items-center pb-4">
      <span className="text-lg font-bold">{product.price}/{product.period}</span> 
    </div>
    <button 
      onClick={() => onAdd(product)}
      className={`px-4 py-2 rounded-full text-white transition-all duration-300 ${
        isAdded 
        ? 'bg-green-500 cursor-default' 
        : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90'
      }`}
    >
      {isAdded ? 'Added to cart' : 'Buy Now'}
    </button>
  </div>
);

const CartView = ({ cart, onRemove, onCheckout, totalPrice }) => (
  <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-xl p-8">
    <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
    {cart.length > 0 ? (
      <>
        <div className="space-y-4 mb-8">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt="" className="w-10 h-10" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.price}</p>
                </div>
              </div>
              <button 
                onClick={() => onRemove(item.id)}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center border-t pt-4 mb-6">
          <span className="text-gray-500 font-medium">Total:</span>
          <span className="text-2xl font-bold">${totalPrice}</span>
        </div>
        <button 
          onClick={onCheckout}
          className="w-full bg-[#7C3AED] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#6D28D9] transition"
        >
          Proceed To Checkout
        </button>
      </>
    ) : (
      <p className="text-center text-gray-500 py-10">Your cart is empty!</p>
    )}
  </div>
);

export default Models;