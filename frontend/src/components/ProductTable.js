import React, { useState, useEffect } from 'react';
import axios from 'axios';

// function ProductTable() {
//   const [products, setProducts] = useState([]);


//   useEffect(() => {
//     const fetchProducts = async () => {

//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

function ProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating an API response with mock data
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 150 },
      { id: 3, name: 'Product 3', price: 200 },
      { id: 4, name: 'Product 4', price: 250 },
      { id: 5, name: 'Product 5', price: 300 }
    ];

    // Setting the mock data to the state
    setProducts(mockProducts);
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Product Information</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.id}</td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
