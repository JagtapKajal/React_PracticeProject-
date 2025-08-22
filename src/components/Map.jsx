import React from 'react'

const  Map = () =>{
    let products = [

        {id: 1, name: "Laptop", price: 50000},
        {id: 2, name: "Mobile", price: 20000},  
        {id: 3, name: "Tablet", price: 30000},
        {id: 4, name: "Smart Watch", price: 15000}
    ]
  return (
    <div>
        <h1>Product List</h1>
        <ul>
            {
            products.map((product) => (
                <li key={product.id}>
               <h2>Title = {product.name}</h2>
                <h2>Price = {product.price}</h2>
                </li>
            ))
            }
        </ul>
    </div>
  )
}

export default Map
