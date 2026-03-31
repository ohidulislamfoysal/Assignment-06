import { useState, useEffect } from "react";

const tagColors = {
  "New": "bg-green-100 text-green-700",
  "Popular": "bg-purple-100 text-purple-700",
  "Best Seller": "bg-yellow-100 text-yellow-700"
};

const Models = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/models.json")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  if (products.length === 0)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-extrabold  mb-3 text-center">Premium Digital Tools</h1>
      <p className="text-center text-gray-500 mb-10">
        Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.
      </p>

      <div className="flex justify-center mb-10 space-x-2">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-purple-700 transition">
          Products
        </button>
        <button className="border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100 transition">
          Cart (<span>0</span>)
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col hover:shadow-lg transition"
          >
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

            <div className="mt-auto  justify-between items-center pb-4">
              <span className="text-lg font-bold">{product.price}/{product.period}</span> 
            </div>
            <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
                Buy Now
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;